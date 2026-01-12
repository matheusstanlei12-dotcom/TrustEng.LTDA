
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Platform = lazy(() => import('./pages/Platform'));
const Demo = lazy(() => import('./pages/Demo'));
const About = lazy(() => import('./pages/About'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-700"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
