import type {
  Topper, Course, FeeTable, Facility, Faculty,
  Testimonial, Award, FaqItem, GalleryItem, StatItem,
} from "@/types";

/* ------------------------------------------------------------------ */
/*  SSC TOPPERS 2026 — extracted from PDF pages 1, 21–47 & 60          */
/* ------------------------------------------------------------------ */
export const sscToppers: Topper[] = [
  { name: "Divya Sonawane", percentage: "90.20%", school: "New English School, Kalwa", year: "2026", level: "SSC" },
  { name: "Nandini Wagh", percentage: "89.20%", school: "Dnyaprasarni School, Kalwa", year: "2026", level: "SSC" },
  { name: "Atharva Shinde", percentage: "89.00%", school: "Shreeram High School, Airoli", year: "2026", level: "SSC" },
  { name: "Shreya Kesare", percentage: "88.60%", school: "Dnyaprasarni School, Kalwa", year: "2026", level: "SSC" },
  { name: "Sarthak Rode", percentage: "88.60%", school: "Shreeram High School, Airoli", year: "2026", level: "SSC" },
  { name: "Sujit Chikane", percentage: "88.40%", school: "New Kalwa High School, Kalwa", year: "2026", level: "SSC" },
  { name: "Manthan Jadhav", percentage: "87.60%", school: "Shreeram High School, Airoli", year: "2026", level: "SSC" },
  { name: "Shravani Chaudhari", percentage: "86.80%", school: "St. Xaviers High School, Airoli", year: "2026", level: "SSC" },
  { name: "Parth Lohar", percentage: "86.80%", school: "St. Xaviers High School, Airoli", year: "2026", level: "SSC" },
  { name: "Om Kheratkar", percentage: "86.40%", school: "Laxmi Vidyamandir School, Vitawa", year: "2026", level: "SSC" },
  { name: "Tanvi Tambe", percentage: "86.00%", school: "New English School, Kalwa", year: "2026", level: "SSC" },
  { name: "Harpritsingh Rathod", percentage: "86.00%", school: "Sumanai High School, Vitawa", year: "2026", level: "SSC" },
  { name: "Bhavesh Lotankar", percentage: "85.80%", school: "New English School, Vitawa", year: "2026", level: "SSC" },
  { name: "Nidhi Padwal", percentage: "85.40%", school: "Laxmi Vidyamandir School, Vitawa", year: "2026", level: "SSC" },
  { name: "Aryan Shinde", percentage: "85.40%", school: "Dnyaprasarni School, Kalwa", year: "2026", level: "SSC" },
  { name: "Sumedh Jagzap", percentage: "84.80%", school: "St. Xaviers High School, Airoli", year: "2026", level: "SSC" },
  { name: "Vedika Unde", percentage: "84.00%", school: "New Kalwa High School, Kalwa", year: "2026", level: "SSC" },
  { name: "Jay Karanje", percentage: "83.40%", school: "Dnyaprasarni School, Kalwa", year: "2026", level: "SSC" },
  { name: "Vedanti Shinde", percentage: "83.20%", school: "New Kalwa High School, Kalwa", year: "2026", level: "SSC" },
  { name: "Mausam Medatiya", percentage: "82.40%", school: "Divyakashi High School, Vitawa", year: "2026", level: "SSC" },
  { name: "Omkar Ranpise", percentage: "82.00%", school: "New English School, Vitawa", year: "2026", level: "SSC" },
  { name: "Sakshi Yadav", percentage: "81.20%", school: "Divyakashi High School, Vitawa", year: "2026", level: "SSC" },
  { name: "Aditya Patil", percentage: "81.00%", school: "Dnyaprasarni School, Kalwa", year: "2026", level: "SSC" },
  { name: "Rahul Choudhary", percentage: "80.60%", school: "Shreeram High School, Airoli", year: "2026", level: "SSC" },
  { name: "Navin Lohar", percentage: "80.40%", school: "Divyakashi High School, Vitawa", year: "2026", level: "SSC" },
];

/* ------------------------------------------------------------------ */
/*  HSC TOPPERS 2026 — extracted from PDF pages 60 & 63                */
/* ------------------------------------------------------------------ */
export const hscToppers: Topper[] = [
  { name: "Komal Choudhary", percentage: "86.17%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Aditya Kadam", percentage: "82.33%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Mansi Kawale", percentage: "82.00%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Riya Medatiya", percentage: "81.83%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Yuti Patil", percentage: "79.17%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Nishita Kharkar", percentage: "78.00%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Dhanshree Mohite", percentage: "77.00%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Bhavesh Tirlotkar", percentage: "76.33%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Omprakash Rathod", percentage: "76.17%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Kartiki Kandalgaonkar", percentage: "75.50%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Sneha Mulam", percentage: "74.50%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Rahul Pawar", percentage: "74.50%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Samiksha Jadhav", percentage: "74.17%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Durva Barne", percentage: "73.67%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Suyash Kesare", percentage: "72.50%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Akshata Jadhav", percentage: "71.83%", school: "HSC 2026", year: "2026", level: "HSC" },
  { name: "Shreyas Parbalkar", percentage: "70.00%", school: "HSC 2026", year: "2026", level: "HSC" },
];

// Star performer highlighted on admission poster (page 44).
export const starPerformer: Topper = {
  name: "Manashree Pawar",
  percentage: "96.20%",
  school: "New English School, Kalwa",
  year: "2025",
  level: "SSC",
};

export const allToppers: Topper[] = [...sscToppers, ...hscToppers];

/* ------------------------------------------------------------------ */
/*  COURSES — from poster pages 16, 18, 19, 44, 49                     */
/* ------------------------------------------------------------------ */
export const courses: Course[] = [
  {
    slug: "school-7-10",
    title: "School Section (7th to 10th)",
    level: "Std. 7th to 10th",
    medium: "English & Semi-English Medium",
    subjects: ["All Subjects", "State Board Syllabus", "Maths", "Science", "English", "Social Science"],
    eligibility: "Students of Std. 7th, 8th, 9th and 10th (State Board)",
    timing: "Regular weekday batches with weekly tests",
    highlights: ["Complete State Board coverage", "Free printed notes", "Weekly tests & doubt sessions", "Board exam focused"],
  },
  {
    slug: "science-11-12",
    title: "Science (11th & 12th) — MHT-CET",
    level: "Std. 11th & 12th — Science (MHT-CET)",
    medium: "English Medium",
    subjects: ["Physics", "Chemistry", "Maths", "Biology", "English", "MHT-CET Preparation"],
    eligibility: "Students entering Std. 11th & 12th Science stream",
    timing: "Regular batches with weekly tests",
    highlights: ["PCMB with English", "MHT-CET preparation", "With CET / Without CET options", "Concept + practice rigour"],
  },
  {
    slug: "commerce-11-12",
    title: "Commerce (11th & 12th)",
    level: "Std. 11th & 12th — Commerce",
    medium: "English Medium",
    subjects: ["Economics", "Book-Keeping", "Maths (optional)", "Secretarial Practice", "English"],
    eligibility: "Students entering Std. 11th & 12th Commerce stream",
    timing: "Regular batches with weekly tests",
    highlights: ["With SP / With Maths options", "Combo discount for 11th + 12th", "Free printed notes", "Exam-oriented teaching"],
  },
];

/* ------------------------------------------------------------------ */
/*  FEES — exact figures from PDF pages 49 & 50                        */
/* ------------------------------------------------------------------ */
export const feeTables: FeeTable[] = [
  {
    title: "English Medium (2026-27)",
    rows: [
      { label: "7th Std.", amount: "₹10,000/-" },
      { label: "8th Std.", amount: "₹14,000/-" },
      { label: "9th Std.", amount: "₹18,000/-" },
      { label: "10th Std.", amount: "₹25,000/-" },
    ],
  },
  {
    title: "Semi-English Medium (2026-27)",
    rows: [
      { label: "7th Std.", amount: "₹8,000/-" },
      { label: "8th Std.", amount: "₹10,000/-" },
      { label: "9th Std.", amount: "₹14,000/-" },
      { label: "10th Std.", amount: "₹20,000/-" },
    ],
  },
  {
    title: "11th Standard",
    rows: [
      { label: "11th Commerce (With SP)", amount: "₹20,000/-" },
      { label: "11th Commerce (With Maths)", amount: "₹25,000/-" },
      { label: "11th Science (PCMB with English)", amount: "₹30,000/-" },
    ],
  },
  {
    title: "12th Standard",
    rows: [
      { label: "12th Commerce (With SP)", amount: "₹25,000/-" },
      { label: "12th Commerce (With Maths)", amount: "₹30,000/-" },
      { label: "12th Science (Without CET)", amount: "₹40,000/-" },
      { label: "12th Science (With CET)", amount: "₹45,000/-" },
    ],
  },
  {
    title: "11th & 12th Combo (Special Discount Offer)",
    rows: [
      { label: "Commerce Combo (With SP)", amount: "₹40,000/-" },
      { label: "Commerce Combo (With Maths)", amount: "₹50,000/-" },
      { label: "Science Combo (Without CET)", amount: "₹60,000/-" },
      { label: "Science Combo (With CET)", amount: "₹65,000/-" },
    ],
  },
];

export const feeNote =
  "Free printed notes available for one-time fees paid.";

/* ------------------------------------------------------------------ */
/*  FACILITIES — from the brief + PDF (free notes, scholarships etc.)  */
/* ------------------------------------------------------------------ */
export const facilities: Facility[] = [
  { title: "Smart Classrooms", description: "Spacious, well-lit classrooms designed for focused learning.", icon: "MonitorSmartphone" },
  { title: "Digital Teaching", description: "Concepts explained with modern digital teaching aids.", icon: "Presentation" },
  { title: "Computer Lab", description: "A dedicated computer lab to build practical digital skills.", icon: "Computer" },
  { title: "Library Access", description: "Curated reference material and study resources for every standard.", icon: "Library" },
  { title: "Test Series", description: "Structured test series with regular weekly and unit tests.", icon: "ClipboardCheck" },
  { title: "Doubt Sessions", description: "Dedicated doubt-clearing sessions until every concept is clear.", icon: "MessagesSquare" },
  { title: "Parent Meetings", description: "Regular parent meetings to keep families involved in progress.", icon: "Users" },
  { title: "Free Printed Notes", description: "Free printed notes for students who pay one-time fees.", icon: "FileText" },
  { title: "Career Guidance", description: "Guidance on streams, MHT-CET and the road after 10th & 12th.", icon: "Compass" },
  { title: "Scholarships", description: "Encouragement and support for deserving, hard-working students.", icon: "Award" },
  { title: "Safe Parking", description: "Convenient two-wheeler parking for students and visiting parents.", icon: "Car" },
  { title: "Safe Environment", description: "A disciplined, secure and student-friendly learning environment.", icon: "ShieldCheck" },
];

/* ------------------------------------------------------------------ */
/*  FACULTY / SECTIONS — Director from PDF; section heads on page 12   */
/* ------------------------------------------------------------------ */
export const faculty: Faculty[] = [
  { name: "Mahendra Chaudhari Sir", role: "Director & School Section Head", qualification: "B.Sc. B.Ed.", subject: "Std. 7th to 10th — All Subjects", experience: "Since 2008", image: "/images/director.jpg" },
  { name: "Mukund Kokate Sir", role: "Science Section Head — 11th & 12th", qualification: "B.Sc. B.Ed.", subject: "Std. 11th & 12th Science (MHT-CET)", experience: "PCMB & MHT-CET mentor", image: "/images/faculty/mukund-kokate-sir.jpg" },
  { name: "Nitin Bharati Sir", role: "Commerce Section Head", qualification: "M.Com. B.Ed.", subject: "Std. 11th & 12th Commerce", experience: "Board-focused mentor", image: "/images/faculty/nitin-bharati-sir.jpg" },
];

/* ------------------------------------------------------------------ */
/*  AWARDS — from certificate pages 5, 7, 10, 11, 17, 55, 58          */
/* ------------------------------------------------------------------ */
export const awards: Award[] = [
  { title: "Shikshakratna Puraskar", org: "Coaching Classes Sanchalak Sanghatna, Maharashtra (CCPA)", year: "2025-26" },
  { title: "Aadarsh Shikshak Puraskar", org: "Coaching Classes Sanchalak Sanghatna, Maharashtra", year: "2025-26" },
  { title: "Sabhasad Sanman Puraskar", org: "Coaching Classes Sanchalak Sanghatna, Thane", year: "2025-26" },
  { title: "Aadarsh Shikshak Puraskar", org: "Coaching Classes Sanchalak Sanghatna, Thane", year: "2023" },
];

/* ------------------------------------------------------------------ */
/*  STATS — derived only from verified PDF facts                       */
/* ------------------------------------------------------------------ */
export const stats: StatItem[] = [
  { value: 18, suffix: "+", label: "Years of Quality Education" },
  { value: 42, suffix: "", label: "SSC & HSC Toppers (2026)" },
  { value: 100, suffix: "%", label: "Result — Vidyadhan Classes" },
  { value: 96, suffix: "%+", label: "Highest Score (Manashree Pawar)" },
];

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS                                                       */
/*  NOTE: The PDF contains no written testimonials. The quotes below   */
/*  are representative samples built around real, named achievers.     */
/*  Replace with genuine signed testimonials before publishing.        */
/* ------------------------------------------------------------------ */
export const testimonials: Testimonial[] = [
  { name: "Parent of Divya Sonawane", detail: "SSC 2026 — 90.20%", quote: "The personal attention and weekly tests at Vidyadhan Classes kept Divya consistent all year. The result speaks for itself." },
  { name: "Parent of Atharva Shinde", detail: "SSC 2026 — 89.00%", quote: "Mahendra Sir treats every child as his own. The doubt sessions made all the difference for Atharva." },
  { name: "Komal Choudhary", detail: "HSC 2026 — 86.17%", quote: "The Science and CET guidance was clear and structured. I always felt supported through 11th and 12th." },
  { name: "Parent of Nandini Wagh", detail: "SSC 2026 — 89.20%", quote: "Free notes, regular parent meetings and honest feedback — exactly what a coaching class should be." },
  { name: "Sarthak Rode", detail: "SSC 2026 — 88.60%", quote: "Concepts were taught from the basics. The teachers never moved on until everyone understood." },
];

/* ------------------------------------------------------------------ */
/*  GALLERY — categories reflect the events/photos in the PDF          */
/* ------------------------------------------------------------------ */
export const gallery: GalleryItem[] = [
  { title: "SSC 2026 Toppers Felicitation", category: "Results" },
  { title: "HSC 2026 Toppers Felicitation", category: "Results" },
  { title: "10th Std. Farewell Ceremony 2025-26", category: "Events" },
  { title: "Teacher's Day Sohla 2025", category: "Awards" },
  { title: "Aadarsh Shikshak Puraskar Ceremony", category: "Awards" },
  { title: "Shikshakratna Puraskar Felicitation", category: "Awards" },
  { title: "Classroom & Doubt Sessions", category: "Campus" },
  { title: "Student Gathering & Sessions", category: "Campus" },
  { title: "Director Felicitation Moments", category: "Events" },
  { title: "Sabhasad Sanman Award", category: "Awards" },
  { title: "Annual Function Highlights", category: "Events" },
  { title: "100% Result Celebration", category: "Results" },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */
export const faqs: FaqItem[] = [
  { question: "Which classes and standards do you coach?", answer: "Vidyadhan Classes coaches Std. 7th to 10th (English & Semi-English Medium) and Std. 11th & 12th in Science (MHT-CET) and Commerce." },
  { question: "Where is Vidyadhan Classes located?", answer: "A/3, Ramdas Apartment CHS Ltd, Vitawa, Post-Kalwa, Thane - 400605 (near TMC Tax Office / Amber Galaxy)." },
  { question: "How do I take admission?", answer: "Admissions are open. Call or WhatsApp Mahendra Chaudhari Sir on 9322094000, or fill the admission enquiry form on the Admissions page." },
  { question: "Are study notes provided?", answer: "Yes. Free printed notes are available for students who pay one-time fees." },
  { question: "Do you prepare students for MHT-CET?", answer: "Yes. The Science programme includes MHT-CET preparation, with both 'With CET' and 'Without CET' fee options." },
  { question: "Is there a discount for taking 11th and 12th together?", answer: "Yes. There is a special discount on the 11th & 12th combo packages for both Commerce and Science." },
];
