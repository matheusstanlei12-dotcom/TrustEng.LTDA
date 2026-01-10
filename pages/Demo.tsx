
import React, { useState, useEffect } from 'react';

const Demo: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Digitalize sua <span className="text-blue-700 italic">Engenharia</span>.</h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Nossos consultores técnicos apresentarão a plataforma focando nos indicadores de confiabilidade que mais impactam sua planta hoje.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center border border-blue-100">
                  <span className="text-blue-700 font-black">01</span>
                </div>
                <div className="text-slate-900 font-bold uppercase text-sm tracking-tight">Diagnóstico Inicial de Processos</div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center border border-blue-100">
                  <span className="text-blue-700 font-black">02</span>
                </div>
                <div className="text-slate-900 font-bold uppercase text-sm tracking-tight">Apresentação Técnica com KPIs Reais</div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center border border-blue-100">
                  <span className="text-blue-700 font-black">03</span>
                </div>
                <div className="text-slate-900 font-bold uppercase text-sm tracking-tight">Modelo de Implantação e ROI</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-12 rounded-sm shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] relative">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Solicitação em Processamento</h3>
                <p className="text-slate-500 font-medium">Um especialista técnico entrará em contato em até 24h úteis.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-700 font-black uppercase tracking-widest text-xs hover:underline">Novo agendamento</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Nome Completo</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-sm px-4 py-4 text-slate-900 font-medium focus:border-blue-700 focus:outline-none transition-colors" placeholder="João Silva" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">E-mail Corporativo</label>
                    <input required type="email" className="w-full bg-slate-50 border border-slate-100 rounded-sm px-4 py-4 text-slate-900 font-medium focus:border-blue-700 focus:outline-none transition-colors" placeholder="joao@industria.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Cargo Atual</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-sm px-4 py-4 text-slate-900 font-medium focus:border-blue-700 focus:outline-none transition-colors appearance-none">
                    <option>Gestor de Manutenção</option>
                    <option>Engenheiro de Confiabilidade</option>
                    <option>Gerente de Planta</option>
                    <option>Diretor de Operações</option>
                    <option>Consultor / Terceiro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Desafio Técnico Principal</label>
                  <textarea className="w-full bg-slate-50 border border-slate-100 rounded-sm px-4 py-4 text-slate-900 font-medium focus:border-blue-700 focus:outline-none transition-colors h-32 resize-none" placeholder="Ex: Reduzir MTTR em britadores críticos..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-sm font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-blue-200">
                  Agendar Demonstração Técnica
                </button>
                <p className="text-[10px] text-slate-400 text-center uppercase font-bold tracking-tight">
                  Seus dados técnicos são protegidos por rígidos protocolos de privacidade corporativa.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
