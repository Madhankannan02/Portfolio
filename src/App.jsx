import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Hero from './components/Hero';

// Lazy Load Components
const ProjectsGrid = lazy(() => import('./components/ProjectsGrid'));
const Contact = lazy(() => import('./components/Contact'));
const WorkExperience = lazy(() => import('./components/WorkExperience'));
const HatHaven = lazy(() => import('./components/pages/HatHaven'));
const TitanStorage = lazy(() => import('./components/pages/TitanStorage'));
const ButcherBox = lazy(() => import('./components/pages/ButcherBox'));
const Stract = lazy(() => import('./components/pages/Stract'));

const PageLoader = () => (
  <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
    <div className="text-2xl font-ui text-text-secondary mb-4 animate-pulse">Loading...</div>
    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Hero />
              <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
                <Suspense fallback={<div className="min-h-screen" />}>
                  <ProjectsGrid />
                  <WorkExperience />
                  <Contact />
                </Suspense>
              </div>
            </Layout>
          } />
          <Route path="/hathaven" element={<HatHaven />} />
          <Route path="/titan-storage" element={<TitanStorage />} />
          <Route path="/butcher-box" element={<ButcherBox />} />
          <Route path="/stract" element={<Stract />} />
        </Routes>
      </Suspense>
      <Analytics />
    </>
  );
}

export default App;
