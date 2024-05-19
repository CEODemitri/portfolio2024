<script>
	import Projects from "../lib/components/Projects.svelte";
  import Section from "../lib/components/Section.svelte";
	import SectionHeader from "../lib/components/SectionHeader.svelte";
  import { onMount } from 'svelte';
  import { Alarm, Bank, CloudMoon, Mortarboard, Hammer } from "svelte-bootstrap-icons";

  // section headers
  const about = {
    sectionTitle: "About Me",
    subheading: "I design creative solutions with the ability to bring to life with Full Stack Development."
  }

  const featured = {
    sectionTitle: "Featured Projects",
    subheading: "A selection of my most recent projects."
  }

  const services = {
    sectionTitle: "Services",
    subheading: "Full Stack Developer with a wide range of skills. I Specialize in designing and coding Web Applications."
  }

  const contact = {
    sectionTitle: "Contact Me",
    subheading: "Let's get in touch!"
  }

  let jobSpace;
  const jobs = ["Creative Developer", "Software Developer", "Father", "UX/UI Designer", "Artist"];

  onMount(() => {
    setInterval(() => {
      switchJob();
    }, 3000);
  });

  function switchJob() {
    jobSpace.innerHTML = jobs[Math.floor(Math.random() * jobs.length)];
  }

</script>


<div class="flex flex-col min-h-[100dvh]">

  <!-- navbar -->
    <header class="bg-eerie-900 text-gray-50 px-4 lg:px-6 h-14 flex items-center">
      <a class="flex items-center justify-center" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <span class="sr-only">Demitri Echols' Portfolio</span>
      </a>
      <nav class="ml-auto flex gap-4 sm:gap-6">
        <a class="text-sm font-medium hover:underline underline-offset-4" href="#">
          UX/UI
        </a>
        <a class="text-sm font-medium hover:underline underline-offset-4" href="#">
          Web
        </a>
        <a class="text-sm font-medium hover:underline underline-offset-4" href="#">
          Software
        </a>
        <a class="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </a>
      </nav>
    </header>

  <!-- body -->
    <main>

  <!-- hero section -->
      <section class="w-full py-12 md:py-24 lg:py-32 bg-[#1A2223] shadow-lg text-gray-50">
        <div class="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Hallo ich bin Demitri.
            </h1>
            <p class="text-gray-300 text-sm md:text-lg h-lg leading-6 h-md"><span bind:this={jobSpace} id="job" class="text-xl bg-teal-800 px-3 py-1 rounded-md underline inline-block -skew-y-3">Creative Developer</span> on a journey exploring the amazing realm of technology. On the learning path for two years in November, I have decided to specialize in Full Stack Web Dev and UI/UX Design. Also skilled with Ruby, Python and NodeJs: I can be impactful for any team. </p>
            <div class="flex flex-col sm:flex-row gap-2">
              <a
                class="inline-flex h-10 items-center justify-center rounded-md bg-[#2978A0] text-gray-950 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                View Work
              </a>
              <a
                class="inline-flex h-10 items-center justify-center rounded-md border border-red-400 bg-transparent px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-50/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-50"
              >
                <rect width="18" height="7" x="3" y="3" rx="1"></rect>
                <rect width="9" height="7" x="3" y="14" rx="1"></rect>
                <rect width="5" height="7" x="16" y="14" rx="1"></rect>
              </svg>
              <span class="text-sm font-medium text-gray-50">UI/UX</span>
            </div>

            <div class="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-50"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span class="text-sm font-medium text-gray-50">Web</span>
            </div>
            
            <div class="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-8 w-8 text-gray-50"
              >
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                <path d="M12 2v2"></path>
                <path d="M12 22v-2"></path>
                <path d="m17 20.66-1-1.73"></path>
                <path d="M11 10.27 7 3.34"></path>
                <path d="m20.66 17-1.73-1"></path>
                <path d="m3.34 7 1.73 1"></path>
                <path d="M14 12h8"></path>
                <path d="M2 12h2"></path>
                <path d="m20.66 7-1.73 1"></path>
                <path d="m3.34 17 1.73-1"></path>
                <path d="m17 3.34-1 1.73"></path>
                <path d="m11 13.73-4 6.93"></path>
              </svg>
              <span class="text-sm font-medium text-gray-50">Software</span>
            </div>
          </div>
        </div>
      </section>

  <!-- projects section -->
      <section class="container py-7 text-gray-100 dark:text-gray-400">
        <div class="grid gap-4 md:gap-8 lg:grid-cols-3 md:px-6">
          
          <Section>
            <div class="px-6">
              <SectionHeader {...featured}/>
            </div>
            <Projects/>
          </Section>
        </div>
      </section>

  <!-- about section -->
      <div class="bg-indigo-500 px-6 py-2 rounded-lg">
        <Section>
          <SectionHeader {...about}/>

          <div class="w-[80%] h-[70%] grid grid-rows-4 grid-cols-2 my-5 font-bold">

            <!-- education -->
            <section class="row-span-4 col-span-1 bg-blue-500 rounded-lg">
              <section class="flex">
                <h3 class="p-1">Education</h3>
                <span class="bg-white p-1 rounded-full" ><Mortarboard/></span>
              </section>
              <ul class="flex flex-col gap-4 mx-2 my-1">
                <li>
                  <h4 class="text-gray-100 text-xs">Nov 2022 - Feb 2023</h4>
                  <p class="text-gray-100 text-sm">Full Stack Development</p>
                  <p class="text-gray-100 text-[0.6rem]">62hr Udemy Course</p>
                </li>
                <li>
                  <h4 class="text-gray-100 text-xs"> Nov 2023 - April 2024</h4>
                  <p class="text-gray-100 text-sm">Full Stack Development</p>
                  <p class="text-gray-100 text-[0.6rem]">+230 LinkedIn Certificates</p>
                </li>
                <li>
                  <h4 class="text-gray-100 text-xs"> Nov 2023 - Current</h4>
                  <p class="text-gray-100 text-sm">UX/UI Design</p>
                  <p class="text-gray-100 text-[0.6rem]">Google Certificate</p>
                </li>
                <li>
                  <h4 class="text-gray-100 text-xs"> Dec 2023 - Current</h4>
                  <p class="text-gray-100 text-sm">Full Stack Cloud Development</p>
                  <p class="text-gray-100 text-[0.6rem]">IBM/edX MicroBachelor Degree</p>
                </li>
              </ul>
            </section>

            <!-- experience -->
            <section class="row-span-2 bg-yellow-600">
              <section class="flex">
                <h3 class="p-1">Experience</h3>
                <span class="bg-white p-1 rounded-full"><Hammer/></span>
              </section>

              <ul class="flex flex-col gap-4 mx-2 my-1">
                <li>
                  <h4 class="text-gray-100 text-xs">Feb 2024 - Current</h4>
                  <p class="text-gray-100 text-sm">Full Stack Development</p>
                  <p class="text-gray-100 text-[0.6rem]">62hr Udemy Course</p>
                </li>
                <li>
                  <h4 class="text-gray-100 text-xs"> Nov 2023 - April 2024</h4>
                  <p class="text-gray-100 text-sm">Full Stack Development</p>
                  <p class="text-gray-100 text-[0.6rem]">+230 LinkedIn Certificates</p>
                </li>
              </ul>
            </section>
            <section class="row-span-2 bg-green-400 text-sm">
              <section class="flex">
                <h3 class="p-1">Goals</h3>
              <span class="inline-block bg-white p-1 rounded-full"><CloudMoon/></span>
              </section>

              <p class="mx-2">Become a Professional Software Developer, assisting launching society into the future.</p>
            </section>
          </div>
        </Section>
      </div>

  <!-- service section -->
      <div class="section p-2 m-5 bg-[#1A2223] rounded-lg text-white">
        <Section>
          <SectionHeader {...services}/>
        </Section>
      </div>

  <!-- contact section -->
      <div class="section p-2 m-5 bg-[#2978A0] rounded-lg text-dark">
        <Section>
          <SectionHeader {...contact}/>

          <div class="h-4/6 w-4/5 bg-red-600 m-auto relative top-20">
          </div>
        </Section>
      </div>

  <!-- footer -->
      <footer class="bg-[#1A2223] p-2 h-[175px] md:h-[300px]">
      </footer>
    </main>
  </div>