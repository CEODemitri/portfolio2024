<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar w-full">
			<!-- hamburger icon -->
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
			<div class="mx-2 px-2 w-1/5">
				<a class="flex items-center justify-center" href="/">
					Demitri Echols
					<span class="sr-only">Demitri Echols' Portfolio</span>
				</a>
			</div>
			<div class="hidden flex-none ml-20 bg-slate-800/50 rounded-xl lg:flex w-4/5">
				<ul
					class="menu menu-horizontal flex justify-content items-center uppercase text-xs font-medium"
				>
					<!-- Navbar menu content here -->
					<li>
						<a
							class="hover:underline underline-offset-4 hover:text-white hover:scale-125"
							href="#projects">Work</a
						>
					</li>
					<li>
						<a class="hover:underline hover:text-white hover:scale-125 underline-offset-4" href="/"
							>About</a
						>
					</li>
					<div class="text-4xl">|</div>

					<li>
						<a
							class="hover:underline underline-offset-4 hover:text-white hover:scale-125"
							href="#contact">Behance</a
						>
					</li>
					<li>
						<a
							class="hover:underline underline-offset-4 hover:text-white hover:scale-125"
							href="#contact">Github</a
						>
					</li>

					<li>
						<a
							class="hover:underline underline-offset-4 hover:text-white hover:scale-125"
							href="#contact">Codepen</a
						>
					</li>
				</ul>

				<!-- <svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					{...$$props}
					class="ml-auto"
				>
					<path
						fill="currentColor"
						d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116l8-5.231L19.692 6L12 11L4.308 6L4 6.885z"
					/>
				</svg> -->
				<button
					class="ml-auto justify-self-center hidden lg:block px-6 text-lg uppercase bg-gradient-to-br from-slate-700 to-slate-300 rounded-md text-slate-700 mr-8"
				>
					Menu</button
				>
			</div>
		</div>
	</div>

	<!-- sidebar content -->
	<div class="drawer-side z-50">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul
			class="menu bg-black/60 min-h-full w-80 p-4 backdrop-blur-sm flex gap-8 text-slate-400 uppercase"
		>
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

			<hr class="w-3/5 place-self-center" />

			<li>
				<a
					class="text-sm font-medium hover:underline underline-offset-4"
					href="https://www.behance.net/demitri_echols"
					target="_blank"
				>
					Behance
				</a>
			</li>
			<li>
				<a
					class="text-sm font-medium hover:underline underline-offset-4"
					href="https://github.com/demitri-echols"
					target="_blank"
				>
					Github
				</a>
			</li>
			<li>
				<a
					class="text-sm font-medium hover:underline underline-offset-4"
					href="https://codepen.io/demitri-echols"
					target="_blank"
				>
					Codepen
				</a>
			</li>
		</ul>
	</div>
</div>

<style>
	li > a {
		font-family: 'Josefin Sans Variable', sans-serif;
		letter-spacing: 0.4em;
	}
</style>
