import { motion } from "motion/react";
import { ShoppingBag, Instagram, ArrowRight, Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const BRAND_COLORS = {
  dark: "#242622",
  light: "#f5f1e9",
  lemon: "#D4FF00", // Laranja Limão / Neon Yellow-Orange accent
};

const PRODUCTS = [
  { name: "Shorts Recortes", price: "R$ 106,00", original: "R$ 125,00", discount: "15% OFF", img: "https://picsum.photos/seed/shorts1/600/800" },
  { name: "Shorts Sem Costura", price: "R$ 106,00", original: "R$ 125,00", discount: "15% OFF", img: "https://picsum.photos/seed/shorts2/600/800" },
  { name: "Top Lu", price: "R$ 102,00", original: "R$ 120,00", discount: "15% OFF", img: "https://picsum.photos/seed/toplu/600/800" },
  { name: "Macaquinho Thuli", price: "R$ 178,00", original: "R$ 210,00", discount: "15% OFF", img: "https://picsum.photos/seed/macaquinho1/600/800" },
  { name: "Regata Mari", price: "R$ 64,00", original: "R$ 75,00", discount: "15% OFF", img: "https://picsum.photos/seed/regata/600/800" },
  { name: "Top Jaque", price: "R$ 102,00", original: "R$ 120,00", discount: "15% OFF", img: "https://picsum.photos/seed/topjaque/600/800" },
  { name: "Top Gabi", price: "R$ 102,00", original: "R$ 120,00", discount: "15% OFF", img: "https://picsum.photos/seed/topgabi/600/800" },
  { name: "Top Ju", price: "R$ 102,00", original: "R$ 120,00", discount: "15% OFF", img: "https://picsum.photos/seed/topju/600/800" },
  { name: "Bolsa Manva", price: "R$ 77,00", original: "R$ 89,90", discount: "14% OFF", img: "https://picsum.photos/seed/bolsa/600/800" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-manva-lemon selection:text-manva-dark bg-manva-light">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-manva-light/90 backdrop-blur-xl py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-black tracking-tighter uppercase"
          >
            Manva<span className="text-manva-lemon">.</span>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-16 text-[11px] font-bold uppercase tracking-[0.3em]">
            <a href="#produtos" className="hover:text-manva-lemon transition-colors">Shop All</a>
            <a href="#manifesto" className="hover:text-manva-lemon transition-colors">Manifesto</a>
            <a href="#comunidade" className="hover:text-manva-lemon transition-colors">Community</a>
          </div>

          <div className="flex items-center space-x-8">
            <button className="relative group">
              <ShoppingBag size={22} />
              <span className="absolute -top-2 -right-2 bg-manva-lemon text-manva-dark text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/manva-power/1920/1080" 
            alt="Hero" 
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-manva-dark/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tighter uppercase leading-[0.85] text-manva-light mb-8">
              O EQUILÍBRIO <br />
              <span className="text-manva-lemon italic underline decoration-manva-lemon/30 underline-offset-8">É UMA ARMA.</span>
            </h1>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-20">
            <p className="text-manva-light/60 text-left max-w-sm text-sm uppercase tracking-widest leading-relaxed font-bold">
              FUJA DO PADRÃO. SEJA A REVOLUÇÃO. <br />
              NÃO VESTIMOS CORPOS. <span className="text-manva-light">ARMAMOS MULHERES IMPARÁVEIS.</span>
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#D4FF00", color: "#242622" }}
              className="bg-manva-lemon text-manva-dark px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.2em] flex items-center space-x-4 shadow-[0_0_40px_rgba(212,255,0,0.3)]"
            >
              <span>QUERO MINHA ARMADURA</span>
              <ArrowUpRight size={18} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Product Grid - Matching Print */}
      <section id="produtos" className="py-32 px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <span className="text-manva-lemon font-bold text-xs uppercase tracking-[0.4em] mb-4 block">New Drop</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                COLEÇÃO <br /> ENERGIA
              </h2>
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-2 border border-manva-dark/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-manva-dark hover:text-manva-light transition-all">Filtrar</button>
              <button className="px-6 py-2 border border-manva-dark/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-manva-dark hover:text-manva-light transition-all">Ordenar</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
            {PRODUCTS.map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-white mb-8 relative">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-manva-lemon text-manva-dark text-[10px] font-black px-3 py-1 uppercase tracking-tighter">
                    {product.discount}
                  </div>
                  <button className="absolute bottom-4 right-4 bg-manva-light p-4 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <ShoppingBag size={20} />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-black uppercase tracking-tighter leading-tight max-w-[70%]">
                      {product.name}
                    </h3>
                    <span className="text-manva-lemon font-bold text-xs">NEW</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl font-bold">{product.price}</span>
                    <span className="text-sm opacity-30 line-through">{product.original}</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">3x de R$ 35,33 sem juros</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto - Aggressive Copy */}
      <section id="manifesto" className="bg-manva-dark text-manva-light py-40 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <span className="text-[40vw] font-black leading-none uppercase tracking-tighter select-none">MANVA</span>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase mb-20 leading-[0.85]">
              VOCÊ NÃO É <br /> <span className="text-manva-lemon">VÍTIMA DO CAOS.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div className="space-y-12">
                <p className="text-2xl md:text-4xl font-light leading-tight italic opacity-90">
                  "O movimento é sua única saída. O equilíbrio é sua maior vingança contra a inércia."
                </p>
                <div className="h-px w-40 bg-manva-lemon"></div>
              </div>
              <div className="space-y-8 text-lg opacity-60 font-light leading-relaxed">
                <p>A Manva não tolera o comum. Se você busca desculpas, procure outra marca. Aqui, celebramos a dor do crescimento e a glória da superação.</p>
                <p>Nascemos da amizade, mas forjamos nossa identidade na disciplina. Cada costura é um pacto com sua evolução. Não estamos aqui para ser bonitas. Estamos aqui para ser lendárias.</p>
                <button className="text-manva-lemon font-black uppercase tracking-[0.3em] text-xs flex items-center space-x-4 group">
                  <span>ENCARAR O MANIFESTO</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community / Social */}
      <section id="comunidade" className="py-40 px-8">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/m1/600/800" className="w-full aspect-[3/4] object-cover grayscale" alt="Community" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/m2/600/600" className="w-full aspect-square object-cover grayscale" alt="Community" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/m3/600/600" className="w-full aspect-square object-cover grayscale" alt="Community" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/m4/600/800" className="w-full aspect-[3/4] object-cover grayscale" alt="Community" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-manva-lemon font-black text-xs uppercase tracking-[0.5em] mb-8 block">Join the Tribe</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-12">
              EQUILÍBRIO <br /> EM <br /> MOVIMENTO<span className="text-manva-lemon">.</span>
            </h2>
            <p className="text-xl opacity-50 mb-16 max-w-md">
              Compartilhe sua jornada. Use #ManvaFit e faça parte da nossa comunidade de mulheres imparáveis.
            </p>
            <div className="flex items-center space-x-12">
              <a href="#" className="flex items-center space-x-4 group">
                <Instagram size={32} className="group-hover:text-manva-lemon transition-colors" />
                <span className="font-black uppercase tracking-widest text-sm">@manvafit</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-manva-dark text-manva-light py-32 px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div className="space-y-8">
              <div className="text-4xl font-black tracking-tighter uppercase">MANVA<span className="text-manva-lemon">.</span></div>
              <p className="opacity-40 text-sm leading-relaxed max-w-xs">
                Revolucionando a visão fitness. Minimalismo com alma modernista.
              </p>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-manva-lemon font-black text-[10px] uppercase tracking-[0.4em]">Shop</h4>
              <ul className="space-y-4 text-sm font-medium uppercase tracking-widest opacity-60">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Novidades</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Best Sellers</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Acessórios</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-manva-lemon font-black text-[10px] uppercase tracking-[0.4em]">Support</h4>
              <ul className="space-y-4 text-sm font-medium uppercase tracking-widest opacity-60">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Envio & Devolução</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Privacidade</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-manva-lemon font-black text-[10px] uppercase tracking-[0.4em]">Newsletter</h4>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="SEU EMAIL" 
                  className="w-full bg-transparent border-b border-manva-light/20 py-4 text-xs font-bold uppercase tracking-widest focus:border-manva-lemon outline-none transition-colors"
                />
                <button className="absolute right-0 bottom-4 text-manva-lemon">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-manva-light/5 gap-8">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-20">© 2026 MANVA ALL RIGHTS RESERVED</div>
            <div className="flex space-x-12 text-[10px] font-black uppercase tracking-[0.5em] opacity-20">
              <span>Designed by Bulbo</span>
              <span>Built for Power</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


