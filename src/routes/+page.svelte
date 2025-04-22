<script lang="ts">
    import ProductListing from '$lib/components/composites/product-listing/product-listing.svelte';
    import { type PageData } from './$types';

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
</script>

<h1 class="mb-8 text-5xl font-bold">Products</h1>

{#await data.productPromise}
    <p>Loading...</p>
{:then products}
    <ProductListing {products} />
{:catch error}
    <p>Error: {error.message}</p>
{/await}
