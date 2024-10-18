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
        description: 'Development and maintenance of web apps in the Automotive/Aerospace fields (Angular, Bootstrap, CSS, TypeScript, DevExpress)',
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
        description: 'Maintenance and development of web/mobile apps (HTML, CSS, Bootstrap, JavaScript, TypeScript, Angular, Ionic, Firebase, VueJs), development of TV widgets (HTML, CSS, Bootstrap, JavaScript, VueJs), and development of web apps in the banking sector (Angular, XDCE, Bootstrap, CSS, TypeScript).',
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

