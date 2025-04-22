<script lang="ts">
    import { ArrowLeftIcon } from '@lucide/svelte';
    import { type PageData } from './$types';
    import { page } from '$app/state';

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();

    let product = data.product;
</script>

{#if !page.state.selectedProduct}
    <a class="mb-8 inline-flex items-center gap-2 text-2xl font-bold" href="/">
        <ArrowLeftIcon />
        Go back
    </a>
{/if}

<div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
    <div class="sm:col-span-4 lg:col-span-5">
        <img
            src={product.thumbnail}
            alt="Image of {product.title}"
            class="aspect-square w-full rounded-lg bg-gray-100 object-cover" />
    </div>
    <div class="sm:col-span-8 lg:col-span-7">
        <h1 class="text-4xl font-bold text-balance text-gray-900 sm:pr-12">{product.title}</h1>

        <section aria-labelledby="information-heading" class="mt-3">
            <h3 id="information-heading" class="sr-only">Product information</h3>

            <p class="text-2xl text-gray-900">${product.price}</p>

            <!-- Reviews -->
            <div class="mt-3">
                <h4 class="sr-only">Reviews</h4>
                <div class="flex items-center">
                    <div class="flex items-center">
                        <!-- Active: "text-gray-400", Inactive: "text-gray-200" -->
                        {#each [1, 2, 3, 4, 5] as rating}
                            <svg
                                class="size-5 shrink-0 {Math.ceil(product.rating) >= rating
                                    ? 'text-gray-400'
                                    : 'text-gray-200'}"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon">
                                <path
                                    fill-rule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                    clip-rule="evenodd" />
                            </svg>
                        {/each}
                    </div>
                    <p class="sr-only">{product.rating} out of 5 stars</p>
                </div>
            </div>

            <div class="mt-6">
                <h4 class="sr-only">Description</h4>

                <p class="text-base text-gray-700">
                    {product.description}
                </p>
            </div>

            <form
                onsubmit={(e) => {
                    e.preventDefault();
                }}
                class="mt-6">
                <div class="mt-6">
                    <button
                        type="submit"
                        class="flex w-full cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none">
                        Add to cart
                    </button>
                </div>
            </form>
        </section>
    </div>
</div>
