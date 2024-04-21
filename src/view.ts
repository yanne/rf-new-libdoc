import { Libdoc } from "./testdata";
import Handlebars from "handlebars";
import Storage from "./storage";
import Translate from "./i18n/translate";
import { regexpEscape } from "./util";

const delay = (function () {
  let timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

class View {
  storage: Storage;
  libdoc: Libdoc;
  searchTime: number;

  constructor(storage: Storage, translate: Translate) {
    this.storage = storage;
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

    Handlebars.registerHelper("unlessLast", function (length, index, options) {
      return index < length - 1 ? options.fn(this) : options.inverse(this);
    });
  }

  render(libdoc: Libdoc) {
    this.libdoc = libdoc;
    this.setTheme();
    registerPartial("arg", "argument-template");
    registerPartial("typeInfo", "type-info-template");
    registerPartial("keyword", "keyword-template");
    renderTemplate("base", libdoc, "#root");
    renderTemplate("importing", libdoc);
    renderTemplate("shortcuts", libdoc);
    document
      .getElementById("toggle-keyword-shortcuts")!
      .addEventListener("click", () => this.toggleShortcuts());
    document
      .querySelector(".clear-search")!
      .addEventListener("click", () => this.clearSearch());
    document
      .querySelector(".search-input")!
      .addEventListener("keydown", () => delay(() => this.searching(), 150));
    renderTemplate("keyword-shortcuts", libdoc);
    document
      .querySelectorAll("a.match")
      .forEach((e) => e.addEventListener("click", this.closeMenu));
    renderTemplate("keywords", libdoc);
    document.getElementById("keyword-statistics-header")!.innerText =
      "" + libdoc.keywords.length;
    renderTemplate("footer", libdoc);
    const params = new URLSearchParams(window.location.search);
    let selectedTag = "";
    if (params.has("tag")) {
      selectedTag = params.get("tag")!;
      this.tagSearch(selectedTag, window.location.hash);
    }
    if (libdoc.tags.length) {
      libdoc.selectedTag = selectedTag;
      renderTemplate("tags-shortcuts", libdoc);
    }
    this.scrollToHash();
    setTimeout(() => {
      document.getElementById("keyword-statistics-header")!.innerText =
        "" + libdoc.keywords.length;
      if (this.storage.get("keyword-wall") === "open") {
        this.openKeywordWall();
      }
    }, 0);
    createModal();
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

  tagSearch(tag: string, hash: string) {
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

  highlightMatches(string, include, givenSearchTime?: number) {
    if (givenSearchTime && givenSearchTime !== this.searchTime) {
      return;
    }
    const shortcuts = document.querySelector("#shortcuts-container .match")!;
    const keywords = document.querySelector("#keywords-container .match")!;
    if (include.name) {
      console.log("FIXME: highlight name");
      //  shortcuts.highlight(string);
      //  keywords.find('.kw').highlight(string);
    }
    if (include.args) {
      console.log("FIXME: highlight args");
      //keywords.find('.args').highlight(string);
    }
    if (include.doc) {
      console.log("FIXME: highlight doc");
      //keywords.find('.doc').highlight(string);
    }
    if (include.tags) {
      console.log("FIXME: highlight tags");
      //  var matches = keywords.find('.tags').find('a').add(
      //          $('#tags-shortcuts-container').find('a'));
      //  if (include.tagsExact) {
      //      matches = matches.filter(function (index, tag) {
      //          return $(tag).text().toUpperCase() === string.toUpperCase();
      //      });
      //  }
      //  matches.highlight(string);
    }
  }

  markMatches(pattern, include, givenSearchTime?: number, callback?: Function) {
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
    renderTemplate("keyword-shortcuts", result as Libdoc);
    renderTemplate("keywords", result as Libdoc);
    if (this.libdoc.tags.length) {
      this.libdoc.selectedTag = include.tagsExact ? pattern : "";
      renderTemplate("tags-shortcuts", this.libdoc);
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
    renderTemplate("keyword-shortcuts", this.libdoc);
    renderTemplate("keywords", this.libdoc);
    // renderTemplate("data-types", this.libdoc);
    if (this.libdoc.tags.length) {
      renderTemplate("tags", this.libdoc);
    }
    document.getElementById("keyword-statistics-header")!.innerText =
      `${this.libdoc.keywords.length}`;
    if (this.libdoc.typedocs.length) {
      document.getElementById("type-statistics-header")!.innerText =
        `${this.libdoc.typedocs.length}`;
    }
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
}

function renderTemplate(
  name: string,
  libdoc: Libdoc,
  container_selector: string = "",
) {
  const template = document.getElementById(`${name}-template`)?.innerHTML;
  const compiled_template = Handlebars.compile(template);
  if (container_selector === "") {
    container_selector = `#${name}-container`;
  }
  const target = document.body.querySelector(container_selector)!;
  target.innerHTML = compiled_template(libdoc);
}

function registerPartial(name: string, id: string) {
  const content = document.getElementById(id)?.innerHTML;
  Handlebars.registerPartial(name, Handlebars.compile(content));
}

function createModal() {
  const modalBackground = document.createElement("div");
  modalBackground.id = "modal-background";
  modalBackground.classList.add("modal-background");
  modalBackground.addEventListener("click", ({ target }) => {
    if (target?.id === "modal-background") hideModal();
  });

  const modalCloseButton = document.createElement("button");
  modalCloseButton.innerHTML = `<svg xmlns="
  http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em" className="block" data-v-2754030d="" data-v-512b0344="">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                data-v-2754030d="" fill="var(--text-color)"></path></svg>`;
  modalCloseButton.classList.add("modal-close-button");
  const modalCloseButtonContainer = document.createElement("div");
  modalCloseButtonContainer.classList.add("modal-close-button-container");
  modalCloseButtonContainer.appendChild(modalCloseButton);
  modalCloseButton.addEventListener("click", () => {
    hideModal();
  });
  modalBackground.appendChild(modalCloseButtonContainer);
  modalCloseButtonContainer.addEventListener("click", () => {
    hideModal();
  });

  const modal = document.createElement("div");
  modal.id = "modal";
  modal.classList.add("modal");
  modal.addEventListener("click", ({ target }) => {
    if (target.tagName.toUpperCase() === "A") hideModal();
  });

  const modalContent = document.createElement("div");
  modalContent.id = "modal-content";
  modalContent.classList.add("modal-content");
  modal.appendChild(modalContent);

  modalBackground.appendChild(modal);
  document.body.appendChild(modalBackground);
  document.addEventListener("keydown", ({ key }) => {
    if (key === "Escape") hideModal();
  });
}

function showModal(content) {
  const modalBackground = document.getElementById("modal-background");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  modalBackground.classList.add("visible");
  modal.classList.add("visible");
  modalContent.appendChild(content.cloneNode(true));
  document.body.style.overflow = "hidden";
}

function hideModal() {
  const modalBackground = document.getElementById("modal-background");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  modalBackground.classList.remove("visible");
  modal.classList.remove("visible");
  document.body.style.overflow = "auto";
  if (window.location.hash.indexOf("#type-") == 0)
    history.pushState("", document.title, window.location.pathname);
  // modal is hidden with a fading transition, timeout prevents premature emptying of modal
  setTimeout(() => {
    modalContent.innerHTML = "";
  }, 200);
}

export default View;