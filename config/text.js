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
    imageAlt: "Mountain landscape at golden hour",
    by: [
      "Your one stop shop for your Knoxville DJ needs"
    ],
    ctaLabel: "Get An Estimate",
    ctaHref: "https://forms.google.com/your-form-link",
    scroll: "Scroll to explore"
  },

  about: {
    title: "About Lakatosh Entertainment",
    body: [
      "Welcome to Lakatosh Entertainment, your one-stop shop for all your DJ needs. Our team has experience with weddings, parties, ministry events, and proms."
    ]
  },

  reviews: {
    title: "Reviews",
    items: [
      { quote: "Lakatosh Entertainment absolutely made our wedding reception unforgettable. The music, the energy, the flow - everything was perfect.", name: "&mdash; Bride, June 2026" },
      { quote: "Professional, reliable, and a blast to work with. Our guests are still talking about it weeks later.", name: "&mdash; Event Coordinator" },
      { quote: "They handled our ministry event with the perfect balance of energy and respect. Highly recommended.", name: "&mdash; Ministry Volunteer" }
    ]
  },

  faq: {
    title: "FAQ",
    items: [
      { q: "What types of events do you cover?", a: "Weddings, birthday parties, ministry events, proms, corporate functions, and more. If it needs music, we can cover it." },
      { q: "What equipment do you bring?", a: "We bring professional sound, lighting, and microphones, plus a backup setup to keep your event running smoothly." },
      { q: "Can you read the room and adapt?", a: "Yes - we tailor every set to your event and keep the energy matching the moment, from slow first dances to packed dance floors." }
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
    email: "hello@lakatosh.com",
    emailHref: "mailto:hello@lakatosh.com"
  }
};
