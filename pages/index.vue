<template>
  <div id="phb__home" class="p-24 flex-col w-screen h-screen flex justify-center items-center">
    <logo text="So, what's up, lad?" />
    <div class="mt-2 md:mt-6 md:w-1/2 w-full">
      <p class="text-sm text-gray-400 md:text-xl font-400">
        Welcome to Phoebe UI. More information coming soon.
        tl;dr: really lazy to give more info, my bad.
      </p>
    </div>
    <Social />
    <div id="phb__lang" class="absolute top-5 left-5 cursor-not-allowed flex flex-row items-center">
      <svg
        class="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0)">
          <path d="M1.41801 15.0156C1.41801 15.0156 8.33833 8.71569 9.77722 4.17959L1.418 4.17959" stroke="currentColor" stroke-linecap="round" />
          <path d="M3.58521 6.6564C3.58521 6.6564 4.19645 8.85059 5.75242 10.3716C7.30839 11.8926 10.3964 12.2292 10.3964 12.2292" stroke="currentColor" stroke-linecap="round" />
          <path d="M1 4.17999L11 4.17999" stroke="currentColor" stroke-linecap="round" />
          <line
            x1="6"
            y1="3.51508"
            x2="6"
            y2="2.50001"
            stroke="currentColor"
            stroke-linecap="round"
          />
          <path d="M11.7483 16.1042L14.2483 16.1042L16.7483 16.1042" stroke="currentColor" stroke-linecap="round" />
          <path d="M10 18.9421L14.7483 9.10419" stroke="currentColor" stroke-linecap="round" />
          <path d="M18.2483 18.6042L14.7483 9.10424" stroke="currentColor" stroke-linecap="round" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="24" height="24" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
      <!-- <span class="text-sm select-none">ES</span> -->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Index',
  head () {
    return {
      title: 'home'
    }
  }
}
</script>
