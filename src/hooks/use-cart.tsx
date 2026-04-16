import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/lib/data';

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = sessionStorage.getItem('mercu-cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('mercu-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, size: string) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (i) => i.product.id === product.id && i.size === size
      );
      if (existingItem) {
        return currentItems.map((i) =>
          i.product.id === product.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...currentItems, { product, size, quantity: 1 }];
    });
  };

  const removeItem = (productId: string, size: string) => {
    setItems((currentItems) =>
      currentItems.filter((i) => !(i.product.id === productId && i.size === size))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, isCartOpen, setCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
