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
            <div class="topbar-lang"><ItalicIcon size="1.5x" /> <span> {{ $t('page.topbar.lang') }}</span></div>
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
            if (document.all) document.all[0].lang = 'es';
            break;
         case "es":
            localStorage.setItem('lang', "en");
            Vue.set(this.$root.$i18n, 'locale', "en");
            this.$root.$i18n.locale = "en";
            if (document.all) document.all[0].lang = 'en';
            break;
         default:
            localStorage.setItem('lang', "en");
            Vue.set(this.$root.$i18n, 'locale', "en");
            if (document.all) document.all[0].lang = 'en';
            this.$root.$i18n.locale = "en";
            break;
      }
      console.log(this.$root.$i18n.locale)
   }
}
</script>