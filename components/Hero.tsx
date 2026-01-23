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
          {/* Image Container with Padding for "Zoom Out" effect */}
          <div className="w-full h-full p-0 lg:p-12 bg-white">
            <img
              src={scene.image}
              alt="Peritagem e Manutenção Hidráulica"
              className="w-full h-full object-contain"
              style={{ transformOrigin: 'center center' }}
            />
          </div>

          {/* Professional Industrial Overlay - Steel/Blue Tone */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none"></div>
        </div>
      ))}

      {/* Spacer for Navbar */}
      <div className="w-full h-24 relative z-20"></div>

      {/* Main Hero Content - Aligned Left */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded bg-white/80 border border-slate-200 backdrop-blur-md shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
            <span className="text-slate-600 text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">Controle Total do Processo</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.95] mb-6 drop-shadow-sm">
            TRUST <br />
            <span className="text-slate-400">TECNOLOGIA</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg lg:text-2xl text-slate-600 font-normal tracking-wide max-w-2xl border-l-4 border-blue-600 pl-6 mb-10 leading-relaxed">
            Análise de falhas e peritagem técnica.
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

      {/* Footer Strip - Reinforcing Pillars */}
      <div className="relative z-30 w-full border-t border-slate-200 bg-white/90 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 justify-start lg:justify-between text-slate-500 text-xs font-bold tracking-widest uppercase items-center">
          {/* Current Scene Context Indicator */}
          <div className="hidden md:flex items-center text-blue-500 w-full md:w-auto mb-4 md:mb-0 border-b border-blue-500/30 pb-1">
            <span className="mr-2 opacity-50">AGORA:</span> {SCENES[currentScene].text}
          </div>

          <div className="flex gap-6">
            <div className="flex items-center"><ChevronRight className="w-3 h-3 text-emerald-500 mr-2" /> Manutenção Mecânica</div>
            <div className="flex items-center"><ChevronRight className="w-3 h-3 text-emerald-500 mr-2" /> Análise de Falhas</div>
            <div className="flex items-center"><ChevronRight className="w-3 h-3 text-emerald-500 mr-2" /> Controle de Processo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
