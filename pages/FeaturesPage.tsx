
import React, { useEffect } from 'react';
import { Camera, Search, ClipboardList, Clock, DollarSign, History, LayoutDashboard, FileText, BrainCircuit } from 'lucide-react';

const featuresList = [
  {
    icon: <Camera className="text-blue-700" />,
    title: "Registro com Fotos",
    desc: "Captura de evidências visuais direto do campo com anotações técnicas por ativo."
  },
  {
    icon: <Search className="text-blue-700" />,
    title: "Análise de Causa Raiz",
    desc: "Metodologias 5 Porquês e Ishikawa guiadas para eliminar falhas recorrentes."
  },
  {
    icon: <ClipboardList className="text-blue-700" />,
    title: "Planos de Ação 5W2H",
    desc: "Gestão completa de tarefas preventivas e corretivas com prazos e responsáveis."
  },
  {
    icon: <LayoutDashboard className="text-blue-700" />,
    title: "Dashboards Técnicos",
    desc: "Visão em tempo real de KPIs de manutenção por unidade ou centro de custo."
  },
  {
    icon: <Clock className="text-blue-700" />,
    title: "Indicadores de Tempo",
    desc: "Cálculo automatizado de MTBF (Tempo Entre Falhas) e MTTR (Tempo de Reparo)."
  },
  {
    icon: <DollarSign className="text-blue-700" />,
    title: "Gestão de Custos",
    desc: "Monitoramento financeiro detalhado de perdas por indisponibilidade de ativos."
  },
  {
    icon: <FileText className="text-blue-700" />,
    title: "Relatórios em PDF",
    desc: "Geração instantânea de relatórios profissionais para auditorias e reuniões técnicas."
  },
  {
    icon: <History className="text-blue-700" />,
    title: "Prontuário do Ativo",
    desc: "Histórico completo e imutável de todas as intervenções realizadas por TAG."
  },
  {
    icon: <BrainCircuit className="text-blue-700" />,
    title: "Apoio com IA",
    desc: "Inteligência aplicada para sugerir causas prováveis e otimizar rotinas de inspeção."
  }
];

const FeaturesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">Arsenal Tecnológico</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Ferramentas precisas desenhadas para elevar a confiabilidade da sua planta ao padrão de classe mundial.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuresList.map((f, i) => (
              <div key={i} className="group p-10 bg-white border border-slate-100 rounded-sm shadow-sm hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                <div className="w-14 h-14 bg-slate-50 rounded-sm flex items-center justify-center mb-8 group-hover:bg-blue-700 group-hover:text-white transition-all">
                  {/* Fix: Cast to React.ReactElement<any> to allow 'size' prop which exists on Lucide icons */}
                  {React.cloneElement(f.icon as React.ReactElement<any>, { size: 28, className: "group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-8 italic">"A diferença entre consertar e gerir está no método aplicado."</h2>
          <button className="bg-white text-blue-700 px-10 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
            Ver Demonstração ao Vivo
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
