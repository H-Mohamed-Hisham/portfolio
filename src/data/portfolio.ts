const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://morganbb104.github.io/HW_20_Portfolio_withReact/",
  title: "< H />",
};

const about = {
  photo: "",
  // all the properties are optional - can be left empty or deleted
  name: "MOHAMED HISHAM",
  role: "Full stack developer",
  description:
    "Web developer with 3+ years of experience who is comfortable working with React, TypeScript, JavaScript, Redux, & responsive web design to deliver exceptional customer experience.",
  resume:
    "https://drive.google.com/drive/folders/12MP3uHk94Ew6_egSJqgxbvycI60gHfXA?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/cheng-chien-huang-912467152/",
    github: "https://github.com/H-Mohamed-Hisham",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Movie Tracker",
    description:
      "As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.",
    stack: [
      "localstorage",
      "Openweather API",
      "Google Map API",
      "Movie Database API",
    ],
    sourceCode: "https://github.com/Mike-C-Sanders/Movie-Tracker",
    livePreview: "https://mike-c-sanders.github.io/Movie-Tracker/",
  },
  {
    name: "Event Planner",
    description:
      "Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.",
    stack: ["swiper.js", "npm", "jawsdb", "handlebars", "express", "nodejs"],
    sourceCode: "https://github.com/Morganbb104/Event_Planner_project2",
    livePreview: "https://obscure-chamber-98928.herokuapp.com/",
  },
  {
    name: "Resource Planner",
    description:
      "Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects",
    stack: ["html-css-javascript", "sequelize", "React"],
    sourceCode: "https://github.com/stone-com/Resource-Planner",
    livePreview: "https://resource-planner-group2.herokuapp.com/",
  },
  {
    name: "GameStoreData(back end)",
    description:
      "GameStoreData is able to let user retrieve the game from database based on its year and category",
    stack: ["Java 8", "MySQL", "React"],
    sourceCode: "https://github.com/stone-com/Resource-Planner",
  },
  {
    name: "Music Store(back end)",
    description:
      "MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label",
    stack: ["html-css-javascript", "sequelize", "React"],
    sourceCode:
      "https://github.com/Morganbb104/M7-project2-musictore-recommendations-Huang_Chengchien",
    livePreview: "https://cheng32-musicstore-catalog.herokuapp.com/track",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "React",
  "TypeScript",
  "JavaScript",
  "MERN",
  "Express",
  "Redux",
  "SASS",
  "Bootstrap",
  "Ant Design",
  "MongoDB",
  "Git",
  "HTML",
  "CSS",
  "Heroku",
  "MySQL",
  "PHP",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "mohamedhishamhaja@gmail.com",
};

const experiences = [
  {
    id: 1,
    organisation: "Ampcome Technologies",
    designation: [
      {
        role: "Tech Lead",
        period: "August 2022 - Present",
      },
      {
        role: "React Developer",
        period: "October 2021 - August 2022",
      },
    ],
    location: "Bangalore, Karnataka",
    icon: "https://res.cloudinary.com/hm-hisham/image/upload/v1663851698/Portfolio/react_rmzcnt.png",
  },
  {
    id: 2,
    organisation: "Mclansys Solutions",
    designation: [
      {
        role: "PHP Developer",
        period: "December 2019 - January 2021",
      },
    ],
    location: "Mayiladuthurai, Tamil Nadu",
    icon: "https://res.cloudinary.com/hm-hisham/image/upload/v1663852458/Portfolio/php_sqxl8m.png",
  },
  {
    id: 3,
    organisation: "Software Cubes",
    designation: [
      {
        role: "Junior .Net Developer",
        period: "January 2018 - May 2018",
      },
    ],
    location: "Chennai, Tamil Nadu",
    icon: "https://res.cloudinary.com/hm-hisham/image/upload/v1663939862/Portfolio/dotnet_osygyh.png",
  },
];

const educations = [
  {
    id: 1,
    degree: "B.Tech Information Technology",
    institute: "SRM University",
    location: "Chennai, Tamil Nadu",
    year: "2013 - 2017",
    logo: "https://static.kabaddiadda.com/images/playerImages/aiiu/7310_SRM_University.png",
  },
];

export { header, about, projects, skills, contact, experiences, educations };
