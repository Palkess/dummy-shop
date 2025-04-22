import { ProductService } from '$lib/services/product-service';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
        productPromise: ProductService.getProductsAsync()
    };
};
