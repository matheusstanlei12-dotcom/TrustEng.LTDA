
import React, { useEffect } from 'react';
import { Lock, Users, ShieldCheck, Briefcase, Cpu, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const directors = [
        {
            role: "Diretor Financeiro e de Operações (CFO & COO)",
            name: "Thiago Luiz de Almeida Orlandi",
            experience: "Engenheiro Mecânico, com 23 anos de experiência em manutenção industrial e operações, Thiago construiu sua carreira atuando a gerência de equipes técnicas, estruturação de processos, controle de custos, confiabilidade de ativos e eficiência operacional.",
            focus: "Na TrustEng, lidera as áreas financeira e operacional, garantindo governança, previsibilidade e excelência na execução, assegurando que cada projeto gere impacto técnico e financeiro positivo para os clientes."
        },
        {
            role: "Diretor de Tecnologia (CTO)",
            name: "Matheus Stanley Rodrigues Moura",
            experience: "Com 14 anos de experiência em planejamento de manutenção, supervisão de operações de manutenção e desenvolvimento de sistemas, Matheus construiu sua carreira atuando na gestão de equipes técnicas, organização de processos e transformação da rotina operacional em soluções digitais.",
            focus: "Na TrustEng, lidera o desenvolvimento dos sistemas, a arquitetura das soluções e a automação dos processos de manutenção, garantindo que a tecnologia reflita fielmente os fluxos, indicadores e necessidades operacionais de cada cliente."
        },
        {
            role: "Diretor Comercial (CRO)",
            name: "Fabiano de Oliveira Lima",
            experience: "Com 22 anos de experiência em manutenção industrial, Fabiano construiu sua carreira atuando na gestão de equipes técnicas, organização de processos operacionais, padronização de rotinas e relacionamento com áreas de engenharia, produção e gestão.",
            focus: "Na TrustEng, é responsável pela estratégia comercial, desenvolvimento de mercado, parcerias e relacionamento com grandes clientes, assegurando que cada solução esteja alinhada às reais necessidades técnicas e operacionais das indústrias atendidas."
        }
    ];

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

            {/* Institutional Content */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-24">
                    <div className="max-w-4xl mx-auto text-left">
                        <div className="prose prose-slate max-w-none">
                            <p className="text-2xl text-slate-900 font-bold leading-relaxed mb-10 tracking-tight border-b border-slate-100 pb-10">
                                A TrustEng é uma empresa focada em análise de falhas e gestão da manutenção industrial, atuando em toda a cadeia de processos que envolve ativos, equipes, planejamento, execução e desempenho operacional.
                            </p>
                            <div className="space-y-10 text-slate-500 text-lg font-medium leading-relaxed">
                                <p>
                                    Nossa atuação vai além do diagnóstico. Desenvolvemos sistemas e aplicativos próprios, voltados exclusivamente para manutenção, análise de ocorrências e controle dos processos operacionais, permitindo que as empresas transformem informações do dia a dia em dados estruturados, indicadores confiáveis e decisões estratégicas.
                                </p>
                                <p>
                                    Cada solução da TrustEng é desenhada para refletir a forma como a empresa realmente opera. Nossos sistemas se adaptam aos fluxos, políticas, indicadores e práticas de cada cliente, garantindo aderência total à realidade da operação e evitando rupturas, retrabalho ou perda de controle.
                                </p>
                                <p>
                                    A segurança, confidencialidade e integridade dos dados são pilares da nossa atuação. Todas as informações operacionais, técnicas e financeiras dos clientes são tratadas com rigor absoluto de sigilo, controle de acesso e governança, assegurando que dados críticos permaneçam protegidos e sob total domínio da empresa.
                                </p>
                                <p>
                                    Ao integrar análise de falhas, planejamento, execução e gestão, a TrustEng permite que as organizações reduzam recorrências, aumentem a confiabilidade dos ativos, melhorem o controle de custos e elevem a previsibilidade operacional.
                                </p>
                                <p className="text-slate-900 font-black text-2xl uppercase tracking-tighter italic lg:pr-20 border-l-4 border-blue-700 pl-8 py-4 bg-slate-50">
                                    "A TrustEng existe para apoiar empresas que exigem confiança, precisão e excelência operacional em ambientes onde falhas não são uma opção."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership Section */}
                <div className="bg-slate-900 py-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mb-20">
                            <div className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                Liderança
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-6">
                                Experiência & <span className="text-blue-500 italic">Governança</span>
                            </h2>
                            <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed italic">
                                Experiência, governança e conhecimento operacional a serviço da sua operação.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12">
                            {directors.map((director, index) => (
                                <div key={index} className="bg-slate-800/50 p-10 border border-slate-700 hover:border-blue-500 transition-colors group">
                                    <h4 className="text-blue-500 font-black uppercase text-[10px] tracking-[0.3em] mb-4">{director.role}</h4>
                                    <h3 className="text-2xl font-black text-white mb-8 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{director.name}</h3>
                                    <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6">{director.experience}</p>
                                    <p className="text-slate-400 text-[13px] leading-relaxed italic">{director.focus}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 border-t border-slate-800 pt-20">
                            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-4xl italic">
                                A TrustEng é conduzida por diretores executivos que unem vivência prática em manutenção industrial, liderança de equipes técnicas, estruturação de processos e visão estratégica, garantindo que cada solução entregue seja tecnicamente consistente, financeiramente sustentável e operacionalmente eficaz.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Governance Section */}
                <div className="py-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <div className="inline-flex items-center px-3 py-1 bg-blue-700 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                    Governança
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-tight">
                                    Compromisso com a <span className="text-blue-700 italic">Integridade</span>
                                </h2>
                                <div className="space-y-6 text-slate-500 text-lg font-medium leading-relaxed">
                                    <p>
                                        A TrustEng opera com uma estrutura de governança corporativa orientada à confiabilidade operacional, integridade de dados e responsabilidade executiva.
                                    </p>
                                    <p>
                                        Todos os projetos, sistemas e entregas seguem papéis executivos definidos, com responsabilidades técnicas, financeiras e operacionais claramente estabelecidas, garantindo controle, rastreabilidade e previsibilidade em cada contrato.
                                    </p>
                                    <p>
                                        A confidencialidade é um compromisso institucional. Todas as informações operacionais, técnicas, estratégicas e financeiras dos clientes são tratadas sob regime de sigilo absoluto.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-12 lg:p-16 border border-slate-100 relative">
                                <div className="absolute -top-6 -right-6 p-6 bg-slate-900 text-white">
                                    <Lock size={32} />
                                </div>
                                <h4 className="text-slate-900 font-black uppercase text-xs tracking-widest mb-10">Sistemas Blindados</h4>
                                <ul className="space-y-6">
                                    {[
                                        { icon: <ShieldCheck className="text-blue-700" size={24} />, text: "Isolamento de bases por cliente" },
                                        { icon: <Users className="text-blue-700" size={24} />, text: "Controle de usuários e permissões" },
                                        { icon: <Briefcase className="text-blue-700" size={24} />, text: "Rastreabilidade de acessos e alterações" },
                                        { icon: <Cpu className="text-blue-700" size={24} />, text: "Proteção da integridade das informações" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-6 pb-6 border-b border-slate-200 last:border-0 last:pb-0">
                                            {item.icon}
                                            <span className="text-slate-800 font-bold uppercase text-xs tracking-wider">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-12 pt-10 border-t border-slate-200">
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                                        A TrustEng assegura que os dados pertencem exclusivamente ao cliente, permanecendo sob seu total controle, em conformidade com boas práticas de governança, segurança da informação e ética corporativa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
