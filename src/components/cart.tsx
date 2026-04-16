import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

export function CartDrawer() {
  const { items, isCartOpen, setCartOpen, addItem, removeItem } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={() => setCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white z-50 flex flex-col shadow-2xl border-l border-gray-100"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="font-serif italic text-xl">Carrito</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 -mr-2 text-black hover:text-gray-500 transition-colors"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <ShoppingBag className="w-12 h-12 stroke-[1]" />
                  <p className="text-sm tracking-widest uppercase">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                      <div className="w-24 h-32 bg-gray-50 overflow-hidden">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm font-medium">{item.product.name}</h3>
                            <button 
                              onClick={() => removeItem(item.product.id, item.size)}
                              className="text-gray-400 hover:text-black transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Talla: {item.size}</p>
                          <p className="text-sm mt-2">${item.product.price}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm border border-gray-200 w-fit px-2 py-1">
                          <button 
                            className="text-gray-400 hover:text-black"
                            onClick={() => {
                              if (item.quantity > 1) {
                                // Just a visual decrement, state management for quantity decrement isn't fully implemented in store to keep it simple, we'll just handle remove
                                removeItem(item.product.id, item.size);
                                for (let i=0; i<item.quantity-1; i++) {
                                  addItem(item.product, item.size);
                                }
                              } else {
                                removeItem(item.product.id, item.size);
                              }
                            }}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            className="text-gray-400 hover:text-black"
                            onClick={() => addItem(item.product, item.size)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <div className="flex justify-between mb-6 text-sm">
                  <span className="text-gray-500 uppercase tracking-widest">Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <button 
                  className="w-full bg-black text-white uppercase tracking-widest text-xs py-4 hover:bg-gray-900 transition-colors"
                  onClick={() => setCartOpen(false)}
                >
                  Proceder al pago
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
