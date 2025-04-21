<script lang="ts">
    import type { Product } from '$lib/types/dummy-json-api';

    interface Props {
        product: Product;
    }

    let { product }: Props = $props();
</script>

<article class="group relative">
    <div class="aspect-square w-full overflow-hidden rounded-md border border-gray-200">
        <img
            src={product.thumbnail}
            alt="Image of {product.title}"
            class="aspect-square w-full object-cover transition-all group-hover:scale-110" />
    </div>

    <div class="mt-4 flex justify-between gap-2">
        <div>
            <h3 class="text-sm text-gray-700">
                {product.title}
            </h3>
            <p class="mt-1 text-sm text-gray-500">{product.brand || 'Dummy Shop'}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">${product.price}</p>
    </div>
</article>
