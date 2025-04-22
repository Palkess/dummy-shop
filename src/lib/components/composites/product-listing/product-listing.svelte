<script lang="ts">
    import type { Product } from '$lib/types/dummy-json-api';
    import ProductPreview from '$lib/components/composites/product-preview/product-preview.svelte';
    import { page } from '$app/state';
    import Modal from '../modal/modal.svelte';
    import { goto, preloadData, pushState } from '$app/navigation';
    import ProductPage from '../../../../routes/products/[slug]/+page.svelte';

    const showModal = async (e: MouseEvent) => {
        if (e.shiftKey || e.ctrlKey || e.metaKey) {
            return; // Allow default behavior for new tab/window
        }

        e.preventDefault();
        e.stopPropagation();

        const { href } = e.currentTarget as HTMLAnchorElement;

        // Preload the page data for the link
        // This will fetch the data for the page without navigating to it
        const pageResult = await preloadData(href);

        if (pageResult.type === 'loaded' && pageResult.status === 200) {
            // Add the product to the history state
            pushState(href, {
                selectedProduct: pageResult.data.product
            });
        } else {
            goto(href);
        }
    };

    /**
     * Navigate back to the previous state when the modal closes.
     */
    const closeModal = () => {
        history.back();
    };

    interface Props {
        products: Product[];
    }

    let { products }: Props = $props();
</script>

{#if page.state.selectedProduct}
    <Modal open={true} onclose={closeModal}>
        <ProductPage data={{ product: page.state.selectedProduct }} />
    </Modal>
{/if}

<ul class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {#each products as product}
        <li>
            <a href="/products/{product.slug}" onclick={showModal}>
                <ProductPreview {product} />
            </a>
        </li>
    {/each}
</ul>
