import Mark from "mark.js";
import { Libdoc } from "./testdata";
import Handlebars from "handlebars";
import Storage from "./storage";
import Translate from "./i18n/translate";
import { createModal, showModal } from "./modal";
import { regexpEscape, delay } from "./util";

class View {
  storage: Storage;
  libdoc: Libdoc;
  searchTime: number;

  constructor(libdoc: Libdoc, storage: Storage, translate: Translate) {
    this.libdoc = libdoc;
    this.storage = storage;
    this.initTemplating(translate);
  }

  private initTemplating(translate: Translate) {
    Handlebars.registerHelper("t", function (key) {
      return translate.getTranslation(key);
    });
    Handlebars.registerHelper("encodeURIComponent", function (string) {
      return encodeURIComponent(string);
    });
    Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
      return arg1 == arg2 ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper("ifNotNull", function (arg1, options) {
      return arg1 !== null ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper("ifContains", function (elems, value, options) {
      return elems.indexOf(value) != -1
        ? options.fn(this)
        : options.inverse(this);
    });
    registerPartial("arg", "argument-template");
    registerPartial("typeInfo", "type-info-template");
    registerPartial("keyword", "keyword-template");
    registerPartial("dataType", "data-type-template");
  }

  render() {
    document.title = this.libdoc.name;
    this.setTheme();
    this.renderTemplate("base", this.libdoc, "#root");
    this.renderTemplate("importing");
    this.registerTypeDocHandlers("#importing-container");
    this.renderTemplate("shortcuts");
    document
      .getElementById("toggle-keyword-shortcuts")!
      .addEventListener("click", () => this.toggleShortcuts());
    document
      .querySelector(".clear-search")!
      .addEventListener("click", () => this.clearSearch());
    document
      .querySelector(".search-input")!
      .addEventListener("keydown", () => delay(() => this.searching(), 150));
    this.renderTemplate("keyword-shortcuts");
    document
      .querySelectorAll("a.match")
      .forEach((e) => e.addEventListener("click", this.closeMenu));
    this.renderKeywords();
    document.getElementById("keyword-statistics-header")!.innerText =
      "" + this.libdoc.keywords.length;
    this.renderTemplate("data-types");
    this.renderTemplate("footer");
    const params = new URLSearchParams(window.location.search);
    let selectedTag = "";
    if (params.has("tag")) {
      selectedTag = params.get("tag")!;
      this.tagSearch(selectedTag, window.location.hash);
    }
    if (this.libdoc.tags.length) {
      this.libdoc.selectedTag = selectedTag;
      this.renderTemplate("tags-shortcuts");
      document.getElementById("tags-shortcuts-container")!.onchange = (e) => {
        const value = (e.target as HTMLSelectElement).selectedOptions[0].value;
        if (value != "") {
          this.tagSearch(value);
        } else {
          this.clearTagSearch();
        }
      };
    }
    this.scrollToHash();
    setTimeout(() => {
      document.getElementById("keyword-statistics-header")!.innerText =
        "" + this.libdoc.keywords.length;
      if (this.storage.get("keyword-wall") === "open") {
        this.openKeywordWall();
      }
    }, 0);
    window.addEventListener(
      "hashchange",
      function () {
        (
          document.getElementsByClassName(
            "hamburger-menu",
          )[0]! as HTMLInputElement
        ).checked = false;
      },
      false,
    );
    window.addEventListener(
      "hashchange",
      function () {
        if (window.location.hash.indexOf("#type-") == 0) {
          const hash =
            "#type-modal-" + decodeURI(window.location.hash.slice(6));
          const typeDoc = document
            .querySelector(".data-types")!
            .querySelector(hash);
          if (typeDoc) {
            showModal(typeDoc);
          }
        }
      },
      false,
    );
    createModal();
  }

  private registerTypeDocHandlers(container: string) {
    document.querySelectorAll(`${container} a.type`).forEach((elem) =>
      elem.addEventListener("click", (e) => {
        const typeDoc = (e.target as HTMLElement).dataset.typedoc;
        showModal(document.querySelector(`#type-modal-${typeDoc}`));
      }),
    );
  }

  private renderKeywords(libdoc: Libdoc | null = null) {
    if (libdoc == null) {
      libdoc = this.libdoc;
    }
    this.renderTemplate("keywords", libdoc);
    document.querySelectorAll(".kw-tags span").forEach((elem) => {
      elem.addEventListener("click", (e) => {
        this.tagSearch((e.target! as HTMLSpanElement).innerText);
      });
    });
    this.registerTypeDocHandlers("#keywords-container");
  }

  setTheme() {
    document.documentElement.setAttribute("data-theme", this.getTheme());
  }

  scrollToHash() {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const elem = document.getElementById(decodeURIComponent(hash));
      if (elem != null) {
        elem.scrollIntoView();
      }
    }
  }

  getTheme() {
    if (this.libdoc["theme"]) {
      return this.libdoc["theme"];
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  }

  tagSearch(tag: string, hash?: string) {
    (
      document.getElementsByClassName("search-input")[0] as HTMLInputElement
    ).value = "";
    const include = { tags: true, tagsExact: true };
    const url = window.location.pathname + "?tag=" + tag + (hash || "");
    this.markMatches(tag, include);
    this.highlightMatches(tag, include);
    history.replaceState && history.replaceState(null, "", url);
    document.getElementById("keyword-shortcuts-container")!.scrollTop = 0;
  }

  clearTagSearch() {
    (
      document.getElementsByClassName("search-input")[0] as HTMLInputElement
    ).value = "";
    history.replaceState &&
      history.replaceState(null, "", window.location.pathname);
    this.resetKeywords();
  }

  searching() {
    this.searchTime = Date.now();
    const value = (
      document.getElementsByClassName("search-input")![0] as HTMLInputElement
    ).value;
    const include = { name: true, args: true, doc: true, tags: true };

    if (value) {
      requestAnimationFrame(() => {
        this.markMatches(value, include, this.searchTime, () => {
          this.highlightMatches(value, include, this.searchTime);
          document.getElementById("keyword-shortcuts-container")!.scrollTop = 0;
        });
      });
    } else {
      this.resetKeywords();
    }
  }

  highlightMatches(string: string, include, givenSearchTime?: number) {
    if (givenSearchTime && givenSearchTime !== this.searchTime) {
      return;
    }
    const shortcuts = document.querySelectorAll("#shortcuts-container .match");
    const keywords = document.querySelectorAll("#keywords-container .match");
    if (include.name) {
      new Mark(shortcuts).mark(string);
      new Mark(keywords).mark(string);
    }
    if (include.args) {
      new Mark(
        document.querySelectorAll("#keywords-container .match .args"),
      ).mark(string);
    }
    if (include.doc) {
      new Mark(
        document.querySelectorAll("#keywords-container .match .doc"),
      ).mark(string);
    }
    if (include.tags) {
      const matches = document.querySelectorAll(
        "#keywords-container .match .tags a, #tags-shortcuts-container .match .tags a",
      );
      if (include.tagsExact) {
        const filtered: Array<Element> = [];
        for (const elem of matches) {
          if (elem.textContent?.toUpperCase() == string.toUpperCase())
            filtered.push(elem);
        }
        new Mark(filtered).mark(string);
      } else {
        new Mark(matches).mark(string);
      }
    }
  }

  markMatches(
    pattern,
    include,
    givenSearchTime?: number,
    callback?: FrameRequestCallback,
  ) {
    if (givenSearchTime && givenSearchTime !== this.searchTime) {
      return;
    }
    let patternRegexp = regexpEscape(pattern);
    if (include.tagsExact) {
      patternRegexp = "^" + patternRegexp + "$";
    }
    let regexp = new RegExp(patternRegexp, "i");
    let test = regexp.test.bind(regexp);
    let result = {} as Libdoc;
    let keywordMatchCount = 0;
    result.keywords = this.libdoc.keywords.map((orig) => {
      const kw = { ...orig };
      kw.hidden =
        !(include.name && test(kw.name)) &&
        !(include.args && test(kw.args)) &&
        !(include.doc && test(kw.doc)) &&
        !(include.tags && kw.tags.some(test));
      if (!kw.hidden) keywordMatchCount++;
      return kw;
    });
    this.renderTemplate("keyword-shortcuts", result as Libdoc);
    this.renderKeywords(result as Libdoc);
    if (this.libdoc.tags.length) {
      this.libdoc.selectedTag = include.tagsExact ? pattern : "";
      this.renderTemplate("tags-shortcuts");
    }
    document.getElementById("keyword-statistics-header")!.innerText =
      keywordMatchCount + " / " + result.keywords.length;
    if (keywordMatchCount === 0)
      (
        document.querySelector("#keywords-container table") as HTMLTableElement
      ).innerHTML = "";
    if (callback) {
      requestAnimationFrame(callback);
    }
  }

  closeMenu() {
    (
      document.getElementById("hamburger-menu-input")! as HTMLInputElement
    ).checked = false;
  }

  openKeywordWall() {
    const shortcuts = document.getElementsByClassName("shortcuts")[0];
    shortcuts.classList.add("keyword-wall");
    this.storage.set("keyword-wall", "open");
    const button = document.getElementById("toggle-keyword-shortcuts");
    button!.innerText = "-";
  }

  closeKeywordWall() {
    const shortcuts = document.getElementsByClassName("shortcuts")[0];
    shortcuts.classList.remove("keyword-wall");
    this.storage.set("keyword-wall", "close");
    const button = document.getElementById("toggle-keyword-shortcuts");
    button!.innerText = "+";
  }

  toggleShortcuts() {
    const shortcuts = document.getElementsByClassName("shortcuts")[0];
    if (shortcuts.classList.contains("keyword-wall")) {
      this.closeKeywordWall();
    } else {
      this.openKeywordWall();
    }
  }

  resetKeywords() {
    this.renderTemplate("keyword-shortcuts");
    this.renderKeywords();
    if (this.libdoc.tags.length) {
      this.renderTemplate("tags-shortcuts");
    }
    document.getElementById("keyword-statistics-header")!.innerText =
      `${this.libdoc.keywords.length}`;
    history.replaceState && history.replaceState(null, "", location.pathname);
  }

  clearSearch() {
    (
      document.getElementsByClassName("search-input")[0] as HTMLInputElement
    ).value = "";
    const tagsSelect = document.getElementById("tags-shortcuts-container");
    if (tagsSelect) {
      (tagsSelect as HTMLSelectElement).selectedIndex = 0;
    }
    this.resetKeywords();
  }

  renderTemplate(
    name: string,
    libdoc: Libdoc | null = null,
    container_selector: string = "",
  ) {
    const template = document.getElementById(`${name}-template`)?.innerHTML;
    const compiled_template = Handlebars.compile(template);

    if (libdoc == null) {
      libdoc = this.libdoc;
    }
    if (container_selector === "") {
      container_selector = `#${name}-container`;
    }

    const target = document.body.querySelector(container_selector)!;
    target.innerHTML = compiled_template(libdoc);
  }
}

function registerPartial(name: string, id: string) {
  const content = document.getElementById(id)?.innerHTML;
  Handlebars.registerPartial(name, Handlebars.compile(content));
}

export default View;
