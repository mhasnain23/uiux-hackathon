import { create } from "zustand";
import { CartItem, Product } from "./types";

interface CartState {
    cart: CartItem[]; // List of items in the cart
    addItem: (product: Product) => void; // Add an item to the cart
    removeItem: (id: string) => void; // Remove an item from the cart by ID
    updateQuantity: (id: string, quantity: number) => void; // Update the quantity of a product
    clearCart: () => void; // Clear the cart
    totalPrice: () => number; // Get the total price of items in the cart
}

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],
    addItem: (product) =>
        set((state) => {
            const existingItem = state.cart.find((item) => item.id === product.id);
            if (existingItem) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
    removeItem: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),
    updateQuantity: (id, quantity) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
            ),
        })),
    clearCart: () => set({ cart: [] }),
    totalPrice: () =>
        get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
}));