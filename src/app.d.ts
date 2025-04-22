// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Product } from '$lib/types/dummy-json-api';

// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        interface PageState {
            selectedProduct: Product | undefined;
        }
        // interface Platform {}
    }
}

export {};
