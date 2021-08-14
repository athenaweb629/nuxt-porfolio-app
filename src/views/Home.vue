<template>
  <div id="app-content">
    <h1 class="app-header">{{ $t('page.home.title') }}</h1>
    <div class="app-details">
      <p>{{ $t('page.home.description.first') }}</p>
      <p>{{ $t('page.home.description.question') }}</p>
    </div>
    <div class="projects-container">
      <!--<div class="axhl-project moon-project">
        <div class="axhl-project-details">
          <h1 class="app-header">Moon <span class="project-position">━ Developer</span></h1>
          <span class="project-description">Vue IRC test. Development currently halted.</span>
        </div>
      </div>
      <div class="axhl-project creepland-project">
        <div class="axhl-project-details">
          <h1 class="app-header"><a href="https://discord.gg/wx3eRfU">CreepLand</a> <span class="project-position">━ Web Developer</span></h1>
          <span class="project-description">Minecraft server. Currently web developer.</span>
        </div>
      </div>-->
      
      <div v-for="project in projects" :class="`axhl-project ${project.code}-project`">
        <div class="axhl-project-details">
          <h1 class="app-header">
            <a v-if="project.link" :href="$t(`projects.${project.code}.link`)">{{ $t(`projects.${project.code}.name`) }}</a>
            <span v-else>{{ $t(`projects.${project.code}.name`) }}</span>
            <span class="project-position"> ━ {{ $t(`projects.${project.code}.position`) }}</span>
          </h1>
          <span class="project-description">{{ $t(`projects.${project.code}.description`) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Home extends Vue {
  projects: object = {
    moon: {
      code: "moon",
      name: "Moon"
    },
    creepland: {
      code: "creepland",
      name: "CreepLand",
      link: "https://discord.gg/wx3eRfU"
    }
  }
}
</script>