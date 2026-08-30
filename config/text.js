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
    title: "LAKATOSH ENTERTAINMENT",
    imageAlt: "People having gun at wedding reception",
    by: [
      "Wedding DJ packages starting at $1200."
    ],
    ctaLabel: "Book Now",
    ctaHref: "https://docs.google.com/forms/d/e/1FAIpQLSf5-A5_OGs2YeRuDopdplnyta027j4FxX3PD8cLor1ZA2q9OQ/viewform?usp=header"
  },

  about: {
    title: "About",
    body: [
      "Every wedding is unique, and yours deserves to be handled with skill, professionalism, and style. With years of experience in live sound, wedding DJing, and MC services throughout East Tennessee, we bring the knowledge, energy, and attention to detail needed to keep your celebration moving from the first song to the final dance.",

      "We work closely with each couple to understand your vision, musical tastes, and expectations. Whether you're planning a traditional wedding or the party of a lifetime, we tailor our services to fit your style, not the other way around. When you want your wedding done right, call the best at Lakatosh Entertainment."
    ]
  },

  reviews: {
    title: "Reviews",
    items: [
      { quote: "Lakatosh Entertainment helped make our wedding into a truly unforgettable evening. Couldn’t recommend enough.", name: "&mdash; Cole, Groom April 2026" },
      { quote: "Robert was such a great Dj / tech professional. He made everything go smoothly at our wedding and we are forever grateful. Even when we changed up some in the weeks/days before he still was able to work everything out and be very willing to serve us. I wouldn’t recommend anyone else", name: "&mdash; Ander, Groom July 2026" },
      { quote: "AMAZING DJ! Tell Robert what you want your reception to feel like, and he’ll make it happen. He met with us beforehand to discuss our music taste and song preferences. We wanted our reception to be fun and danceable for all ages. Robert seamlessly was able to get everyone from toddlers to grandmas on the dance floor! It was beautiful!! I’ve also seen Robert DJ other weddings that leaned toward club music and WOW THOSE WERE SO FUN!! He is the master of epic transitions and beat drops. 10/10 would recommend Lakatosh Entertainment to anyone needing a DJ!", name: "&mdash; Emma, Bride June 2025" }
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
      { title: "Kid on Shoulders", alt: "Child jumps on one of the guests' shoulders" },
      { title: "Groom in Air", alt: "All the groomsmen throw the groom in the air" },
      { title: "Dancing Train", alt: "A train of people dancing breaks out on the dancefloor" },
      { title: "Party People", alt: "Friends have fun at a wedding reception" },
      { title: "Bride and Groom", alt: "The bride and groom enjoy a moment dancing together" },
      { title: "Cha Cha Slide", alt: "Man breaks it down to the cha cha slide" },
      { title: "Bust a Move", alt: "Man dances smoothly at the reception" }
    ]
  },

  contact: {
    heading: "Contact",
    facebook: { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61593162192955" },
    instagram: { label: "Instagram", href: "https://www.instagram.com/lakatoshentertainment/" },
    email: "lakatoshentertainment@gmail.com",
    emailHref: "mailto:lakatoshentertainment@gmail.com"
  }
};
