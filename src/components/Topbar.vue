<template>
   <div id="topbar">
      <span class="topbar-header">aexhell.</span>
      <div class="topbar-options">
         <div class="topbar-icon">
            <div class="topbar-home">
               <router-link to="/"><HomeIcon size="1.5x" /> <span>{{ $t('page.topbar.home') }}</span></router-link>
            </div>
         </div>
         <div class="topbar-icon">
            <div class="topbar-home">
               <router-link to="/about"><AlertCircleIcon size="1.5x" /> <span>{{ $t('page.topbar.about') }}</span></router-link>
            </div>
         </div>
         <div class="topbar-icon">
            <div class="topbar-twitter"><a href="https://twitter.com/aexhell"><TwitterIcon size="1.5x" /> <span>Twitter</span></a></div>
         </div>
         <div class="topbar-icon">
            <div class="topbar-github"><a href="https://github.com/aexhell"><GithubIcon size="1.5x" /> <span>GitHub</span></a></div>
         </div>
         <div class="topbar-icon" v-on:click="changeLang">
            <div class="topbar-lang">
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 21" fill="none">
                  <g clip-path="url(#clip0)">
                     <path d="M1.41801 15.0156C1.41801 15.0156 8.33833 8.71569 9.77722 4.17959L1.418 4.17959" stroke="currentColor" stroke-linecap="round"/>
                     <path d="M3.58521 6.6564C3.58521 6.6564 4.19645 8.85059 5.75242 10.3716C7.30839 11.8926 10.3964 12.2292 10.3964 12.2292" stroke="currentColor" stroke-linecap="round"/>
                     <path d="M1 4.17999L11 4.17999" stroke="currentColor" stroke-linecap="round"/>
                     <line x1="6" y1="3.51508" x2="6" y2="2.50001" stroke="currentColor" stroke-linecap="round"/>
                     <path d="M11.7483 16.1042L14.2483 16.1042L16.7483 16.1042" stroke="currentColor" stroke-linecap="round"/>
                     <path d="M10 18.9421L14.7483 9.10419" stroke="currentColor" stroke-linecap="round"/>
                     <path d="M18.2483 18.6042L14.7483 9.10424" stroke="currentColor" stroke-linecap="round"/>
                  </g>
                  <defs>
                     <clipPath id="clip0">
                        <rect width="24" height="24" fill="currentColor"/>
                     </clipPath>
                  </defs>
               </svg>
               <span> {{ $t('page.topbar.lang') }}</span>
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { HomeIcon, TwitterIcon, GithubIcon, ItalicIcon, MoonIcon, AlertCircleIcon } from 'vue-feather-icons';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HomeIcon,
    TwitterIcon,
    GithubIcon,
    ItalicIcon,
    MoonIcon,
    AlertCircleIcon
  }
})

export default class Topbar extends Vue {
   changeLang (): void {
      switch(this.$root.$i18n.locale) {
         case "en":
            localStorage.setItem('lang', "es");
            Vue.set(this.$root.$i18n, 'locale', "es");
            this.$root.$i18n.locale = "es";
            document.documentElement.lang = "es";
            break;
         case "es":
            localStorage.setItem('lang', "en");
            Vue.set(this.$root.$i18n, 'locale', "en");
            this.$root.$i18n.locale = "en";
            document.documentElement.lang = "en";
            break;
         default:
            localStorage.setItem('lang', "en");
            Vue.set(this.$root.$i18n, 'locale', "en");
            this.$root.$i18n.locale = "en";
            document.documentElement.lang = "en";
            break;
      }
   }
}
</script>
