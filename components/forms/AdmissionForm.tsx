"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { site } from "@/constants/site";
const courseOptions = [
  "English Medium (7th to 10th)",
  "Semi-English Medium (7th to 10th)",
  "Science (11th & 12th) — MHT-CET",
  "Commerce (11th & 12th)",
];

const standards = [
  "7th", "8th", "9th", "10th",
  "11th Science", "11th Commerce",
  "12th Science", "12th Commerce",
];

export function AdmissionForm() {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    standard: standards[0],
    course: courseOptions[0],
    message: "",
  });
  const [touched, setTouched] = useState(false);

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const valid = form.studentName.trim() && /^\d{10}$/.test(form.phone.trim());

  const composed = encodeURIComponent(
    `New Admission Enquiry — Vidyadhan Classes\n\n` +
      `Student: ${form.studentName}\n` +
      `Parent: ${form.parentName || "-"}\n` +
      `Phone: ${form.phone}\n` +
      `Standard: ${form.standard}\n` +
      `Course: ${form.course}\n` +
      `Message: ${form.message || "-"}`,
  );

  const whatsappUrl = `${site.whatsappHref}?text=${composed}`;
  const mailUrl = `mailto:${site.email}?subject=${encodeURIComponent("Admission Enquiry")}&body=${composed}`;

  const submitWhatsApp = () => {
    setTouched(true);
    if (valid) window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  const submitEmail = () => {
    setTouched(true);
    if (valid) window.location.href = mailUrl;
  };

  const inputClass =
    "w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

  return (
    <div className="rounded-4xl border border-line bg-white p-7 shadow-soft sm:p-9">
      <h2 className="font-display text-2xl font-bold text-brand-900">Admission Enquiry</h2>
      <p className="mt-1 text-sm text-ink/65">
        Fill the form and send it to us directly on WhatsApp or email — we will get back to you quickly.
      </p>

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-brand-900">Student Name *</label>
            <input className={inputClass} value={form.studentName} onChange={update("studentName")} placeholder="Student full name" />
            {touched && !form.studentName.trim() && <p className="mt-1 text-xs text-crimson-600">Please enter the student name.</p>}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-brand-900">Parent Name</label>
            <input className={inputClass} value={form.parentName} onChange={update("parentName")} placeholder="Parent / guardian name" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-brand-900">Mobile Number *</label>
            <input className={inputClass} value={form.phone} onChange={update("phone")} inputMode="numeric" placeholder="10-digit mobile number" />
            {touched && !/^\d{10}$/.test(form.phone.trim()) && <p className="mt-1 text-xs text-crimson-600">Enter a valid 10-digit number.</p>}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-brand-900">Standard</label>
            <select className={inputClass} value={form.standard} onChange={update("standard")}>
              {standards.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-brand-900">Course Interested In</label>
          <select className={inputClass} value={form.course} onChange={update("course")}>
            {courseOptions.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-brand-900">Message</label>
          <textarea className={inputClass} rows={3} value={form.message} onChange={update("message")} placeholder="Any question or preferred batch timing" />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={submitWhatsApp}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-success px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 focus-visible:ring-4 focus-visible:ring-success/30"
          >
            <MessageCircle className="h-4 w-4" /> Send on WhatsApp
          </button>
          <button
            onClick={submitEmail}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-brand-700 px-5 py-3 text-sm font-bold text-brand-700 transition hover:bg-brand-700 hover:text-white"
          >
            <Send className="h-4 w-4" /> Send by Email
          </button>
        </div>
        <p className="text-center text-xs text-ink/50">
          No data is stored on this site — your enquiry opens directly in WhatsApp or your email app.
        </p>
      </div>
    </div>
  );
}
