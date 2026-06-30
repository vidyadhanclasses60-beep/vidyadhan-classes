export interface Topper {
  name: string;
  percentage: string;
  school: string;
  year: string;
  level: "SSC" | "HSC";
}

export interface Course {
  slug: string;
  title: string;
  level: string;
  medium: string;
  subjects: string[];
  eligibility: string;
  timing: string;
  highlights: string[];
}

export interface FeeRow {
  label: string;
  amount: string;
  note?: string;
}

export interface FeeTable {
  title: string;
  rows: FeeRow[];
}

export interface Facility {
  title: string;
  description: string;
  icon: string;
}

export interface Faculty {
  name: string;
  role: string;
  qualification: string;
  subject: string;
  experience: string;
}

export interface Testimonial {
  name: string;
  detail: string;
  quote: string;
}

export interface Award {
  title: string;
  org: string;
  year: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  title: string;
  category: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
