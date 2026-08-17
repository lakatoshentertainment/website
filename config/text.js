/*
  TEXT — the file you edit to change ALL the words on the page.

  HTML is allowed in any string (so things like <em>North</em>, <br> and <a>
  work). Everything set on the page comes from this object; edit any value and
  reload the page.

  Structure overview:
    nav.links          -> the nav items (+ logo), used for desktop & mobile
    hero               -> hero section copy
    about              -> about section copy
    reviews            -> reviews section copy
    faq                -> faq section copy
    gallery            -> gallery title/count + captions
    contact            -> contact heading, facebook / instagram / email links
*/

window.TEXT = {
  meta: {
    title: "Lakatosh Entertainment"
  },

  nav: {
    logo: "Lakatosh Entertainment",
    toggleAria: "Toggle navigation",
    closeAria: "Close menu",
    links: [
      { label: "About", href: "#about" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" }
    ]
  },

  hero: {
    issue: "",
    title: "LAKATOSH ENTERTAINMENT</em>",
    imageAlt: "People having gun at wedding reception",
    by: [
      "Wedding DJ packages starting at $1200."
    ],
    ctaLabel: "Book Now",
    ctaHref: "https://docs.google.com/forms/d/e/1FAIpQLSf5-A5_OGs2YeRuDopdplnyta027j4FxX3PD8cLor1ZA2q9OQ/viewform?usp=header",
    scroll: "Scroll to explore"
  },

  about: {
    title: "About",
    body: [
      "Lakatosh entertainment brings years of experience in live sound, wedding DJing, and MCing to the east Tennessee area. Every wedding is unique, and yours deserves to be handled skillfully, professionally, and tastefully. If you need a party done right, call the best at Lakatosh Entertainment."
    ]
  },

  reviews: {
    title: "Reviews",
    items: [
      { quote: "Lakatosh Entertainment helped make our wedding into a truly unforgettable evening. Couldn’t recommend enough.", name: "&mdash; Cole, Groom April 2026" },
      { quote: "Professional, reliable, and a blast to work with. Our guests are still talking about it weeks later.", name: "&mdash; Event Coordinator" },
      { quote: "They handled our ministry event with the perfect balance of energy and respect. Highly recommended.", name: "&mdash; Ministry Volunteer" }
    ]
  },

  faq: {
    title: "FAQ",
    items: [
      { q: "Do you travel?", a: "Yes! We serve all of East Tennessee with a focus on the greater Knoxville area. Travel fees may apply for venues outside our standard service area." },
      { q: "Do you do corporate events?", a: "Yes! Lakatosh Entertainment serves all MC and DJ needs for corporate events, proms, and celebrations of every kind. Email directly for pricing." },
      { q: "What if the DJ gets sick before the wedding?", a: "No worries. Lakatosh Entertainment works with a trusted network of substitute DJs, so no matter what happens, the show goes on." }
    ]
  },

  gallery: {
    title: "Gallery",
    count: "",
    items: [
      { title: "Dawn Patrol",      sub: "Lofoten, 05:42 AM", alt: "Arctic landscape" },
      { title: "Reine Village",    sub: "Nordland, Norway", alt: "Coastal village" },
      { title: "Still Water",      sub: "Flakstad Beach", alt: "Mountain reflection" },
      { title: "Glacial Blue",     sub: "Jokulsarlon Lagoon", alt: "Ice formations" },
      { title: "Seljalandsfoss",   sub: "South Iceland", alt: "Waterfall cascade" },
      { title: "Vestmanna Cliffs", sub: "Faroe Islands", alt: "Northern coastline" },
      { title: "Saksun",           sub: "Streymoy, Faroes", alt: "Turf-roofed houses" }
    ]
  },

  contact: {
    heading: "Contact",
    facebook: { label: "Facebook", href: "https://www.facebook.com/yourpage" },
    instagram: { label: "Instagram", href: "https://www.instagram.com/yourhandle" },
    email: "lakatoshentertainment@gmail.com",
    emailHref: "mailto:lakatoshentertainment@gmail.com"
  }
};
