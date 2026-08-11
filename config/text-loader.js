/*
  Text loader — applies window.TEXT (set in config/text.js) to the page.

  Three mechanisms:
    1. [data-attr="meta.title"]    -> sets the page <title>
     2. [data-text="path.to.value"] -> element.innerHTML = resolved value
        Arrays index with numbers, e.g. "about.body.0".
    3. [data-list="key"]           -> every <a> inside gets href + text from the
       matching array of {label, href} entries (by position).

   For images / aria-labels, use data-attr too:
     4. [data-attr="path"] on an <img>      -> sets el.alt
        [data-attr="path"] on an <a>        -> sets el.href
        [data-attr="path"] on a single <title> -> sets document title
        [data-attr="path"] on an aria-labeled element -> sets aria-label
*/
(function () {
  const T = window.TEXT || {};

  const resolve = (path) => {
    return path.split(".").reduce((o, key) => (o == null ? undefined : o[key]), T);
  };

  const titleEl = document.querySelector('title[data-attr]');
  if (titleEl) {
    const value = resolve(titleEl.getAttribute("data-attr"));
    if (value != null) document.title = value;
  }

  document.querySelectorAll("[data-text]").forEach((el) => {
    const value = resolve(el.getAttribute("data-text"));
    if (value == null) return;
    if (el.tagName === "INPUT") el.placeholder = value;
    else el.innerHTML = value;
  });

  document.querySelectorAll("[data-list]").forEach((list) => {
    const items = resolve(list.getAttribute("data-list"));
    if (!Array.isArray(items)) return;
    list.querySelectorAll("a").forEach((a, i) => {
      const item = items[i];
      if (!item) return;
      if (item.href) a.href = item.href;
      if (item.label) a.innerHTML = item.label;
    });
  });

  document.querySelectorAll("[data-paragraphs]").forEach((container) => {
    const items = resolve(container.getAttribute("data-paragraphs"));
    if (!Array.isArray(items)) return;
    container.innerHTML = items
      .filter((text) => text != null && String(text).trim() !== "")
      .map((text) => '<p class="prologue-text">' + text + "</p>")
      .join("");
  });

  document.querySelectorAll("[data-attr]").forEach((el) => {
    if (el.tagName === "TITLE") return;
    const value = resolve(el.getAttribute("data-attr"));
    if (value == null) return;
    if (el.tagName === "IMG") el.alt = value;
    else if (el.tagName === "A") el.href = value;
    else if (el.hasAttribute("aria-label")) el.setAttribute("aria-label", value);
  });
})();
