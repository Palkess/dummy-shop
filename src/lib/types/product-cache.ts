import type { Product } from './dummy-json-api';

export interface ProductCache {
    products: Product[];
    validUntil: string; // ISO date string
}
