import { client } from "@/sanity/lib/client";

export async function fetchCategoryBySlug(slug: string) {
    try {
        const query = `
        *[_type == "categories" && slug.current == $slug]`;

        const category = await client.fetch(query, { slug });

        if (!category) {
            console.error(`Category not found for slug: ${slug}`);
            return null;
        }

        return category;
    } catch (error) {
        console.error(`Error fetching category for slug: ${slug}`, error);
        return null;
    }
}

