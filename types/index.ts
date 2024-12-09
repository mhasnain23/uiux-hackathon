export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    isNew?: boolean;
    isSale?: boolean;
    originalPrice?: number;
}