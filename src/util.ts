function regexpEscape(string) {
  return string.replace(/[-[\]{}()+?*.,\\^$|#]/g, "\\$&");
}

const delay = (function () {
  let timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

export { regexpEscape, delay };
