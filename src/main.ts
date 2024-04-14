import Handlebars from "handlebars";
import { Libdoc } from "./testdata";
import Translate from "./i18n/translate";

function render(libdoc: Libdoc) {
  Handlebars.registerHelper("t", function (key) {
    return Translate.getInstance().getTranslation(key);
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
  registerPartial("arg", "argument-template");
  registerPartial("typeInfo", "type-info-template");
  registerPartial("keyword", "keyword-template");
  renderTemplate("base-template", "#root", libdoc);
  renderTemplate("importing-template", "#importing-container", libdoc);
  renderTemplate("keywords-template", "#keywords-container", libdoc);
}

function renderTemplate(id, container, libdoc: Libdoc) {
  const template = document.getElementById(id)?.innerHTML;
  const compiled_template = Handlebars.compile(template);
  document.body.querySelector(container).innerHTML = compiled_template(libdoc);
}

function registerPartial(name, id) {
  const content = document.getElementById(id)?.innerHTML;
  Handlebars.registerPartial(name, Handlebars.compile(content));
}

export default render;
