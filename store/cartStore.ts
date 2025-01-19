import { create } from "zustand";
import { Products } from "@/sanity.types";

interface CartItem extends Products {
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    addItem: (product: Products) => void;
    removeItem: (id: string) => void;
    clearCart: (id: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addItem: (product) =>
        set((state) => {
            const existingItem = state.cart.find((item) => item._id === product._id);
            if (existingItem) {
                return {
                    cart: state.cart.map((item) =>
                        item._id === product._id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
    removeItem: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item._id !== id),
        })),
    clearCart: (id: string) => set((state) => ({ cart: state.cart.filter((item) => item._id !== id) })),
}));
