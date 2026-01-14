
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ProcessFlow from '../components/ProcessFlow';
import { Link } from 'react-router-dom';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar
} from 'recharts';
import {
  Settings, Workflow, ShieldCheck, BarChart4, FileCheck, Layers,
  ArrowRight, Activity, Clock, Database, TrendingDown, Target
} from 'lucide-react';

const mockChartData = [
  { name: 'S1', val: 40 }, { name: 'S2', val: 30 }, { name: 'S3', val: 60 },
  { name: 'S4', val: 50 }, { name: 'S5', val: 80 }, { name: 'S6', val: 70 },
];

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <Hero />

      {/* Agressive Technical Text Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="aggressive-border p-10 lg:p-20 bg-slate-50 shadow-sm">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight mb-12 uppercase tracking-tighter">
              A manutenção deixou de ser apenas corretiva.
              <span className="block text-slate-400 mt-2">Empresas que tratam falhas como eventos isolados perdem competitividade.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  A Trust Tecnologia existe para transformar manutenção em decisão estratégica. Somos uma empresa de tecnologia voltada exclusivamente à manutenção industrial, desenvolvendo sistemas que organizam, padronizam e transformam dados técnicos em decisões reais.
                </p>
                <div className="space-y-4">
                  {["Sem achismo.", "Sem improviso.", "Sem perda de histórico."].map((text, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-900 font-black uppercase text-sm tracking-widest">
                      <ShieldCheck className="text-blue-700 w-5 h-5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 border border-slate-200">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">Conceito de Asset Integrity</h4>
                <div className="h-40 w-full opacity-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockChartData}>
                      <Area type="monotone" dataKey="val" stroke="#1d4ed8" fill="#1d4ed8" fillOpacity={0.1} strokeWidth={3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-[10px] text-slate-400 mt-6 text-center font-bold uppercase tracking-tighter">
                  Representação visual de estabilidade técnica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customizable Platform Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-blue-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Arquitetura de Gestão</h2>
            <p className="text-3xl font-extrabold text-slate-900 uppercase tracking-tighter">Plataforma Totalmente Customizável</p>
            <div className="h-1 w-12 bg-blue-700 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sistema Moldado à Realidade", desc: "Configuração profunda baseada nos ativos específicos da sua planta.", icon: <Settings /> },
              { title: "Fluxos Configuráveis", desc: "Desenho de workflows de manutenção adequados aos seus processos.", icon: <Workflow /> },
              { title: "Indicadores Personalizados", desc: "KPIs definidos pela engenharia conforme metas organizacionais.", icon: <BarChart4 /> },
              { title: "Níveis de Acesso por Função", desc: "Segurança granular baseada em cargos e responsabilidades técnicas.", icon: <ShieldCheck /> },
              { title: "Processos Auditáveis", desc: "Toda ação é registrada com log completo para auditorias externas.", icon: <FileCheck /> },
              { title: "Estrutura Escalável", desc: "Arquitetura pronta para acompanhar o crescimento da sua indústria.", icon: <Layers /> }
            ].map((card, i) => (
              <div key={i} className="p-10 border border-slate-100 bg-white hover:border-blue-700 hover:shadow-xl transition-all group">
                {/* Added cast to React.ReactElement<any> to allow 'size' prop */}
                <div className="text-blue-700 mb-8 transition-transform group-hover:scale-110">{React.cloneElement(card.icon as React.ReactElement<any>, { size: 32 })}</div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 leading-tight">{card.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter italic">
              "A Trust Tecnologia se adapta ao seu processo, não o contrário."
            </p>
          </div>
        </div>
      </section>

      <ProcessFlow />

      {/* Interactive Indicators Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-blue-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Métricas de Confiabilidade</h2>
            <p className="text-3xl font-extrabold text-slate-900 uppercase tracking-tighter">Indicadores Técnicos Integrados</p>
            <p className="text-slate-400 text-[10px] font-bold uppercase mt-4 italic tracking-widest">Passe o mouse sobre as siglas para definições técnicas</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { label: "MTTR", icon: <Clock />, tooltip: "Mean Time To Repair: Tempo médio necessário para reparar um equipamento após falha." },
              { label: "MTBF", icon: <Activity />, tooltip: "Mean Time Between Failures: Tempo médio entre ocorrências de falhas em um ativo reparável." },
              { label: "MDT", icon: <TrendingDown />, tooltip: "Mean Down Time: Tempo médio de indisponibilidade total de um sistema ou ativo." },
              { label: "Disponibilidade", icon: <Database />, tooltip: "Availability: Relação entre o tempo que o equipamento esteve disponível para operação e o tempo total." },
              { label: "Confiabilidade", icon: <ShieldCheck />, tooltip: "Reliability: Probabilidade de um item desempenhar sua função sob condições específicas em um intervalo de tempo." },
              { label: "Horas de Parada", icon: <Clock />, tooltip: "Duração acumulada de tempo em que os ativos estiveram fora de operação por falhas ou intervenções." },
              { label: "Custos", icon: <Target />, tooltip: "Economic Impact: Impacto financeiro direto e indireto causado pela indisponibilidade de ativos críticos." }
            ].map((item, i) => (
              <div key={i} className="indicator-card p-6 bg-slate-50 border border-slate-100 text-center hover:bg-blue-700 hover:text-white transition-all group">
                <div className="flex justify-center mb-4 text-blue-700 group-hover:text-white transition-colors">
                  {/* Added cast to React.ReactElement<any> to allow 'size' prop */}
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest group-hover:text-white">{item.label}</div>
                <div className="indicator-tooltip">
                  <p className="font-bold text-blue-400 mb-1 uppercase tracking-widest">{item.label}</p>
                  <p className="text-[10px] opacity-90 leading-relaxed font-medium">{item.tooltip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Conceptual Chart Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 opacity-50">
            <div className="h-48 border border-slate-100 p-6 bg-white">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockChartData}>
                  <Area type="step" dataKey="val" stroke="#1d4ed8" fill="#1d4ed8" fillOpacity={0.05} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="text-[9px] font-black uppercase text-center mt-2 text-slate-300">Análise de Tendência Confiabilidade</div>
            </div>
            <div className="h-48 border border-slate-100 p-6 bg-white">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockChartData}>
                  <Bar dataKey="val" fill="#1e293b" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="text-[9px] font-black uppercase text-center mt-2 text-slate-300">Distribuição de Modos de Falha</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & History Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Segurança & Governança</h2>
              <p className="text-4xl font-extrabold text-white mb-8 tracking-tighter uppercase">Segurança, Sigilo e Histórico Preservado</p>
              <p className="text-slate-400 text-lg leading-relaxed font-medium mb-12">
                Segurança e sigilo são pilares da Trust Tecnologia. Todos os dados são armazenados em nuvem com redundância geográfica, garantindo integridade e impedindo a perda do histórico técnico industrial.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Controle por Perfil", desc: "Níveis de acesso baseados em responsabilidade." },
                  { title: "Rastreabilidade", desc: "Histórico completo de toda análise e decisão." },
                  { title: "Pronto p/ Auditorias", desc: "Conformidade total com normas de segurança." },
                  { title: "Backup Cloud", desc: "Integridade de dados garantida 24/7." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-blue-400 w-5 h-5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-white mb-1">{item.title}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-sm blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Infraestrutura Industrial Cloud"
                className="relative z-10 rounded-sm grayscale opacity-30 border border-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Differential */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-blue-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Diferencial Competitivo</h2>
            <p className="text-3xl font-extrabold text-slate-900 uppercase tracking-tighter">Por que escolher a Trust Tecnologia?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Foco Exclusivo em Manutenção", desc: "Não somos um ERP genérico. Respiramos engenharia industrial." },
              { title: "Plataforma Técnica Profissional", desc: "Interface desenvolvida por especialistas para especialistas." },
              { title: "Adaptável à Maturidade", desc: "Nossa tecnologia cresce conforme sua evolução de processos." },
              { title: "Interface Clara e Objetiva", desc: "Foco total na informação relevante para a decisão técnica." },
              { title: "Base Sólida p/ Melhoria", desc: "Histórico preservado para aplicação real de PDCA e RCM." },
              { title: "Visão Sistêmica de Ativos", desc: "Compreensão da planta como um organismo integrado e interdependente." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <Activity size={24} className="text-blue-700 group-hover:text-white" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">{item.title}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed tracking-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-10 tracking-tighter uppercase leading-tight">Manutenção exige método, registro e análise técnica.</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/demo" className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-6 rounded-sm font-black text-sm uppercase tracking-[0.3em] transition-all shadow-2xl shadow-blue-200">
              Solicitar Demonstração
            </Link>
            <Link to="/platform" className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 rounded-sm font-black text-sm uppercase tracking-[0.3em] transition-all">
              Falar com Especialista
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export default Home;
