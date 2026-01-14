
import React from 'react';
import { ClipboardEdit, Search, Cpu, Zap, ClipboardCheck, LayoutGrid, ChevronRight } from 'lucide-react';

const steps = [
  { id: 1, title: "Registro", desc: "Coleta técnica estruturada de evidências da falha.", icon: <ClipboardEdit /> },
  { id: 2, title: "Investigação", desc: "Levantamento detalhado do contexto e condições.", icon: <Search /> },
  { id: 3, title: "Causa Raiz", desc: "Aplicação de métodos RCA (5P, Ishikawa).", icon: <Cpu /> },
  { id: 4, title: "Ação", desc: "Definição de contramedidas e bloqueios técnicos.", icon: <Zap /> },
  { id: 5, title: "Controle", desc: "Monitoramento da eficácia da intervenção.", icon: <ClipboardCheck /> },
  { id: 6, title: "Padronização", desc: "Retroalimentação dos planos mestre.", icon: <LayoutGrid /> },
];

const ProcessFlow: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-blue-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Metodologia Industrial</h2>
          <p className="text-3xl font-extrabold text-slate-900 uppercase tracking-tighter">Fluxo de Análise e Confiabilidade</p>
          <div className="h-1 w-12 bg-blue-700 mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 hidden lg:block -translate-y-1/2"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.id} className="text-center bg-white border border-slate-200 p-8 rounded-sm shadow-sm hover:border-blue-600 transition-all group">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm">
                  {/* Added cast to React.ReactElement<any> to allow 'size' prop */}
                  {React.cloneElement(step.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <div className="text-blue-700 text-[10px] font-black mb-2">PASSO 0{step.id}</div>
                <h4 className="text-slate-900 font-bold text-sm uppercase tracking-tight mb-3">{step.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed">
            A Trust Tecnologia estrutura análises de falhas com metodologias reconhecidas pela engenharia, garantindo identificação clara do problema e eliminação definitiva de recorrências.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
