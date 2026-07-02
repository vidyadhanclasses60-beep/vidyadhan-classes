// Core institute details — every value here is taken directly from the
// uploaded VIDYADHAN CLASSES PDF (pages 16, 19, 22, 49, 50).
export const site = {
  name: "Vidyadhan Classes",
  tagline: "For Quality Education",
  established: 2008,
  director: "Mahendra Chaudhari Sir",
  directorQualification: "B.Sc. B.Ed.",
  // From poster pages 16 / 19 / 22
  classesLine: "7th to 10th  /  11th & 12th",
  phone: process.env.NEXT_PUBLIC_PHONE || "9322094000",
  phoneHref: "tel:+919322094000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "919322094000",
  whatsappHref: "https://wa.me/919322094000",
  // Email — institute Gmail (primary public contact)
  email: process.env.NEXT_PUBLIC_EMAIL || "vidyadhancoachingclasses@gmail.com",
  directorEmail: "mkchaudhari18@gmail.com",
  address: {
    line1: "A/3, Ramdas Apartment CHS Ltd",
    line2: "Vitawa, Post-Kalwa",
    city: "Thane",
    pin: "400605",
    full: "A/3, Ramdas Apartment CHS Ltd, Vitawa, Post-Kalwa, Thane - 400605",
    landmark: "Near TMC Tax Office / Near Amber Galaxy, Vitawa",
  },
  mapsQuery:
    process.env.NEXT_PUBLIC_MAPS_QUERY ||
    "VIDYADHAN CLASSES Tuition, Vitawa, Kalwa, Thane 400605",
  mapsUrl:
    "https://www.google.com/maps/place/VIDYADHAN+CLASSES(Tution)/@19.1857537,72.9884228,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b9c1304ece8f:0xd2a390c2d0e53c13!8m2!3d19.1857487!4d72.9909977",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vidyadhanclasses.com",
  // Official links
  social: {
    instagram: "https://www.instagram.com/vidyadhanclasses_thane",
    googleReview: "https://connectitgmb.com/r/aYfTun",
    youtube: "https://www.youtube.com/@vidyadhanclassesthane",
    facebook: "https://www.facebook.com/share/1DTevSScJT/?mibextid=wwXIfr",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculty" },
  { label: "Facilities", href: "/facilities" },
  { label: "Results", href: "/results" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
] as const;
