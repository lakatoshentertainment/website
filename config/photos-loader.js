/*
  Photo loader — applies window.PHOTOS (set in config/photos.js) to the page.
  Maps: [data-slot="hero"], [data-slot="gallery-0..N"]
*/
(function () {
  const P = window.PHOTOS || {};
  const setSrc = (el, name) => { if (el) el.src = "config/" + name; };

  setSrc(document.querySelector('[data-slot="hero"]'), P.hero);

  (P.gallery || []).forEach((name, i) => {
    setSrc(document.querySelector('[data-slot="gallery-' + i + '"]'), name);
  });
})();