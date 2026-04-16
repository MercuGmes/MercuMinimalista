import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="flex flex-col">
            <span className="font-serif text-2xl italic mb-6">Mercu Minimalista</span>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Redefiniendo el lujo a través del silencio y la estructura. Solo lo esencial.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 text-sm tracking-widest uppercase text-gray-500">
            <h4 className="text-black mb-2">Navegación</h4>
            <a href="#hero" className="hover:text-black transition-colors w-fit">Inicio</a>
            <a href="#collection" className="hover:text-black transition-colors w-fit">Colección</a>
            <a href="#about" className="hover:text-black transition-colors w-fit">Sobre Nosotros</a>
            <a href="#contact" className="hover:text-black transition-colors w-fit">Contacto</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-black text-sm tracking-widest uppercase mb-2">Social</h4>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Instagram className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Facebook className="w-5 h-5 stroke-[1.5]" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-12 border-t border-gray-100 text-xs text-gray-300 tracking-widest uppercase">
          <p className="mb-2">© {new Date().getFullYear()} Mercu Minimalista</p>
          <p className="opacity-50">Diseñada por Aaron Mejia Vega</p>
        </div>
      </div>
    </footer>
  );
}
