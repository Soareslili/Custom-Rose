import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
import FancyButton from '../../components/ui/shiny-button';


export function Footer() {
    return (
        <footer className="border-t border-border bg-surface/50 mt-20">
            <div className="container-custom py-16 grid gap-12 md:grid-cols-4">
                <div className="md:col-span-2">
                    <img src="/logo.png" alt="Custom Rose Tattoo Studio Logo" className="w-25 mb-4" />
                        
                    <p className="text-muted-foreground max-w-sm leading-relaxed">
                        Um estúdio de tatuagem premium dedicado a transformar sua história em arte atemporal em sua pele.
                    </p>

                    <div className="grid grid-cols-3 gap-6 w-[250px] m-4">
                        <FancyButton icon={<FaInstagram size={28} />} className="text-accent" variant="red" />
                        <FancyButton icon={<FaFacebook size={28} className="text-indigo-500" />} variant="indigo" />
                        <FancyButton icon={<FaXTwitter size={28} className="text-gray-500" />} variant="indigo" />
                       
                    </div>

                </div>

                <div>
                    <h4 className="text-sm uppercase tracking-widest mb-4 text-foreground"> Links</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                        <li><Link to="/about" className="hover:text-primary transition-smooth">Sobre</Link></li>
                        <li><Link to="/artists" className="hover:text-primary transition-smooth">Artistas</Link></li>
                        <li><Link to="/portfolio" className="hover:text-primary transition-smooth">Portfólio</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-smooth">Contato</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm uppercase tracking-widest mb-4 text-foreground">Contato</h4>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                        <li className="flex gap-2"><MapPin size={16} className="text-primary mt-0.5 shrink-0" /> 123 Paulista, São Paulo</li>
                        <li className="flex gap-2"><Phone size={16} className="text-primary mt-0.5 shrink-0" /> +1 (800) 000-0000</li>
                        <li className="flex gap-2"><Mail size={16} className="text-primary mt-0.5 shrink-0" /> hello@customrose.tattoo</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-border">
                <div className="container-custom py-6 text-center text-xs text-muted-foreground tracking-widest uppercase">
                    © {new Date().getFullYear()} Custom Rose Tattoo Studio — All rights reserved
                </div>
            </div>
        </footer>
    );
}


