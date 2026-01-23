
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, ShieldCheck, ArrowUpRight, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2 mb-8 group">
              <img src="/favicon.png" alt="TrustEng Logo" className="h-10 w-10 object-contain" />
              <span className="text-slate-900 text-3xl font-bold tracking-tight group-hover:text-blue-600 transition-colors">Trust Tecnologia</span>
            </Link>
            <p className="text-sm font-medium leading-relaxed max-w-xs">
              Tecnologia e inteligência aplicadas exclusivamente à manutenção industrial e engenharia de confiabilidade de ativos críticos.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/trusteng-industrial" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 hover:scale-110 transition-all"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/trusteng.online/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 hover:scale-110 transition-all"><Instagram size={20} /></a>
              <a href="mailto:trusteng@trusteng.online" className="text-slate-400 hover:text-slate-900 hover:scale-110 transition-all"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">Missão & Visão</h4>
            <div className="space-y-6">
              <div>
                <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest block mb-2">Missão</span>
                <p className="text-xs leading-relaxed">
                  Transformar a manutenção industrial através da tecnologia, promovendo confiabilidade, segurança e eficiência operacional.
                </p>
              </div>
              <div>
                <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest block mb-2">Visão</span>
                <p className="text-xs leading-relaxed">
                  Ser referência em soluções tecnológicas para manutenção e confiabilidade de ativos em mercados globais.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">Nossos Valores</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              <li className="flex items-center text-slate-600 hover:text-blue-600 transition-colors cursor-default"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-600" /> Engenharia</li>
              <li className="flex items-center text-slate-600 hover:text-blue-600 transition-colors cursor-default"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-600" /> Tecnologia</li>
              <li className="flex items-center text-slate-600 hover:text-blue-600 transition-colors cursor-default"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-600" /> Confiabilidade</li>
              <li className="flex items-center text-slate-600 hover:text-blue-600 transition-colors cursor-default"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-600" /> Segurança da Informação</li>
              <li className="flex items-center text-slate-600 hover:text-blue-600 transition-colors cursor-default"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-600" /> Transparência</li>
              <li className="flex items-center text-slate-600 hover:text-blue-600 transition-colors cursor-default"><ArrowUpRight className="w-3 h-3 mr-2 text-blue-600" /> Evolução Contínua</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">Plataforma</h4>
            <ul className="space-y-4 text-xs text-slate-600 font-bold uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-blue-600 hover:pl-2 transition-all">Quem Somos</Link></li>
              <li><Link to="/history" className="hover:text-blue-600 hover:pl-2 transition-all">Nossa História</Link></li>
              <li><Link to="/features" className="hover:text-blue-600 hover:pl-2 transition-all">Funcionalidades</Link></li>
              <li><Link to="/platform" className="hover:text-blue-600 hover:pl-2 transition-all">Arquitetura</Link></li>
              <li><Link to="/demo" className="hover:text-blue-600 hover:pl-2 transition-all">Suporte Técnico</Link></li>
              <li><a href="#" className="hover:text-blue-600 hover:pl-2 transition-all">Política de Dados</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Trust Tecnologia. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-6 mt-6 md:mt-0">
            <div className="flex items-center space-x-2 text-blue-600/80">
              <ShieldCheck size={14} />
              <span>Ambiente Seguro 256-bit</span>
            </div>
            <Link to="/demo" className="hover:text-slate-900 transition-colors">Documentação API</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
