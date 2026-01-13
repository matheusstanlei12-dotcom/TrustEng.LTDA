
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, ShieldCheck, ArrowUpRight, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2 mb-8">
              <img src="/favicon.png" alt="TrustEng Logo" className="h-10 w-10 object-contain" />
              <span className="text-blue-700 text-3xl font-black tracking-tighter">TrustEng</span>
            </Link>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Tecnologia e inteligência aplicadas exclusivamente à manutenção industrial e engenharia de confiabilidade de ativos críticos.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/trusteng-industrial" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/trusteng.online/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors"><Instagram size={20} /></a>
              <a href="mailto:trusteng@trusteng.online" className="text-slate-400 hover:text-blue-700 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-black mb-8 text-[10px] uppercase tracking-[0.4em]">Missão & Visão</h4>
            <div className="space-y-6">
              <div>
                <span className="text-blue-700 text-[9px] font-black uppercase tracking-widest block mb-1">Missão</span>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  Transformar a manutenção industrial através da tecnologia, promovendo confiabilidade, segurança e eficiência operacional.
                </p>
              </div>
              <div>
                <span className="text-blue-700 text-[9px] font-black uppercase tracking-widest block mb-1">Visão</span>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  Ser referência em soluções tecnológicas para manutenção e confiabilidade de ativos em mercados globais.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-black mb-8 text-[10px] uppercase tracking-[0.4em]">Nossos Valores</h4>
            <ul className="space-y-3 text-[10px] text-slate-500 font-black uppercase tracking-widest">
              <li className="flex items-center text-slate-900"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-700" /> Engenharia</li>
              <li className="flex items-center text-slate-900"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-700" /> Tecnologia</li>
              <li className="flex items-center text-slate-900"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-700" /> Confiabilidade</li>
              <li className="flex items-center text-slate-900"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-700" /> Segurança da Informação</li>
              <li className="flex items-center text-slate-900"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-700" /> Transparência</li>
              <li className="flex items-center text-slate-900"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-700" /> Evolução Contínua</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black mb-8 text-[10px] uppercase tracking-[0.4em]">Plataforma</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-blue-700 transition-colors">Quem Somos</Link></li>
              <li><Link to="/history" className="hover:text-blue-700 transition-colors">Nossa História</Link></li>
              <li><Link to="/features" className="hover:text-blue-700 transition-colors">Funcionalidades</Link></li>
              <li><Link to="/platform" className="hover:text-blue-700 transition-colors">Arquitetura</Link></li>
              <li><Link to="/demo" className="hover:text-blue-700 transition-colors">Suporte Técnico</Link></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Política de Dados</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-[9px] text-slate-400 font-black uppercase tracking-[0.3em]">
          <p>TrustEng – Tecnologia Aplicada à Manutenção. © Todos os direitos reservados.</p>
          <div className="flex items-center space-x-6 mt-6 md:mt-0">
            <div className="flex items-center space-x-2">
              <ShieldCheck size={14} className="text-blue-600" />
              <span>Ambiente de Dados Criptografado</span>
            </div>
            <Link to="/demo" className="hover:text-blue-700 transition-colors">Documentação Técnica</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
