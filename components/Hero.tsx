
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, Settings, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[700px] h-[700px] bg-blue-50/50 rounded-full blur-[140px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-sm border border-blue-200 bg-blue-50 text-blue-700 text-[10px] font-black tracking-widest uppercase shadow-sm">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Confiabilidade de Ativos & Análise de Falhas
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
              Engenharia, Tecnologia e Inteligência Aplicadas à <span className="text-blue-700">Manutenção</span>
            </h1>

            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
              A Trust Tecnologia é uma empresa de tecnologia especializada em sistemas inteligentes para análise de falhas, confiabilidade de ativos e gestão completa da manutenção industrial.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Link to="/platform" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-200 flex items-center">
                Conheça a Plataforma <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/features" className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all border border-slate-200 shadow-sm">
                Como Funciona
              </Link>
              <Link to="/demo" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all shadow-lg">
                Solicitar Demonstração
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative bg-white border border-slate-200 p-8 rounded-sm shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Dashboard Operacional</h3>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1 italic">Conceitual — Sem valores reais</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-sm border border-slate-100">
                  <Activity className="text-blue-700 w-5 h-5" />
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Disponibilidade Global", width: "w-[92%]", color: "bg-blue-600" },
                  { label: "Confiabilidade de Ativos", width: "w-[84%]", color: "bg-slate-800" },
                  { label: "Nível de Criticidade", width: "w-[15%]", color: "bg-blue-400" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <span>{item.label}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.width} ${item.color} rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-50 p-2 rounded-sm"><Settings className="w-4 h-4 text-blue-700" /></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Sistemas Customizáveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-slate-50 p-2 rounded-sm"><ShieldCheck className="w-4 h-4 text-slate-800" /></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">Processos Auditáveis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
