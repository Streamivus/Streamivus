/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Analytics from 'parts/Analytics';
import LiveChat from 'parts/LiveChat';

import './assets/css/styles.css';

const LandingPage = lazy(() => import('pages/LandingPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const TeamPage = lazy(() => import('pages/TeamPage'));
const ServicesPage = lazy(() => import('pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('pages/ServiceDetailPage'));
const ProjectPage = lazy(() => import('pages/ProjectPage'));
const ProjectDetailPage = lazy(() => import('pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));
const ContactPage = lazy(() => import('pages/ContactPage'));
const DiscussProjectPage = lazy(() => import('pages/DiscussProjectPage').then((m) => ({ default: m.DiscussProjectPage })));
const CareersPage = lazy(() => import('pages/CareersPage'));
const JobDetailPage = lazy(() => import('pages/JobDetailPage'));
const IndustriesPage = lazy(() => import('pages/IndustriesPage'));
const IndustryDetailPage = lazy(() => import('pages/IndustryDetailPage'));
const ProcessPage = lazy(() => import('pages/ProcessPage'));
const FAQPage = lazy(() => import('pages/FAQPage'));
const BlogPage = lazy(() => import('pages/BlogPage'));
const BlogPostPage = lazy(() => import('pages/BlogPostPage'));
const ResourcesPage = lazy(() => import('pages/ResourcesPage'));
const PartnersPage = lazy(() => import('pages/PartnersPage'));
const PressPage = lazy(() => import('pages/PressPage'));
const BookCallPage = lazy(() => import('pages/BookCallPage'));
const PrivacyPage = lazy(() => import('pages/PrivacyPage'));
const TermsPage = lazy(() => import('pages/TermsPage'));
const CookiePage = lazy(() => import('pages/CookiePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-light-theme-purple border-t-theme-purple rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <>
      <Analytics />
      <LiveChat />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/team" element={<TeamPage />} />

          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/services/:slug" element={<ServiceDetailPage />} />

          <Route path="/project" element={<ProjectPage />} />
          <Route exact path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/case-studies" element={<ProjectPage />} />
          <Route exact path="/case-studies/:id" element={<ProjectDetailPage />} />

          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/discuss-project" element={<DiscussProjectPage />} />

          <Route exact path="/careers" element={<CareersPage />} />
          <Route exact path="/careers/:id" element={<JobDetailPage />} />

          <Route exact path="/industries" element={<IndustriesPage />} />
          <Route exact path="/industries/:slug" element={<IndustryDetailPage />} />

          <Route exact path="/process" element={<ProcessPage />} />
          <Route exact path="/faq" element={<FAQPage />} />

          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/blog/:slug" element={<BlogPostPage />} />

          <Route exact path="/resources" element={<ResourcesPage />} />
          <Route exact path="/partners" element={<PartnersPage />} />
          <Route exact path="/press" element={<PressPage />} />
          <Route exact path="/book-call" element={<BookCallPage />} />

          <Route exact path="/privacy-policy" element={<PrivacyPage />} />
          <Route exact path="/terms-of-service" element={<TermsPage />} />
          <Route exact path="/cookie-policy" element={<CookiePage />} />

          <Route path="**" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
