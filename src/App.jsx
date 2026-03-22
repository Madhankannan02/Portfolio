import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Preloader from './components/Preloader';

// Lazy Load Components
const ProjectsGrid = lazy(() => import('./components/ProjectsGrid'));
const Contact = lazy(() => import('./components/Contact'));
const WorkExperience = lazy(() => import('./components/WorkExperience'));
const HatHaven = lazy(() => import('./components/pages/HatHaven'));
const TitanStorage = lazy(() => import('./components/pages/TitanStorage'));
const ButcherBox = lazy(() => import('./components/pages/ButcherBox'));
const Stract = lazy(() => import('./components/pages/Stract'));

// Loading Fallback for Suspense
const PageLoader = () => (
  <div className="fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center z-50">
    <div className="text-2xl font-mono text-gray-500 mb-4 animate-pulse" style={{ animationDuration: '1s' }}>Loading...</div>
    <div className="w-8 h-8 border-2 border-white/10 border-t-white rounded-full animate-spin" style={{ animationDuration: '0.5s' }} />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={
                <Layout>
                  <Hero />
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <ProjectsGrid />
                    <WorkExperience />
                    <Contact />
                  </Suspense>
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
      )}
    </>
  );
}

export default App;
