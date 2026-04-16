export function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-4xl italic mb-4">Contacto</h2>
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-16">Hablemos en privado</p>

        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="relative group">
            <input 
              type="text" 
              id="name"
              className="w-full bg-transparent border-b border-gray-300 py-4 px-0 text-black focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
              placeholder="Nombre"
            />
            <label 
              htmlFor="name" 
              className="absolute left-0 top-4 text-gray-400 text-sm tracking-widest uppercase cursor-text transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-black"
            >
              Nombre
            </label>
          </div>

          <div className="relative group">
            <input 
              type="email" 
              id="email"
              className="w-full bg-transparent border-b border-gray-300 py-4 px-0 text-black focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
              placeholder="Email"
            />
            <label 
              htmlFor="email" 
              className="absolute left-0 top-4 text-gray-400 text-sm tracking-widest uppercase cursor-text transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-black"
            >
              Email
            </label>
          </div>

          <div className="relative group">
            <textarea 
              id="message"
              rows={4}
              className="w-full bg-transparent border-b border-gray-300 py-4 px-0 text-black focus:outline-none focus:border-black transition-colors peer placeholder-transparent resize-none"
              placeholder="Mensaje"
            />
            <label 
              htmlFor="message" 
              className="absolute left-0 top-4 text-gray-400 text-sm tracking-widest uppercase cursor-text transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-black"
            >
              Mensaje
            </label>
          </div>

          <button 
            type="submit"
            className="w-full border border-black text-black uppercase tracking-[0.2em] text-xs py-5 hover:bg-black hover:text-white transition-colors duration-500 mt-8"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
