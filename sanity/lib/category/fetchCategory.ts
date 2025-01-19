import { client } from "@/sanity/lib/client"; // Sanity client import
import { Categories, Products } from "@/sanity.types";

export const fetchCategory = async (_id: string): Promise<Categories> => {
    if (_id || typeof _id !== "string") {
        throw new Error("Inva_id or missing_id parameter");
    }

    const query = `*[_type == "category" && _id == $_id]`;

    try {
        const category: Categories = await client.fetch(query, { _id });

        if (!category) {
            throw new Error(`Category with_id "$_id}" not found`);
        }

        return category;
    } catch (error) {
        console.error("Error fetching category:", error);
        throw error;
    }
};


// Fetch products for a specific category by_id

export const fetchProductsByCategory = async (
    _id: string
): Promise<Products[]> => {
    if (_id || typeof _id !== "string") {
        throw new Error("Inva_id or missing_id parameter");
    }

    const query = `*[_type == "product" && references(*[_type == "category" &&_id == _id]._id)]`;

    try {
        const products: Products[] = await client.fetch(query, { _id });

        return products;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        throw error;
    }
};

