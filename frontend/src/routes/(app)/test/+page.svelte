<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { Dropdown, DropdownItem } from '$lib/flowbite-svelte-patch';
  import { ChevronDownSolid, ChevronRightSolid } from 'flowbite-svelte-icons';
import type { Placement } from '@floating-ui/dom';
  let placement: Placement;
      placement = "right-start";
  placement = "right-start"
  console.log(placement)
  // import { page } from '$app/stores';
  // $: activeUrl = $page.url.pathname;
  // let activeClass = 'text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-500';
</script>

<!--<Button>Dropdown button<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>-->
<!--<Dropdown>-->
<!--  <div slot="header" class="px-4 py-2">-->
<!--    <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>-->
<!--    <span class="block truncate text-sm font-medium">name@flowbite.com</span>-->
<!--  </div>-->
<!--  <DropdownItem>Dashboard</DropdownItem>-->
<!--  <DropdownDivider />-->
<!--  <DropdownItem>Settings</DropdownItem>-->
<!--  <DropdownItem>Earnings</DropdownItem>-->
<!--  <DropdownItem slot="footer">Separated link</DropdownItem>-->
<!--</Dropdown>-->

<!--<Button>Dropdown button<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>-->
<!--<Dropdown>-->
<!--  <div slot="header" class="px-4 py-2">-->
<!--    <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>-->
<!--    <span class="block truncate text-sm font-medium">name@flowbite.com</span>-->
<!--  </div>-->
<!--  <DropdownItem>Dashboard</DropdownItem>-->
<!--  <DropdownItem>Settings</DropdownItem>-->
<!--  <DropdownItem>Earnings</DropdownItem>-->
<!--  <DropdownItem slot="footer">Sign out</DropdownItem>-->
<!--</Dropdown>-->

<!--<Button>Dropdown button<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>-->
<!--<Dropdown {activeUrl} {activeClass}>-->
<!--  <DropdownItem href="/">Home</DropdownItem>-->
<!--  <DropdownItem href="/test">Test</DropdownItem>-->
<!--  <DropdownItem href="/about">About</DropdownItem>-->
<!--</Dropdown>-->

<Button>Dropdown button<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
<Dropdown>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem class="flex items-center justify-between">
    Dropdown<ChevronRightSolid class="w-3 h-3 ms-2 text-primary-700 dark:text-white" />
  </DropdownItem>
  <Dropdown placement="right-start">
    <DropdownItem>Overview</DropdownItem>
    <DropdownItem>My downloads</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
  </Dropdown>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>