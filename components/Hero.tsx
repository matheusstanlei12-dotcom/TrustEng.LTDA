import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SCENES = [
  {
    // IMAGEM 1 — CONTEXTO DA PERÍCIA (Ambiente Técnico)
    image: "/assets/hero/v3/hero-v3-1.png",
    text: "Contexto técnico: Ambiente de análise e manutenção pesada.",
    duration: 6000
  },
  {
    // IMAGEM 2 — ANÁLISE DE FALHA (Cilindros Hidráulicos)
    image: "/assets/hero/v3/hero-v3-2.png",
    text: "Análise de falha: Identificação de desgastes em cilindros hidráulicos.",
    duration: 6000
  },
  {
    // IMAGEM 3 — PERITAGEM TÉCNICA (Evidência Física)
    image: "/assets/hero/hero-1.png",
    text: "Peritagem técnica: Inspeção visual e coleta de evidências físicas.",
    duration: 6000
  },
  {
    // IMAGEM 4 — REGISTRO DO PROCESSO (Apoio Digital)
    image: "/assets/hero/v3/hero-v3-4.png",
    text: "Registro técnico: Sistema de apoio para laudos e histórico.",
    duration: 6000
  },
  {
    // IMAGEM 5 — CONTROLE E RASTREABILIDADE (Método)
    image: "/assets/hero/v3/hero-v3-5.png",
    text: "Rastreabilidade: Controle absoluto de cada componente analisado.",
    duration: 6000
  }
];

const Hero: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const animate = () => {
      timeout = setTimeout(() => {
        setCurrentScene((prev) => (prev + 1) % SCENES.length);
      }, SCENES[currentScene].duration);
    };
    animate();
    return () => clearTimeout(timeout);
  }, [currentScene]);

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col justify-center">
      {/* Slideshow Background Layer */}
      {SCENES.map((scene, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentScene ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Image Container - Positioned to Right with Shaped Divider */}
          <div className="absolute right-0 top-0 h-full w-full lg:w-[55%] bg-slate-50 overflow-hidden">
            {/* The Image */}
            <img
              src={scene.image}
              alt="Peritagem e Manutenção Hidráulica"
              className="w-full h-full object-cover object-center"
            />

            {/* The Separation Curve (Left Side of Image) */}
            <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
              {/* This SVG creates the white curve sticking INTO the image from the left */}
              <svg className="h-full w-auto text-white fill-current absolute left-0 top-0 transform scale-x-150 lg:scale-x-100 origin-left" viewBox="0 0 100 900" preserveAspectRatio="none">
                <path d="M0 0 H100 V900 H0 Z" className="fill-white opacity-0 lg:opacity-0" /> {/* Fallback */}
                <path d="M0,0V900C50,500,0,300,100,0Z" className="fill-white" />
              </svg>
              {/* Gradient to smooth the edge further */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Spacer for Navbar */}
      <div className="w-full h-24 relative z-20"></div>

      {/* Main Hero Content - Aligned Left */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex items-center pb-20">
        <div className="max-w-2xl lg:max-w-xl">
          {/* Tagline */}
          <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded bg-white/80 border border-slate-200 backdrop-blur-md shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
            <span className="text-slate-600 text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">Controle Total do Processo</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[0.95] mb-6 drop-shadow-sm">
            TRUST <br />
            <span className="text-slate-400">TECNOLOGIA</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg lg:text-xl text-slate-600 font-normal tracking-wide max-w-lg border-l-4 border-blue-600 pl-6 mb-10 leading-relaxed">
            {SCENES[currentScene].text}
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/demo" className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-bold tracking-widest uppercase text-xs rounded transition-all shadow-lg text-center transform hover:translate-y-[-2px]">
              Solicitar Diagnóstico
            </Link>
            <Link to="/platform" className="px-8 py-4 border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold tracking-widest uppercase text-xs rounded backdrop-blur-sm transition-all flex items-center justify-center group">
              Conhecer Solução <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-24 left-0 w-full z-30 flex justify-center lg:justify-start lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] gap-3 px-6">
        {SCENES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentScene(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentScene ? 'w-12 bg-blue-600' : 'w-4 bg-slate-300 hover:bg-blue-400'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Curved Separator (Wave) */}
      <div className="absolute bottom-0 left-0 w-full z-40 leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] lg:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white hidden" // This path is for top-down wave, we want bottom-up. Swapped below.
          ></path>
          {/* Actual Bottom Wave for "Separation" look (White overlay at bottom) */}
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-white"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
