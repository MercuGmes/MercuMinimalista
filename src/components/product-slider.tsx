import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products, Product } from "@/lib/data";
import { ProductModal } from "@/components/product-modal";
import { motion } from "framer-motion";

export function ProductSlider() {
  const [activeCategory, setActiveCategory] = useState<string>("Todo");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === "Todo" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Re-init when filtered products change
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, filteredProducts]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[100vw] mx-auto px-4 md:px-8">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 text-xs md:text-sm tracking-[0.2em] uppercase">
          {["Todo", "Camisas", "Pantalones", "Sudaderas"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative pb-1 transition-colors duration-300 ${
                activeCategory === cat ? "text-black" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-black"
                />
              )}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8 cursor-pointer group"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative h-[60vh] md:h-[75vh] w-full flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
                    <motion.img
                      layoutId={`product-image-${product.id}`}
                      src={product.image}
                      alt={product.name}
                      className="max-h-[80%] max-w-[80%] object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div>
                        <p className="text-xs text-gray-500 tracking-widest uppercase mb-2">{product.category}</p>
                        <h3 className="font-serif text-2xl md:text-3xl italic">{product.name}</h3>
                      </div>
                      <p className="text-lg">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8 pointer-events-none">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur border border-black/5 hover:border-black/20 text-black pointer-events-auto transition-colors disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1]" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur border border-black/5 hover:border-black/20 text-black pointer-events-auto transition-colors disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5 stroke-[1]" />
            </button>
          </div>
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}
