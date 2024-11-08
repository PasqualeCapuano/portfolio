import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const settingStore = defineStore('settings', {

  state: () => ({
    author: 'Pasquale Capuano',
    name: 'My portfolio',
    year: new Date().getFullYear(),
    jobTitle: 'Software Engineer',
    company: 'Iliad Italia SPA 🚀',
    bio: "I am a Software Engineer with a passion for web and mobile development. I am dedicated to consistently creating effective and visually appealing solutions, carefully designed to meet users' needs. With a strong focus on detail and usability, I strive to deliver high-quality digital experiences that are both functional and enjoyable to use.",
    socials: [
      { id: 1, name: 'LinkedIn', url: 'https://www.linkedin.com/in/pasquale-capuano/', icon: 'logos:linkedin-icon' },
      { id: 2, name: 'GitHub', url: 'https://github.com/PasqualeCapuano', icon: 'logos:github-icon' },
      { id: 3, name: 'Instagram', url: 'https://www.instagram.com/the.real.capu/', icon: 'logos:instagram-icon' },
      { id: 4, name: 'Email', url: 'mailto:pasqualecapuano91@gmail.com', icon: 'logos:google-gmail' }
    ],
    previousCompanies: [
      {
        id: 1,
        name: 'Iliad Italia SPA',
        role: 'Software Engineer',
        period: 'June 2024 - Present',
        location: 'Milan, Italy',
        description: 'I am currently working as a Software Engineer in the Digital Department of Iliad Italia SPA, the fourth mobile operator in Italy. I am part of the B2B team responsible for the development and maintenance of a B2B showcase website, web app for new B2B user subscriptions, and a B2B user self-care web app.',
        technologies: [
          {
            name: 'HTML',
            icon: 'logos:html-5'
          },
          {
            name: 'CSS',
            icon: 'logos:css-3'
          },
          {
            name: 'SASS',
            icon: 'logos:sass'
          },
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
          ,
          {
            name: 'Pinia',
            icon: 'logos:pinia'
          },
          {
            name: 'Gitlab',
            icon: 'logos:gitlab'
          },
          {
            name: 'Outlook',
            icon: 'logos:microsoft-teams'
          }

        ],

      },
      {
        id: 2,
        name: 'SCS Concept SRL',
        role: 'Software Engineer',
        period: 'February 2024 - May 2024',
        location: 'Cormano (MI), Italy',
        description: 'Development and maintenance of web apps in the Automotive/Aerospace fields',
        technologies: [
          {
            name: 'HTML',
            icon: 'logos:html-5'
          },
          {
            name: 'CSS',
            icon: 'logos:css-3'
          },
          {
            name: 'SASS',
            icon: 'logos:sass'
          },
          {
            name: 'Javascript',
            icon: 'logos:javascript'
          },
          {
            name: 'Typescript',
            icon: 'logos:typescript-icon'
          },
          {
            name: 'Angular',
            icon: 'logos:angular-icon'
          },
          {
            name: 'Bootstrap',
            icon: 'logos:bootstrap'
          },
          {
            name: 'Jira',
            icon: 'logos:jira'
          },
          {
            name: 'Bitbucket',
            icon: 'logos:bitbucket'
          },
          {
            name: 'Outlook',
            icon: 'logos:microsoft-teams'
          }
        ]
      },
      {
        id: 3,
        name: 'Nextre Engineer SRL',
        role: 'Front-End Developer',
        period: 'March 2023 - January 2024',
        location: 'Milan, Italy',
        description: 'Maintenance and development of web/mobile apps, development of TV widgets, and development of web apps in the banking field.',
        technologies: [
          {
            name: 'HTML',
            icon: 'logos:html-5'
          },
          {
            name: 'CSS',
            icon: 'logos:css-3'
          },
          {
            name: 'SASS',
            icon: 'logos:sass'
          },
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
            name: 'Angular',
            icon: 'logos:angular-icon'
          },
          {
            name: 'Ionic',
            icon: 'logos:ionic-icon'
          },
          {
            name: 'Capacitor',
            icon: 'logos:capacitorjs-icon'
          },
          {
            name: 'Jira',
            icon: 'logos:jira'
          },
          {
            name: 'Bitbucket',
            icon: 'logos:bitbucket'
          },
          {
            name: 'XDCE',
            icon: ''
          },
          {
            name: 'Git',
            icon: 'logos:git-icon'
          },
          {
            name: 'Gitlab',
            icon: 'logos:gitlab'
          },
          {
            name: 'Trello',
            icon: 'logos:trello'
          },
          {
            name: 'Teams',
            icon: 'logos:microsoft-teams'
          }

        ]
      },
      {
        id: 4,
        name: 'Freelance',
        role: 'Web/Mobile developer',
        period: 'January 2020 - February 2023',
        location: 'Milan, Italy',
        description: 'Development of web/mobile apps, design, construction, and maintenance of websites, identifying potential clients and developing proposals based on their needs ',
        technologies: [
          {
            name: 'HTML',
            icon: 'logos:html-5'
          },
          {
            name: 'CSS',
            icon: 'logos:css-3'
          },
          {
            name: 'SASS',
            icon: 'logos:sass'
          },
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
            name: 'Angular',
            icon: 'logos:angular-icon'
          },
          {
            name: 'Flutter',
            icon: 'logos:flutter'
          },
          {
            name: 'Dart',
            icon: 'logos:dart'
          },
          {
            name: 'Wordpress',
            icon: 'logos:wordpress-icon'
          },
          {
            name: 'Github',
            icon: 'logos:github-icon'
          },
          {
            name: 'Git',
            icon: 'logos:git-icon'
          },
          {
            name: 'Trello',
            icon: 'logos:trello'
          },

        ]
      },
    ],
    education: [
      {
        school: 'OPIT - Open Institute of Technology',
        name: 'BSc in Modern Computer Science',
        data: 'September 2023 - Present',
      },
      {
        school: 'ITC Alessandro Volta',
        name: 'Accountant High School Diploma',
        data: 'September 2005 - July 2010',
      }
    ],
    languages: [
      {
        name: 'Italian',
        level: 'Native',
        details: 'Lived 5 years in UK',
        flag: 'flagpack:it'
      },
      {
        name: 'English',
        level: 'Advanced',
        details: 'Lived 5 years in UK',
        flag: 'flagpack:gb-ukm'
      },
      {
        name: 'French',
        level: 'Basic',
        details: 'Lived 10 months in Paris',
        flag: 'flagpack:fr'
      }
    ],
    certificates: [
      { title: 'English B2', institution: 'Duolingo' },
      { title: 'Full-Stack developer', institution: 'Epicode' },
      { title: 'Flutter start course', institution: 'Fudeo' },
      { title: 'Flutter intermediate course', institution: 'fudeo' },
      { title: 'Dart begin', institution: 'Fudeo' }
    ]

  }),

  actions: {
    setName(newName) {
      this.name = newName
    }
  }
});

