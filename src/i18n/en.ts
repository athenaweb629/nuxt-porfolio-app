import { LocaleMessageObject } from "vue-i18n";

export const en: LocaleMessageObject = {
   page: {
      topbar: {
         home: "Home",
         lang: "Lang",
         theme: "Theme",
         about: "About"
      },
      home: {
         title: "Such nice day outside.",
         description: {
            first: "Bright, warm sun. Fresh air. Not for me. Not today. I still got things to do. I don't know what is a typeof.",
            question: "Wanna see my works?"
         }
      },
      about: {
         title: "About me",
         description: "I live in Spain. I'm a front-end developer with some experience on programming. There's nothing to read more about me."
      }
   },
   projects: {
      moon: {
         code: "moon",
         name: "Moon",
         position: "Senior Developer",
         description: "Vue IRC test. Development currently halted."
      },
      creepland: {
         code: "creepland",
         name: "CreepLand",
         position: "Web Developer",
         description: "Minecraft server on heavy development.",
         link: "https://discord.gg/wx3eRfU"
      }
   }
}
