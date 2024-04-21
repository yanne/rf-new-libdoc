import { Libdoc } from "./testdata";
import Storage from "./storage";
import Translate from "./i18n/translate";
import View from "./view";

function render(libdoc: Libdoc) {
  const storage = new Storage("libdoc");
  const translate = Translate.getInstance();
  const view = new View(storage, translate);
  document.title = libdoc.name;
  view.render(libdoc);
}

export default render;
