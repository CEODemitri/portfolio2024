<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar bg-base-300 w-full">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>
			<div class="mx-2 flex-1 px-2">
				<a class="flex items-center justify-center" href="/">
					Demitri Echols
					<span class="sr-only">Demitri Echols' Portfolio</span>
				</a>
			</div>
			<div class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<li>
						<a class="text-sm font-medium hover:underline underline-offset-4" href="/">About</a>
					</li>
					<li>
						<a class="text-sm font-medium hover:underline underline-offset-4" href="#projects"
							>Projects</a
						>
					</li>
					<li>
						<a class="text-sm font-medium hover:underline underline-offset-4" href="#ux-portfolio"
							>UX/UI Portfolio</a
						>
					</li>
					<li>
						<a class="text-sm font-medium hover:underline underline-offset-4" href="#skills"
							>Skills</a
						>
					</li>
				</ul>
			</div>

			<button>Menu</button>
		</div>
	</div>

	<!-- sidebar content -->
	<div class="drawer-side z-50">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<li>
				<a class="text-sm font-medium hover:underline underline-offset-4" href="/">About</a>
			</li>
			<li>
				<a class="text-sm font-medium hover:underline underline-offset-4" href="#projects"
					>Projects</a
				>
			</li>
			<li>
				<a class="text-sm font-medium hover:underline underline-offset-4" href="#ux-portfolio"
					>UX/UI Portfolio</a
				>
			</li>
			<li>
				<a class="text-sm font-medium hover:underline underline-offset-4" href="#skills">Skills</a>
			</li>
		</ul>
	</div>
</div>

<style>
	a {
		font-family: 'Josefin Sans Variable', sans-serif;
	}
</style>
