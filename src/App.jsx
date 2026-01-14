import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <ProjectsGrid />
      <Contact />
    </Layout>
  );
}

export default App;
