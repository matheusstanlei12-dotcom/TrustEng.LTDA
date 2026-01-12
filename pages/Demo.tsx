
import React, { useState, useEffect } from 'react';

const Demo: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const role = formData.get('role');
    const challenge = formData.get('challenge');

    const subject = `Solicitação de Demonstração - ${name}`;
    const body = `Nome: ${name}%0D%0AE-mail: ${email}%0D%0ACargo: ${role}%0D%0ADesafio: ${challenge}`;

    window.location.href = `mailto:trusteng@trusteng.online?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-100">
              <span className="w-2 h-2 bg-blue-700 rounded-full mr-2 animate-pulse"></span>
              Consultoria Estratégica
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[1.1]">
              Eleve o nível da sua <span className="text-blue-700 italic">Gestão</span>.
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium max-w-xl">
              Agende uma imersão técnica exclusiva. Nossos especialistas mapearão seus gargalos operacionais e demonstrarão como a TrustEng entrega previsibilidade real.
            </p>

            <div className="space-y-8">
              {[
                { step: "01", title: "Mapeamento de Criticidade", desc: "Análise inicial dos ativos com Maior Impacto no Negócio." },
                { step: "02", title: "Arquitetura de Solução", desc: "Desenho personalizado de workflows e dashboards técnicos." },
                { step: "03", title: "Viabilidade & Roadmap", desc: "Cronograma de implantação focado em resultados rápidos (Quick Wins)." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-sm flex items-center justify-center shrink-0 font-black text-lg transition-transform group-hover:scale-110">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-black uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full"></div>
            <div className="relative bg-white border border-slate-100 p-10 lg:p-14 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.12)]">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-blue-700 text-white rounded-sm flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-200">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Protocolo Recebido</h3>
                  <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mb-10">Um consultor sênior entrará em contato em breve.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="group flex items-center justify-center mx-auto space-x-2 text-blue-700 font-black uppercase tracking-[0.2em] text-xs hover:text-blue-900 transition-colors"
                  >
                    <span>Nova Solicitação</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Nome Completo</label>
                      <div className="relative group">
                        <input
                          required
                          name="name"
                          type="text"
                          className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 text-slate-900 font-bold focus:border-blue-700 focus:outline-none transition-all placeholder:text-slate-300"
                          placeholder="EX: JOÃO SILVA"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">E-mail Corporativo</label>
                      <input
                        required
                        name="email"
                        type="email"
                        className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 text-slate-900 font-bold focus:border-blue-700 focus:outline-none transition-all placeholder:text-slate-300"
                        placeholder="EMAIL@EMPRESA.COM"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Cargo Atual</label>
                    <input
                      required
                      name="role"
                      type="text"
                      className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 text-slate-900 font-bold focus:border-blue-700 focus:outline-none transition-all placeholder:text-slate-300"
                      placeholder="EX: GERENTE DE MANUTENÇÃO"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Desafio Técnico Principal</label>
                    <div className="relative">
                      <textarea
                        required
                        name="challenge"
                        className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 text-slate-900 font-bold focus:border-blue-700 focus:outline-none transition-all h-40 resize-none placeholder:text-slate-300"
                        placeholder="DESCREVA O PROBLEMA QUE PRECISA SER RESOLVIDO..."
                      ></textarea>
                      <div className="absolute bottom-4 right-4 text-[9px] font-black text-slate-300 uppercase tracking-widest">
                        Manutenção Industrial • TrustEng
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-slate-900 text-white py-6 rounded-sm font-black text-sm uppercase tracking-[0.4em] transition-all shadow-2xl shadow-blue-200 flex items-center justify-center space-x-3 group"
                  >
                    <span>Solicitar Demonstração</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>

                  <div className="flex items-center justify-center space-x-4 opacity-40">
                    <div className="h-px bg-slate-300 grow"></div>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em]">Confiabilidade & Sigilo</span>
                    <div className="h-px bg-slate-300 grow"></div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
