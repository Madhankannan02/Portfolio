import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Contact from './components/Contact';

// Lazy Load Pages
const HatHaven = lazy(() => import('./components/pages/HatHaven'));
const TitanStorage = lazy(() => import('./components/pages/TitanStorage'));

// Loading Fallback
const PageLoader = () => (
  <div className="fixed inset-0 bg-[#0A0A0A] flex items-center justify-center z-50">
    <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin" />
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
              <ProjectsGrid />
              <Contact />
            </Layout>
          } />
          <Route path="/hathaven" element={<HatHaven />} />
          <Route path="/titan-storage" element={<TitanStorage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
