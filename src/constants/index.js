import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  gatsby,
  sass,
  goit,
  leleka,
  uts,
  phonebook,
  bslhelp,
  bookreading,
  utspage,
  filmoteka,
  icecream,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Gatsby",
    icon: gatsby,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full-stack developer (education)",
    company_name: "GoIT",
    icon: goit,
    iconBg: "#383E56",
    date: "May 2022 - September 2022",
    points: [
      "Learned best practices for building responsive and accessible user interfaces using HTML, CSS, and React.",
      "Gained experience with Node.js and Express.js to build server-side applications and RESTful APIs.",
      "Developed proficiency in MongoDB and NoSQL databases, including designing schemas and querying data.",
      "Honed my skills in Git and version control, using it to collaborate with other developers and manage project codebases.",
      "Have implemented security features, such as authentication and authorization, using tools like Passport.js and JSON Web Tokens (JWT).",
    ],
  },
  {
    title: "Trainee front-end developer",
    company_name: "Noble Generous Stork",
    icon: leleka,
    iconBg: "#E6DEDD",
    date: "November 2022 - February 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Rewriting projects from React to Gatsby + Strapi",
    ],
  },
  {
    title: "Front-end developer",
    company_name: "Ukrtimespace",
    icon: uts,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using Gatsby.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Troubleshooting and debugging issues that arise during development and testing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ukrtimespace",
    description:
      "Landing page for booking stream studio",
    tags: [
      {
        name: "gatsby",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: utspage,
    source_code_link: "",
    live_page_link: "https://ukrtimespace-landing-qrqjg.ondigitalocean.app/",
  },
  {
    name: "Noble Generous Stork",
    description:
      "Landing pages about the volunteer fund",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: bslhelp,
    source_code_link: "",
    live_page_link: "https://bslhelp.org.ua/",
  },
  {
    name: "Icecream",
    description:
      "Landing page for an ice cream company with full information about the company's activities.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "htlm",
        color: "pink-text-gradient",
      },
    ],
    image: icecream,
    source_code_link: "https://github.com/YanaKarpliuk/icecream-team-11",
    live_page_link: "https://yanakarpliuk.github.io/icecream-team-11/",
  },
  {
    name: "Filmoteka",
    description:
      "An application for easy movie search, adding and sorting in the user's library.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "htlm",
        color: "pink-text-gradient",
      },
    ],
    image: filmoteka,
    source_code_link: "https://github.com/AndreyHerzhov/Filmoteka",
    live_page_link: "https://andreyherzhov.github.io/Filmoteka/",
  },
  {
    name: "Book Reading",
    description:
      "Web-based platform for storing the user's books list, adding trainings and statistics of readed pages per day.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongobd",
        color: "pink-text-gradient",
      },
    ],
    image: bookreading,
    source_code_link: "https://github.com/AlexanderDmitriev/FinalProjectReact-Node-Front",
    live_page_link: "https://book-reading-43-9.netlify.app/",
  },
  {
    name: "Phonebook",
    description:
      "Single page application for storing and editing the user's contact list.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongobd",
        color: "pink-text-gradient",
      },
    ],
    image: phonebook,
    source_code_link: "https://github.com/nestakiev/phonebook-reactjs",
    live_page_link: "https://nestakiev.github.io/phonebook-reactjs/",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
