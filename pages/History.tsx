
import React, { useEffect } from 'react';
import { History, Target, Layers, ShieldCheck, Factory, Lightbulb } from 'lucide-react';

const HistoryPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const timelinePoints = [
        {
            year: "Origem",
            title: "Vivência em Campo",
            desc: "A TrustEng nasceu da experiência prática de profissionais que viveram os desafios reais da manutenção industrial: falhas recorrentes, informações fragmentadas e baixa confiabilidade de dados."
        },
        {
            year: "O Problema",
            title: "Desalinhamento Sistêmico",
            desc: "Identificamos que os sistemas existentes não refletiam a realidade do chão de fábrica. Processos eram forçados a se adaptar às ferramentas, resultando em perda de controle e custos ocultos."
        },
        {
            year: "Fundação",
            title: "Inversão da Lógica",
            desc: "A TrustEng foi criada para unir engenharia de manutenção e tecnologia aplicada, onde os sistemas se moldam aos processos reais, e não aos modelos genéricos de mercado."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="pt-40 pb-20 bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-1/4"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        Nossa Trajetória
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                        Nossa <span className="text-blue-500 italic">História</span>
                    </h1>
                </div>
            </section>

            {/* Core Narrative */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        <div className="space-y-12">
                            <div className="relative">
                                <span className="text-[120px] font-black text-slate-50 absolute -top-20 -left-10 z-0 select-none">TRUST</span>
                                <div className="relative z-10 space-y-8">
                                    <p className="text-2xl text-slate-900 font-bold leading-relaxed tracking-tight">
                                        Ao longo de décadas atuando diretamente em planejamento, execução, supervisão e gestão da manutenção, nossos diretores identificaram um problema comum: a falta de aderência técnica das ferramentas tradicionais.
                                    </p>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                        A partir dessa visão, a TrustEng passou a desenvolver plataformas próprias de gestão, análise de ocorrências e controle operacional, construídas a partir de dados reais, fluxos operacionais e indicadores utilizados no dia a dia das indústrias.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-700 p-12 text-white shadow-2xl">
                                <Lightbulb className="mb-6 opacity-50" size={40} />
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-tight">Cada solução nasce diretamente da experiência prática em campo.</h3>
                                <p className="text-blue-100 font-medium italic">Garantindo aderência total à operação do cliente e eliminando o retrabalho.</p>
                            </div>
                        </div>

                        <div className="space-y-16">
                            {timelinePoints.map((point, i) => (
                                <div key={i} className="flex space-x-8 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-black text-xs uppercase rotate-45 group-hover:bg-blue-700 transition-colors">
                                            <span className="-rotate-45">{point.year[0]}</span>
                                        </div>
                                        {i !== timelinePoints.length - 1 && <div className="w-px h-full bg-slate-200 mt-4"></div>}
                                    </div>
                                    <div className="pb-12">
                                        <h4 className="text-slate-900 font-black uppercase text-xs tracking-[0.2em] mb-3">{point.title}</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Três Pilares Fundamentais</h2>
                        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Consolidação da abordagem TrustEng</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Factory size={32} />, title: "Confiabilidade", desc: "Foco total na disponibilidade e saúde dos ativos críticos." },
                            { icon: <Layers size={32} />, title: "Governança", desc: "Processos estruturados com rastreabilidade e controle." },
                            { icon: <ShieldCheck size={32} />, title: "Integridade", desc: "Segurança absoluta das informações operacionais e estratégicas." }
                        ].map((pilar, idx) => (
                            <div key={idx} className="bg-white p-10 border border-slate-200 hover:shadow-xl transition-all group">
                                <div className="text-blue-700 mb-6 group-hover:scale-110 transition-transform inline-block">
                                    {pilar.icon}
                                </div>
                                <h4 className="text-slate-900 font-black uppercase text-xs tracking-widest mb-4">{pilar.title}</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{pilar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Statement */}
            <section className="py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-xl lg:text-3xl text-slate-900 font-bold leading-relaxed mb-12">
                        Hoje, a TrustEng atua como uma parceira estratégica de empresas que exigem controle, previsibilidade e excelência operacional.
                    </p>
                    <div className="h-2 w-24 bg-blue-700 mx-auto mb-12"></div>
                    <h3 className="text-2xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter italic">
                        "A TrustEng existe para garantir que a manutenção industrial deixe de ser reativa e passe a ser estratégica, previsível e controlada."
                    </h3>
                </div>
            </section>
        </div>
    );
};

export default HistoryPage;
