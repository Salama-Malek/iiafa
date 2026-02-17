# 📘 README --- iiafa-law-firm

## 📌 Project Overview

**Project Name:** iiafa-law-firm\
**Domain:** https://iiafa.com\
**Description:** A professional, Arabic-only law firm website for *شركة
إعفاء للمحاماة والاستشارات القانونية* built originally on Base44, now
ported as a standalone local project.

The website includes: - Company overview - Services pages - Lawyer
profile - Blog (Articles) - Contact form - Floating WhatsApp +
Back-to-top buttons - Scroll animations - Mobile-friendly bottom
navigation

This README describes the site purpose, content sources, design
principles, functionality, folder structure, data flow, and coding
standards.

------------------------------------------------------------------------

## 🎯 Project Purpose

The goal is to have a premium, scalable, high-quality law firm website
with:

-   Elegant Arabic typography (Saudi Font)
-   Professional UI/UX
-   Fast load and responsive layout
-   Custom blog system
-   Structured content layer
-   Fully functional locally without Base44 dependencies

Target users: - Prospective legal clients - Individuals seeking
consultations - Businesses requiring legal services

------------------------------------------------------------------------

## 🗂️ Target Folder Structure

iiafa-law-firm/ ├── README.md ├── package.json ├── vite.config.js ├──
tailwind.config.js ├── postcss.config.js ├── jsconfig.json ├──
.gitignore ├── index.html ├── public/ │ ├── manifest.json │ └──
favicon.ico ├── src/ │ ├── main.jsx │ ├── App.jsx │ ├── routes.js │ ├──
layouts/ │ │ └── RootLayout.jsx │ ├── pages/ │ ├── components/ │ ├──
content/ar/ │ ├── assets/ │ ├── styles/ │ └── lib/ └── .env.example

------------------------------------------------------------------------

## 🧠 Content Layer

All Arabic content must be stored inside:

src/content/ar/

Files: - site.ts → Navigation, footer, social links - services.ts →
Services list and details - lawyer.ts → Lawyer bio and credentials -
articles.ts → Blog articles data

No hardcoded text inside components.

------------------------------------------------------------------------

## 🎨 Design Guidelines

Primary Color: #a97c50 (Gold)\
Secondary Color: #99141e (Burgundy)\
Background: Cream / off-white tones

Typography: - Saudi Font (primary) - Fallback: Tajawal, Cairo,
sans-serif

Cards: - Soft shadow - Rounded corners - Elegant spacing

------------------------------------------------------------------------

## 📰 Blog Structure

Each article must include:

-   title
-   slug
-   excerpt
-   coverImage
-   content
-   author
-   publishDate
-   tags
-   readingTime
-   featured

Routes: /المقالات\
/المقالات/:slug

------------------------------------------------------------------------

## 📞 Contact Form

Fields: - الاسم الكامل (required) - رقم الجوال (required) - البريد
الإلكتروني (optional) - نوع الخدمة - رسالتك (required)

Client-side validation required.

------------------------------------------------------------------------

## ✉️ Email Sending Setup (EmailJS)

The contact form now sends real emails using EmailJS.

1. Create an EmailJS account: https://www.emailjs.com/
2. Create:
   - one Email Service
   - one Email Template
3. In your EmailJS template, add these variables:
   - `{{full_name}}`
   - `{{phone}}`
   - `{{email}}`
   - `{{service_type}}`
   - `{{message}}`
   - `{{submitted_at}}`
   - `{{to_email}}` (optional)
   - `{{reply_to}}` (optional)
4. Copy `.env.example` to `.env` and fill:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
5. Restart dev server after editing `.env`.

Without these keys, form submission will show a configuration error.

------------------------------------------------------------------------

## 📱 Navigation

Desktop → Top navbar\
Mobile → Fixed bottom navigation

Tabs: - الرئيسية - الخدمات - المقالات - المحامي - تواصل

------------------------------------------------------------------------

## 📍 Floating Buttons

WhatsApp: https://wa.me/message/35TT3ASVVP7GF1

Back-to-top: Appears after 400px scroll.

------------------------------------------------------------------------

## ⚙️ Running Locally

Install: npm install

Development: npm run dev

Build: npm run build

Preview: npm run preview

------------------------------------------------------------------------

## 🔧 Notes

-   No Base44 dependencies allowed.
-   All Base44-related SDK/client code must be removed.
-   Project must run cleanly with Vite + React + Tailwind.
-   All animations implemented using Framer Motion.
-   RTL must be enforced globally in index.html.

------------------------------------------------------------------------

End of README.
