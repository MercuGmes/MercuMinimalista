import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Product } from "@/lib/data";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const SIZES = ["XS", "S", "M", "L", "XL"];

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const { addItem, setCartOpen } = useCart();
  const { toast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, selectedSize);
    onClose();
    setCartOpen(true);
    toast({
      title: "Añadido al carrito",
      description: `${product.name} (${selectedSize})`,
      duration: 3000,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-2 z-10 text-gray-500 hover:text-black transition-colors bg-white/50 backdrop-blur-sm rounded-full"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 bg-gray-50 min-h-[50vh] md:min-h-[70vh] relative p-8 flex items-center justify-center">
                  <motion.img
                    layoutId={`product-image-${product.id}`}
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-[60vh] object-contain mix-blend-multiply"
                  />
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="space-y-6">
                    <p className="text-xs tracking-[0.2em] text-gray-400 uppercase">{product.category}</p>
                    <h2 className="text-3xl md:text-4xl font-serif italic">{product.name}</h2>
                    <p className="text-xl">${product.price}</p>
                    
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {product.description}
                      </p>
                      <p className="text-gray-400 text-xs uppercase tracking-widest mt-4">
                        Material: {product.material}
                      </p>
                    </div>

                    <div className="pt-8">
                      <div className="flex justify-between items-center mb-4 text-xs tracking-widest uppercase">
                        <span className="text-gray-500">Talla</span>
                        <button className="text-gray-400 hover:text-black underline decoration-gray-300 underline-offset-4">Guía</button>
                      </div>
                      <div className="grid grid-cols-5 gap-2">
                        {SIZES.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`py-3 text-xs tracking-widest border transition-all duration-300 ${
                              selectedSize === size
                                ? "border-black bg-black text-white"
                                : "border-gray-200 text-gray-500 hover:border-gray-400"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8">
                      <button 
                        onClick={handleAddToCart}
                        className="w-full bg-black text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-gray-900 transition-colors"
                      >
                        Añadir al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
