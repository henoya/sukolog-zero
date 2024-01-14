<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavUl>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/test">Test</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
</Navbar>
<div class='relative px-8'>
	<Navbar class='px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b'>
		<NavBrand href='/'>
			<!--      <img src="/images/sukolog-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />-->
			<span class='self-center whitespace-nowrap text-xl font-bold dark:text-white'>Sukolog-ZERO</span>
		</NavBrand>
		<div class='flex items-center md:order-2'>
			<!--			<Button size='sm'>Login</Button>-->
			<Avatar id='avatar-menu' src='/favicon.png' />
			<NavHamburger class1='w-full md:flex md:w-auto md:order-1' />
		</div>
		<Dropdown placement='bottom' triggeredBy='#avatar-menu'>
			<DropdownHeader>
				<span class='block text-sm'>Bonnie Green</span>
				<span class='block truncate text-sm font-medium'>name@flowbite.com</span>
			</DropdownHeader>
<!--			<DropdownItem>Dashboard</DropdownItem>-->
<!--			<DropdownItem>Settings</DropdownItem>-->
<!--			<DropdownItem>Earnings</DropdownItem>-->
<!--			<DropdownDivider />-->
<!--			<DropdownItem>Sign out</DropdownItem>-->
		</Dropdown>
		<NavUl>
			<NavLi href='/' active={true}>Home</NavLi>
			<NavLi href='/about'>About</NavLi>
		</NavUl>
	</Navbar>
</div>
