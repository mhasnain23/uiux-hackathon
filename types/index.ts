// export interface Product {
//     id: string;
//     name: string;
//     price: number;
//     imageUrl: string;
//     isNew?: boolean;
//     isSale?: boolean;
//     originalPrice?: number;
// }


// types/Product.ts
export interface Product {
    id: string; // Unique identifier for the product
    title: string; // Product title
    price: number; // Product price
    priceWithoutDiscount?: number; // Optional: Price without discount
    badge?: string; // Optional: Badge text
    image?: {
        asset: {
            _ref: string; // Sanity asset reference for the image
            _type: "reference";
        };
    }; // Optional: Product image
    category?: {
        _ref: string; // Reference to the category document
        _type: "reference";
    }; // Optional: Category reference
    description?: string; // Optional: Product description
    inventory?: number; // Optional: Inventory count
    tags?: string[]; // Optional: List of tags (e.g., "featured", "instagram", "gallery")
}

export interface CartItem extends Product {
    quantity: number; // Quantity of the product in the cart
}
