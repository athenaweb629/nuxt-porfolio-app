import { LocaleMessageObject } from "vue-i18n";

export const es: LocaleMessageObject = {
   page: {
      topbar: {
         home: "Inicio",
         lang: "Idioma",
         theme: {
            dark: "Oscuro",
            light: "Claro"
         },
         about: "Acerca"
      },
      home: {
         title: "Hace un buen día afuera.",
         description: {
            first: "El brillante y cálido sol. Aire fresco. No será para mí. Hoy no. Todavía tengo cosas que hacer. No sé qué es un typeof.",
            question: "¿Quieres ver mis proyectos?"
         }
      },
      about: {
         title: "Acerca de mí",
         description: "Vivo en España. Soy front-end dev con experiencia en programación. Nada más que decir."
      }
   },
   projects: {
      moon: {
         code: "moon",
         name: "Moon",
         position: "Desarrollador principal",
         description: "Prueba de IRC con Vue. Desarrollo detenido."
      },
      creepland: {
         code: "creepland",
         name: "CreepLand",
         position: "Desarrollador web",
         description: "Servidor de Minecraft en pleno desarrollo.",
         link: "https://discord.gg/wx3eRfU"
      }
   }
}
