function regexpEscape(string) {
  return string.replace(/[-[\]{}()+?*.,\\^$|#]/g, "\\$&");
}

export { regexpEscape };
