
import React from 'react';
import { ClipboardEdit, Search, Cpu, Zap, ClipboardCheck, LayoutGrid } from 'lucide-react';

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
    <section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-blue-100/50 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Metodologia Industrial</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-4 uppercase tracking-tight">Fluxo de Análise e Confiabilidade</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 hidden lg:block -translate-y-1/2"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="text-center bg-white border border-slate-200 p-6 rounded-xl shadow-lg hover:border-blue-200 hover:shadow-blue-500/5 transition-all group relative">
                {/* Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-slate-200 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm">
                  PASSO 0{step.id}
                </div>

                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm text-slate-400">
                  {React.cloneElement(step.icon as React.ReactElement<any>, { size: 24 })}
                </div>

                <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wide mb-2">{step.title}</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            A Trust Tecnologia estrutura análises de falhas com metodologias reconhecidas pela engenharia (RCM, FMEA), garantindo identificação clara do problema e eliminação definitiva de recorrências.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
