import { ProductService } from '$lib/services/product-service';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const product = await ProductService.getProductBySlug(params.slug);

        return {
            product
        };
    } catch (err) {
        console.error(`Error fetching product with slug ${params.slug} :`, err);
        error(404, { message: `Product with slug "${params.slug}" not found` });
    }
};
