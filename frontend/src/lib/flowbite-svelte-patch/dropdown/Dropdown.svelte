<script context="module">export {};
</script>

<script lang='ts'>import { twMerge } from 'tailwind-merge';
import Popper from '../utils/Popper.svelte';
import { setContext } from 'svelte';
import { writable } from 'svelte/store';
const activeUrlStore = writable('');
export let activeUrl = '';
export let open = false;
export let containerClass = 'divide-y z-50';
export let headerClass = 'py-1 overflow-hidden rounded-t-lg';
export let footerClass = 'py-1 overflow-hidden rounded-b-lg';
export let activeClass = 'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900';
let activeCls = twMerge(activeClass, $$props.classActive);
setContext('DropdownType', { activeClass: activeCls });
$: activeUrlStore.set(activeUrl);
setContext('activeUrl', activeUrlStore);
let containerCls = twMerge(containerClass, $$props.classContainer);
let headerCls = twMerge(headerClass, $$props.classHeader);
let ulCls = twMerge('py-1', $$props.class);
let footerCls = twMerge(footerClass, $$props.classFooter);
$: {
    // set default values
    $$restProps.arrow = $$restProps.arrow ?? false;
    $$restProps.trigger = $$restProps.trigger ?? 'click';
    $$restProps.placement = $$restProps.placement ?? 'bottom';
    $$restProps.color = $$restProps.color ?? 'dropdown';
    $$restProps.shadow = $$restProps.shadow ?? true;
    $$restProps.rounded = $$restProps.rounded ?? true;
}
</script>

<Popper activeContent {...$$restProps} class={containerCls} on:show bind:open>
  {#if $$slots.header}
    <div class={headerCls}>
      <slot name="header" />
    </div>
  {/if}
  <ul class={ulCls}>
    <slot />
  </ul>
  {#if $$slots.footer}
    <div class={footerCls}>
      <slot name="footer" />
    </div>
  {/if}
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activeUrl: string = '';
@prop export let open: boolean = false;
@prop export let containerClass: string = 'divide-y z-50';
@prop export let headerClass: string = 'py-1 overflow-hidden rounded-t-lg';
@prop export let footerClass: string = 'py-1 overflow-hidden rounded-b-lg';
@prop export let activeClass: string = 'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900';
-->
