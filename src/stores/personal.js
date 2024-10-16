import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const settingStore = defineStore('settings', {

  state: () => ({
    author: 'Pasquale Capuano',
    name: 'My portfolio',
    year: new Date().getFullYear(),
    jobTitle: 'Software Engineer',
    company: 'Iliad Italia SPA 🚀',
    bio: "I am a Software Engineer with a passion for web and mobile development. I am constantly dedicated to creating effective and aesthetically pleasing solutions, well-designed to meet users' needs. With a particular focus on details and usability, I work to deliver high-quality digital experiences that are both functional and enjoyable to use.",
    socials: [
      { id: 1, name: 'LinkedIn', url: 'https://www.linkedin.com/in/pasqualecapuano/', icon: 'logos:linkedin-icon' },
      { id: 2, name: 'GitHub', url: '', icon: 'logos:github-icon' },
      { id: 3, name: 'Instagram', url: 'https://www.instagram.com/pasqualecapuano/', icon: 'logos:instagram-icon' },
      { id: 4, name: 'Facebook', url: 'https://www.facebook.com/pasqualecapuano', icon: 'logos:facebook' },
      { id: 5, name: 'Email', url: 'mailto:pasqualecapuano91@gmail.com', icon: 'logos:google-gmail' }
    ],
    previousCompanies: [
      {
        id: 1,
        name: 'Iliad Italia SPA',
        role: 'Software Engineer',
        period: '2021 - Present',
        location: 'Milan, Italy',
        description: 'I am currently working as a Software Engineer in the Digital Department of Iliad Italia SPA, the fourth mobile operator in Italy. I am part of the team responsible for the development and maintenance of the company\'s website and mobile application.',
        technologies: [
          {
            name: 'Javascript',
            icon: 'logos:javascript'
          },
          {
            name: 'Typescript',
            icon: 'logos:typescript-icon'
          },
          {
            name: 'Vue.Js',
            icon: 'logos:vue'
          },
          {
            name: 'Nuxt',
            icon: 'logos:nuxt-icon'
          },
          {
            name: 'Vuetify',
            icon: 'logos:vuetifyjs'
          }
        ]
      },
      {
        id: 2,
        name: 'SCS Concept SRL',
        role: 'Software Engineer',
        period: 'February 2024 - May 2024',
        location: 'Milan, Italy',
        description: '',
        technologies: [
          {
            name: 'Javascript',
            icon: 'logos:javascript'
          },
          {
            name: 'Typescript',
            icon: 'logos:typescript-icon'
          },
          {
            name: 'Vue.Js',
            icon: 'logos:vue'
          },
          {
            name: 'Nuxt',
            icon: 'logos:nuxt-icon'
          },
          {
            name: 'Vuetify',
            icon: 'logos:vuetifyjs'
          }
        ]
      },
      {
        id: 3,
        name: 'Nextre Engineer SRL',
        role: 'Front-End Developer',
        period: 'March 2023 - January 2024',
        location: 'Milan, Italy',
        description: '',
        technologies: [
          {
            name: 'Javascript',
            icon: 'logos:javascript'
          },
          {
            name: 'Typescript',
            icon: 'logos:typescript-icon'
          },
          {
            name: 'Vue.Js',
            icon: 'logos:vue'
          },
          {
            name: 'Nuxt',
            icon: 'logos:nuxt-icon'
          },
          {
            name: 'Vuetify',
            icon: 'logos:vuetifyjs'
          }
        ]
      },
    ],

  }),

  actions: {
    setName(newName) {
      this.name = newName
    }
  }
});

