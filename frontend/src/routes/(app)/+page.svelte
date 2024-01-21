<script lang='ts'>
	import {
		Avatar,
		Button,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
		DropdownItem,
		ImagePlaceholder,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Skeleton,
		TextPlaceholder
	} from 'flowbite-svelte';
</script>

<div class='relative px-8'>
	<Navbar class='px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b'>
		<NavBrand href='/'>
			<img src='/favicon.png' class='me-3 h-6 sm:h-9' alt='Flowbite Logo' />
			<span class='self-center whitespace-nowrap text-xl font-bold dark:text-white'>Sukolog-ZERO</span
			>
		</NavBrand>
		<div class='flex left-auto md:order-2'>
			<Button size='sm'>Login</Button>
			<Avatar id='avatar-menu' src='/favicon.png' />
			<NavHamburger class1='w-full md:flex md:w-auto md:order-1' />
		</div>
		<Dropdown placement='bottom' triggeredBy='#avatar-menu'>
			<DropdownHeader>
				<span class='block text-sm'>Bonnie Green</span>
				<span class='block truncate text-sm font-medium'>name@flowbite.com</span>
			</DropdownHeader>
			<DropdownItem>Dashboard</DropdownItem>
			<DropdownItem>Settings</DropdownItem>
			<DropdownItem>Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem>Sign out</DropdownItem>
		</Dropdown>
		<NavUl class='flex left-auto md:order-1'>
			<NavLi href='/' active={true}>Home</NavLi>
			<NavLi href='/test'>Test</NavLi>
			<NavLi href='/about'>About</NavLi>
		</NavUl>
	</Navbar>
	<div>
		<Skeleton class='mt-16 mb-8' />
		<ImagePlaceholder class='my-8' />
		<TextPlaceholder class='my-8' />
	</div>
</div>
