
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  UserCog, 
  BarChart4, 
  ShieldCheck, 
  FileText, 
  Search, 
  ClipboardList,
  Lock,
  Database,
  Settings2,
  Workflow
} from 'lucide-react';

const customFeatures = [
  {
    title: "Fluxos Personalizados",
    icon: <Workflow className="text-blue-700" />,
    desc: "A plataforma se adapta ao workflow existente da sua empresa, permitindo a criação de etapas de aprovação e execução customizadas."
  },
  {
    title: "Tipologias de Ativos",
    icon: <Settings2 className="text-blue-700" />,
    desc: "Configure campos técnicos e metadados específicos para cada classe de equipamento, respeitando a complexidade da sua planta."
  },
  {
    title: "Governança de Acessos",
    icon: <Lock className="text-blue-700" />,
    desc: "Definição granular de permissões baseada na estrutura organizacional e responsabilidade técnica de cada colaborador."
  }
];

const Platform: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-blue-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Arquitetura de Gestão</h2>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Flexibilidade Industrial</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Desenvolvemos uma tecnologia que respeita os seus métodos, normas e maturidade técnica.
          </p>
        </div>
      </section>

      {/* Customization Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {customFeatures.map((f, i) => (
              <div key={i} className="bg-white border border-slate-100 p-10 rounded-sm shadow-sm hover:border-blue-200 transition-all">
                <div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center mb-8">{f.icon}</div>
                <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-tight text-lg">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technical Module Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-blue-700 text-[10px] font-black uppercase tracking-[0.4em]">Integração Metodológica</h2>
              <p className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">Confiabilidade de Ponta a Ponta</p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Módulo RCA", icon: <Search className="w-5 h-5" />, desc: "Ishikawa e 5 Whys integrados ao histórico." },
                  { title: "RCM Index", icon: <ShieldCheck className="w-5 h-5" />, desc: "Gestão baseada em criticidade de ativos." },
                  { title: "Backup Industrial", icon: <Database className="w-5 h-5" />, desc: "Integridade total dos registros históricos." },
                  { title: "Relatórios PDF", icon: <FileText className="w-5 h-5" />, desc: "Documentação estruturada para auditoria." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-blue-700">{item.icon}</div>
                    <h4 className="text-slate-900 font-bold text-xs uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-xl">
                 <div className="flex items-center space-x-3 mb-8">
                    <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Módulo RCA Ativo</div>
                 </div>
                 <div className="space-y-4">
                    <div className="h-4 w-full bg-slate-50"></div>
                    <div className="h-4 w-5/6 bg-slate-50"></div>
                    <div className="h-4 w-full bg-slate-50"></div>
                    <div className="grid grid-cols-5 gap-2 pt-4">
                       {[...Array(5)].map((_, i) => (
                         <div key={i} className="h-2 bg-blue-100 rounded-full"></div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-tight">Adaptamos nossa tecnologia ao seu processo técnico.</h2>
          <div className="flex justify-center">
            {/* Fix: Added missing import for Link component */}
            <Link to="/demo" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-sm font-black text-sm uppercase tracking-widest transition-all">
              Agendar Configuração Técnica
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
