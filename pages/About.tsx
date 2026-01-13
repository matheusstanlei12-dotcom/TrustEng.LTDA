
import React, { useEffect } from 'react';
import { Lock } from 'lucide-react';

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 skew-x-12 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center px-3 py-1 bg-blue-700 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        Institucional
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                        Quem <span className="text-blue-700 italic">Somos</span>
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-slate max-w-none">
                            <p className="text-2xl text-slate-900 font-bold leading-relaxed mb-10 tracking-tight border-b border-slate-100 pb-10">
                                A TrustEng é uma empresa focada em análise de falhas e gestão da manutenção industrial, atuando em toda a cadeia de processos que envolve ativos, equipes, planejamento, execução e desempenho operacional.
                            </p>

                            <div className="space-y-10 text-slate-500 text-lg font-medium leading-relaxed">
                                <p>
                                    Nossa atuação vai além do diagnóstico. Desenvolvemos sistemas e aplicativos próprios voltados exclusivamente para manutenção, análise de ocorrências e controle dos processos operacionais, permitindo que as empresas transformem informações do dia a dia em dados estruturados, indicadores confiáveis e decisões estratégicas.
                                </p>

                                <p>
                                    Cada solução da TrustEng é desenhada para refletir a forma como a empresa realmente opera. Nossos sistemas se adaptam aos fluxos, políticas, indicadores e práticas de cada cliente, garantindo aderência total à realidade da operação e evitando rupturas, retrabalho ou perda de controle.
                                </p>

                                <div className="bg-slate-900 p-10 lg:p-14 my-16 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Lock size={120} className="text-white" />
                                    </div>
                                    <h4 className="text-blue-400 font-black uppercase text-[10px] tracking-[0.4em] mb-6 relative z-10">Segurança & Governança</h4>
                                    <p className="text-white text-xl font-bold leading-relaxed relative z-10">
                                        A segurança, confidencialidade e integridade dos dados são pilares da nossa atuação. Todas as informações operacionais, técnicas e financeiras dos clientes são tratadas com rigor absoluto de sigilo, controle de acesso e governança, assegurando que dados críticos permaneçam protegidos e sob total domínio da empresa.
                                    </p>
                                </div>

                                <p>
                                    Ao integrar análise de falhas, planejamento, execução e gestão, a TrustEng permite que as organizações reduzam recorrências, aumentem a confiabilidade dos ativos, melhorem o controle de custos e elevem a previsibilidade operacional.
                                </p>

                                <p className="text-slate-900 font-black text-2xl uppercase tracking-tighter italic lg:pr-20">
                                    "A TrustEng existe para apoiar empresas que exigem confiança, precisão e excelência operacional em ambientes onde falhas não são uma opção."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
