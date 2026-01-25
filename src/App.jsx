import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HatHaven from './components/pages/HatHaven';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
            <ProjectsGrid />
            <Contact />
          </Layout>
        } />
        <Route path="/hathaven" element={<HatHaven />} />
      </Routes>
    </>
  );
}

export default App;
