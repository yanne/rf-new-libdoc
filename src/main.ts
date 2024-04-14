import Handlebars from "handlebars";
import { Libdoc } from "./testdata";
import Translate from "./i18n/translate";

function render(libdoc: Libdoc) {
  Handlebars.registerHelper("t", function (key) {
    return Translate.getInstance().getTranslation(key);
  });

  const template = document.getElementById("base-template")?.innerHTML;
  const compiled_template = Handlebars.compile(template);

  document.body.querySelector("#root").innerHTML = compiled_template(libdoc);
}

export default render;
