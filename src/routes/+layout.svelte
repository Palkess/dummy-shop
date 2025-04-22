<script lang="ts">
    import Header from '$lib/components/composites/header/header.svelte';
    import '../app.css';

    let { children } = $props();
</script>

<Header />

<main class="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
    {@render children()}
</main>
