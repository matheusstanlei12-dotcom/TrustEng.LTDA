
import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 bg-[#0B1120] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[10%] right-[0%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-blue-500 font-bold tracking-widest text-xs uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        Experiência Imersiva
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-6 mb-6">
                        O Futuro da Manutenção <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Em Tempo Real</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Acompanhe como a inteligência artificial e a IoT industrial estão redefinindo os padrões de produtividade global.
                    </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900 aspect-video group">
                    {!isPlaying ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                            {/* Thumbnail Placeholder with Overlay */}
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920&h=1080"
                                alt="Video Thumbnail"
                                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent"></div>

                            <button
                                onClick={() => setIsPlaying(true)}
                                className="relative z-10 w-24 h-24 bg-blue-600/90 hover:bg-blue-500 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-[0_0_30px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] group-hover:scale-110"
                            >
                                <Play className="w-10 h-10 ml-1 fill-current" />
                            </button>
                        </div>
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/HPRURtORnis?autoplay=1&rel=0"
                            title="Industry 4.0 Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
