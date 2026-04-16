import { motion } from "framer-motion";

export function Hero() {
  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[100dvh] w-full flex flex-col items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="z-10 text-center px-4"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl italic font-normal tracking-wide text-black mb-8">
          Mercu Minimalista
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-500 tracking-widest uppercase text-xs sm:text-sm mb-12"
        >
          Silencio • Estructura • Forma
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={scrollToCollection}
          className="group relative inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase text-black overflow-hidden border border-black/10 hover:border-black transition-colors duration-500 bg-transparent"
        >
          <span className="relative z-10">Mirar colección</span>
          <div className="absolute inset-0 bg-gray-50 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0" />
        </motion.button>
      </motion.div>
    </section>
  );
}
