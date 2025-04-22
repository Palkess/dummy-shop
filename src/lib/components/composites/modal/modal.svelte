<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
        onclose: () => void;
        dialogElement?: HTMLDialogElement;
        open?: boolean;
    }

    let { children, onclose, dialogElement = $bindable(), open = $bindable() }: Props = $props();

    $effect(() => {
        if (dialogElement) {
            // Not binding the 'open' property to the dialog element so we can use the .showModal() and .close() methods, enabling us to use the dialog as a modal.
            if (open) {
                dialogElement.showModal();
            } else {
                dialogElement.close();
            }
        }
    });
</script>

<dialog
    class="modal"
    bind:this={dialogElement}
    onclose={() => {
        onclose();
        open = false;
    }}>
    <div class="modal-box md:w-full md:max-w-[700px]">
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button>
        </form>
        {@render children()}
    </div>

    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
