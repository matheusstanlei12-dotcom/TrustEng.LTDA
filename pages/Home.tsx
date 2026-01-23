import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ProcessFlow from '../components/ProcessFlow';
import { Link } from 'react-router-dom';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, Tooltip
} from 'recharts';
import {
  Settings, Workflow, ShieldCheck, BarChart4, FileCheck, Layers,
  ArrowRight, Activity, Clock, Database, TrendingDown, Target, CheckCircle2, Zap, Layout, Lock
} from 'lucide-react';

const mockChartData = [
  { name: 'Jan', val: 4000, trend: 2400 },
  { name: 'Feb', val: 3000, trend: 1398 },
  { name: 'Mar', val: 2000, trend: 9800 },
  { name: 'Apr', val: 2780, trend: 3908 },
  { name: 'May', val: 1890, trend: 4800 },
  { name: 'Jun', val: 2390, trend: 3800 },
];

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-600 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Hero />

      {/* Value Proposition Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-full opacity-30 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                A Manutenção do Futuro <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Não é Sobre Consertar.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Empresas líderes não esperam o equipamento quebrar. A Trust Tecnologia oferece a infraestrutura digital para que você antecipe falhas, otimize recursos e transforme seu departamento de manutenção em um centro de lucro.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Zero Data Loss", desc: "Histórico blindado e acessível para sempre." },
                  { title: "Decisões Data-Driven", desc: "Chega de 'eu acho'. Tenha certeza baseada em dados." },
                  { title: "Compliance Total", desc: "Processos auditáveis ponta a ponta." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 bg-blue-50 p-2 rounded-lg border border-blue-100">
                      <ShieldCheck className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm tracking-wide">{item.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-md border border-slate-200 rounded-2xl p-8 relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent rounded-2xl pointer-events-none"></div>
              <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">Tendência de Confiabilidade</h4>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockChartData}>
                    <defs>
                      <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ color: '#2563eb' }}
                    />
                    <Area type="monotone" dataKey="val" stroke="#2563eb" fillOpacity={1} fill="url(#colorVal)" strokeWidth={3} />
                    <Area type="monotone" dataKey="trend" stroke="#06b6d4" strokeWidth={2} fill="none" strokeDasharray="5 5" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 flex justify-between items-end">
                <div>
                  <div className="text-3xl font-bold text-slate-900">+24%</div>
                  <div className="text-xs text-blue-600 font-medium flex items-center mt-1">
                    <TrendingDown className="w-3 h-3 mr-1 rotate-180" /> Aumento de MTBF
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-medium">Projeção estimada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Ecossistema Completo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-6 mb-4">Plataforma Modular e Escalável</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Construa sua gestão de manutenção bloco a bloco. Ative apenas o que precisa e expanda conforme sua maturidade técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Engenharia de Ativos", desc: "Cadastro hierárquico (ISO 14224) e gestão de ciclo de vida.", icon: <Database /> },
              { title: "Workflows Inteligentes", desc: "Automatize fluxos de aprovação e ordens de serviço.", icon: <Workflow /> },
              { title: "Analytics Integrado", desc: "Dashboards em tempo real para gerentes e diretores.", icon: <BarChart4 /> },
              { title: "Controle de Acesso", desc: "Segurança granular por nível hierárquico.", icon: <ShieldCheck /> },
              { title: "Auditoria Completa", desc: "Rastreabilidade de 100% das ações no sistema.", icon: <FileCheck /> },
              { title: "Integração API", desc: "Conecte com SAP, Totvs e outros ERPs via REST.", icon: <Layers /> }
            ].map((card, i) => (
              <div key={i} className="group p-8 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-slate-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-blue-600 transition-colors mb-6">
                  {React.cloneElement(card.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessFlow />

      {/* Metrics Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Dominando a Falha</h2>
              <p className="text-slate-500 mt-2 max-w-xl">
                Indicadores que transformam técnicos em gestores. Entenda o que cada sigla significa para o seu resultado.
              </p>
            </div>
            <Link to="/demo" className="text-blue-600 font-bold text-sm flex items-center hover:text-blue-500 transition-colors">
              Ver todos os indicadores <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { label: "MTTR", icon: <Clock />, tooltip: "Tempo Médio para Reparo: Eficiência da equipe de intervenção." },
              { label: "MTBF", icon: <Activity />, tooltip: "Tempo Médio Entre Falhas: Indicador vital de confiabilidade." },
              { label: "OEE", icon: <Zap />, tooltip: "Eficiência Global do Equipamento: Disponibilidade x Performance x Qualidade." },
              { label: "Disponibilidade", icon: <Database />, tooltip: "% de tempo que o ativo está pronto para operar." },
              { label: "Confiabilidade", icon: <ShieldCheck />, tooltip: "Probabilidade de sucesso de operação em um período." },
              { label: "Backlog", icon: <Layout />, tooltip: "Carteira de serviços pendentes vs. capacidade de execução." },
              { label: "Custo Falha", icon: <Target />, tooltip: "Custo total (material + mão de obra + lucro cessante)." }
            ].map((item, i) => (
              <div key={i} className="group relative p-4 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-blue-200 transition-all cursor-help text-center">
                <div className="flex justify-center mb-3 text-slate-400 group-hover:text-blue-600 transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                </div>
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">{item.label}</div>

                {/* Modern Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-white text-left text-xs text-slate-600 rounded-lg border border-slate-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="font-bold text-blue-600 mb-1">{item.label}</div>
                  {item.tooltip}
                  <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-slate-200 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-[#f8fafc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="text-blue-600 w-5 h-5" />
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Enterprise Security</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Seus dados são o seu maior ativo.</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Segurança de nível bancário para informações industriais críticas. Criptografia ponta a ponta, backups redundantes e servidores isolados.
              </p>

              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                {[
                  "Criptografia AES-256",
                  "Backup Geo-Redundante",
                  "Logs de Auditoria Imutáveis",
                  "ISO 27001 Compliance",
                  "Autenticação MFA",
                  "SLA de 99.9%"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-blue-600 w-4 h-4 shrink-0" />
                    <span className="text-sm text-slate-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[100px]"></div>
              <div className="relative z-10 bg-white border border-slate-200 p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold text-sm">Status de Segurança</div>
                    <div className="text-slate-500 text-xs text-blue-600">Monitoramento Ativo</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-between items-center">
                    <span className="text-slate-500 text-sm">Tentativas de invasão</span>
                    <span className="text-slate-900 font-mono font-bold">0</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-between items-center">
                    <span className="text-slate-500 text-sm">Last Backup</span>
                    <span className="text-blue-600 font-mono text-xs">JUST NOW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-blue-50/50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Pronto para profissionalizar sua gestão?
          </h2>
          <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">
            Junte-se a empresas que deixaram o "apagar incêndios" no passado. Solicite uma demonstração técnica hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/demo" className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all transform hover:scale-105">
              Solicitar Demonstração
            </Link>
            <Link to="/platform" className="px-10 py-5 bg-white hover:bg-slate-50 text-slate-700 rounded-lg font-bold text-sm uppercase tracking-wider border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              Falar com Consultor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
