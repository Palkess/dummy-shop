import { STATIC_DUMMY_JSON_API_URL } from '$env/static/private';
import type { Product, ProductResponse } from '$lib/types/dummy-json-api';
import type { ProductCache } from '$lib/types/product-cache';
import { slugify } from '$lib/utils/slugify';

// Simple in-memory server cache for the products. In a real-world application, we'd use a more sophisticated caching strategy.
let productCache: ProductCache | undefined = undefined;

const getProductsFromApi = async (): Promise<Product[]> => {
    const response = await fetch(STATIC_DUMMY_JSON_API_URL);

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return ((await response.json()) as ProductResponse).products;
};

export const ProductService = {
    getProducts: async (): Promise<Product[]> => {
        if (productCache === undefined || new Date(productCache.validUntil) < new Date()) {
            // Fetch products from the API and cache them
            console.log('Fetching products from API...');

            const products = await getProductsFromApi();

            productCache = {
                products: products.map((product) => ({ ...product, slug: slugify(product.title) })), // Add slug to each product
                validUntil: new Date(Date.now() + 60 * 60 * 1000).toISOString() // Cache for 1 hour
            };
        }

        return productCache.products;
    },
    clearCache: () => {
        productCache = undefined;
    }
};
