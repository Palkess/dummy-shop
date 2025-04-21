<script lang="ts">
    import type { Product } from '$lib/types/dummy-json-api';
    import ProductPreview from '$lib/components/composites/product-preview/product-preview.svelte';

    interface Props {
        products: Product[];
    }

    let { products }: Props = $props();
</script>

<ul class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {#each products as product}
        <li>
            <a href="/products/{product.slug}">
                <ProductPreview {product} />
            </a>
        </li>
    {/each}
</ul>
