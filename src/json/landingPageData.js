/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

// Portfolio Img Imports
import Recruiting from "../assets/images/Portfolio/Recruiting.png";
import Stream from "../assets/images/Portfolio/Stream.png";
import Freelance from "../assets/images/Portfolio/Freelance.png";
import Aura from "../assets/images/Portfolio/Aura.png";
import Surtido from "../assets/images/Portfolio/Surtido.png";
import ManagementApp from "../assets/images/Portfolio/ManagementApp.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
import Kruger from "../assets/images/Testimonials/Kruger.jpg";

// TeamMembers
import Bhavin from "../assets/images/TeamMembers/bhavin.jpg";
import Prachi from "../assets/images/TeamMembers/Prachi.jpeg";

export const Services = [
  {
    title: "Web Development",
    imageUrl: Web,
    animation: "left",
  },
  {
    title: "Mobile Development",
    imageUrl: Mobile,
    animation: "up",
  },
  {
    title: "UI/UX Design",
    imageUrl: UIUX,
    animation: "right",
  },
];

export const Portfolios = [
  {
    id: "asd1293uasdads1",
    title: "Recruiting App",
    imageUrl: Recruiting,
    type: "Mobile App · HR Tech",
    industry: "HR Tech",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15164950-Recruiting-app",
    summary:
      "A mobile-first recruiting platform helping HR teams source, screen, and shortlist candidates 3x faster.",
    challenge:
      "The client's recruiters were drowning in resumes and spending hours each day on manual screening. They needed a mobile-first tool that worked on the go and felt as easy as messaging.",
    approach:
      "We designed a swipe-based candidate review flow, integrated parsing for resumes, and built lightweight collaboration so multiple recruiters could review the same candidate without losing context.",
    results: [
      "3x faster candidate shortlisting",
      "85% recruiter satisfaction",
      "Cut time-to-screen from 12 min to 4 min",
    ],
    metrics: [
      { label: "Faster shortlisting", value: "3x" },
      { label: "Drop in time-to-screen", value: "−66%" },
      { label: "Recruiter NPS", value: "+58" },
    ],
    stack: ["React Native", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "asd1293uhjkhkjh2",
    title: "Stream+",
    imageUrl: Stream,
    type: "Mobile App · Streaming",
    industry: "Media & Entertainment",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15276430-Stream",
    summary:
      "A cross-platform streaming app delivering on-demand and live content with offline downloads and adaptive bitrate.",
    challenge:
      "The client wanted to launch a premium streaming experience on iOS and Android in 4 months — without sacrificing playback quality or offline mode.",
    approach:
      "We picked React Native with native player modules for smooth playback, used HLS for adaptive streaming, and built a thoughtful offline-first download flow with DRM.",
    results: [
      "Launched on iOS & Android in 14 weeks",
      "4.7★ average rating across stores",
      "Sub-2-second time-to-first-frame",
    ],
    metrics: [
      { label: "Time to launch", value: "14 wk" },
      { label: "Average rating", value: "4.7★" },
      { label: "Time-to-first-frame", value: "<2s" },
    ],
    stack: ["React Native", "HLS", "Node.js", "Redis"],
  },
  {
    id: "asd1293uvbvcbbd3",
    title: "Freelance",
    imageUrl: Freelance,
    type: "Mobile App · Marketplace",
    industry: "Marketplaces",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept",
    summary:
      "A two-sided marketplace connecting freelancers and clients, with built-in payments, escrow, and dispute resolution.",
    challenge:
      "Existing platforms felt clunky on mobile and took a heavy cut from freelancers. The client wanted a leaner, faster, fairer alternative.",
    approach:
      "We designed a mobile-first matchmaking flow, integrated Stripe Connect for escrow and split payments, and added a transparent dispute-resolution interface.",
    results: [
      "10K signups in the first 90 days",
      "60% lower platform fee than incumbents",
      "Profitable unit economics from week 6",
    ],
    metrics: [
      { label: "Signups in 90 days", value: "10K" },
      { label: "Platform fee vs market", value: "−60%" },
      { label: "Time to first match", value: "<24h" },
    ],
    stack: ["React Native", "Node.js", "Stripe Connect", "PostgreSQL"],
  },
  {
    id: "asd1293ufgdfgs4",
    title: "Aura",
    imageUrl: Aura,
    type: "Website · D2C",
    industry: "D2C & E-commerce",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15176338-Aura-Website-Main-Page",
    summary:
      "A premium D2C brand site with a custom headless storefront focused on storytelling and conversion.",
    challenge:
      "The brand had a beautiful product but a cookie-cutter Shopify theme that didn't reflect its premium positioning — and was slow on mobile.",
    approach:
      "We built a headless Next.js storefront on top of Shopify, redesigned the visual system, and optimized aggressively for Core Web Vitals.",
    results: [
      "2.4x conversion-rate lift",
      "94 Lighthouse performance score",
      "Bounce rate down 38%",
    ],
    metrics: [
      { label: "Conversion lift", value: "2.4x" },
      { label: "Lighthouse score", value: "94" },
      { label: "Bounce rate", value: "−38%" },
    ],
    stack: ["Next.js", "Shopify Storefront API", "Tailwind", "Vercel"],
  },
  {
    id: "asd1293ulskmnb5",
    title: "Surtido Rico",
    imageUrl: Surtido,
    type: "Website · Restaurant",
    industry: "F&B / Hospitality",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15173118-Surtido-Rico",
    summary:
      "A multi-location restaurant brand site with online ordering, delivery integration, and reservations.",
    challenge:
      "A growing restaurant chain needed a single online presence that could handle online orders across multiple cities and seamlessly route to existing delivery partners.",
    approach:
      "We designed a brand-forward site, built a custom ordering flow with menu management per location, and integrated with Zomato/Swiggy APIs plus an in-house reservation system.",
    results: [
      "Online orders up 220% in 6 months",
      "Cross-location revenue tracking unified",
      "10-minute self-serve menu updates per location",
    ],
    metrics: [
      { label: "Order growth", value: "+220%" },
      { label: "Active locations", value: "12" },
      { label: "Avg menu update", value: "10 min" },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Zomato/Swiggy APIs"],
  },
  {
    id: "asd1293ulkmnbj6",
    title: "Courses Management",
    imageUrl: ManagementApp,
    type: "Web App · EdTech",
    industry: "EdTech",
    responsibility: ["Web Development", "UI/UX Design"],
    credit:
      "https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App",
    summary:
      "A SaaS platform helping independent educators create, sell, and promote online courses with full marketing tooling.",
    challenge:
      "Educators were juggling 4–5 separate tools — LMS, payments, email, landing pages, analytics — to run their business. They needed one platform.",
    approach:
      "We designed a multi-tenant SaaS with a course builder, Stripe-based checkout, drip emails, and a built-in landing-page editor — all instrumented for funnel analytics.",
    results: [
      "Average creator revenue up 2.1x within 90 days",
      "Reduced tool spend from $400+/mo to a single subscription",
      "Sub-5-minute time-to-publish for first course",
    ],
    metrics: [
      { label: "Creator revenue lift", value: "2.1x" },
      { label: "Time to first publish", value: "<5 min" },
      { label: "Tool consolidation", value: "5 → 1" },
    ],
    stack: ["React", "Next.js", "Node.js", "Stripe", "PostgreSQL", "AWS"],
  },
];

export const Advantages = [
  [
    {
      title: "Communicative",
      description:
        "We communicate our project ideas and progress to make it clear.",
      imageUrl: Communicative,
    },
    {
      title: "Management",
      description:
        "We manage our project properly to make our project done well.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "Collaborative​",
      description:
        "Our team are very collaborative to make our project done well.",
      imageUrl: Collaborative,
    },
    {
      title: "Favorite",
      description: "We've did so many project and all of our client love it.",
      imageUrl: Favorite,
    },
  ],
];
export const Testimonials = [
  {
    id: 1,
    name: "Sasha Rose",
    company: "Owner, Surveyor Corps",
    testimoni:
      "Thanks for Streamivus, you guys are the best! Keep up the great work!",
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: "Kruger Khan",
    company: "Director, Shultan Oil",
    testimoni:
      "I just wanted to let you know that it’s been great working with Streamivus.",
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: "Reiner John",
    company: "CEO, Marley CO",
    testimoni: "Streamivus is so great. Thank you so much for a job well done.",
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: "Bhavin Ondhiya",
    position: "Co-Founder & CEO · Full-Stack Engineer",
    imageUrl: Bhavin,
    bio:
      "Engineering lead who turns ideas into production-ready products — owning the full journey from architecture and code to deployment, security, and scale.",
    expertise: [
      "Software & Web Development",
      "SaaS & CRM Platforms",
      "AI & GenAI Integrations",
      "Chatbot Development",
      "AI Voice Agents & Cold Calling",
      "Cloud (AWS, Azure, GCP)",
      "Databases (PostgreSQL, MySQL)",
      "DevOps & Deployment",
      "App Security (RSA, Attack Prevention)",
      "SEO Optimization",
    ],
  },
  {
    name: "Prachi Kathiria",
    position: "Co-Founder & CEO · Lead Product Designer",
    imageUrl: Prachi,
    bio:
      "Design-first thinker crafting intuitive, on-brand experiences — bridging user needs and product vision, pixel by pixel.",
    expertise: [
      "UI / UX Design",
      "Product Design",
      "Figma & Figma AI",
      "Canva & Visual Design",
      "Logo Design",
      "Branding & Identity",
      "Content Design & Creation",
      "Design Systems",
      "Wireframing & Prototyping",
      "User Research & Flows",
      "Responsive Web Design",
      "Mobile App Design",
    ],
  },
];
