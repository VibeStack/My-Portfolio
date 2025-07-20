import htmlLogo from '/tech_logo/html.png';
import cssLogo from '/tech_logo/css.png';
import sassLogo from '/tech_logo/sass.png';
import javascriptLogo from '/tech_logo/javascript.png';
import reactjsLogo from '/tech_logo/reactjs.png';
import reduxLogo from '/tech_logo/redux.png';
import nextjsLogo from '/tech_logo/nextjs.png';
import tailwindcssLogo from '/tech_logo/tailwindcss.png';
import nodejsLogo from '/tech_logo/nodejs.png';
import expressjsLogo from '/tech_logo/express.png';
import mysqlLogo from '/tech_logo/mysql.png';
import mongodbLogo from '/tech_logo/mongodb.png';
import cLogo from '/tech_logo/c.png';
import cppLogo from '/tech_logo/cpp.png';
import javaLogo from '/tech_logo/java.png';
import pythonLogo from '/tech_logo/python.png';
import typescriptLogo from '/tech_logo/typescript.png';
import gitLogo from '/tech_logo/git.png';
import githubLogo from '/tech_logo/github.png';
import vscodeLogo from '/tech_logo/vscode.png';
import postmanLogo from '/tech_logo/postman.png';
import mcLogo from '/tech_logo/mc.png';
import figmaLogo from '/tech_logo/figma.png';
import netlifyLogo from '/tech_logo/netlify.png';
import latexLogo from '/tech_logo/latex.png';
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Latex', logo: latexLogo },
    ],
  },
];

export const myLearnedTech = [
  "javascript",
  "react.js",
  "node.js",
  "express.js",
  "mongoDB",
  "mongoose",
  "html",
  "css",
  "sass",
  "tailwind",
  "git",
  "github",
  "terminal",
  "java",
  "mysql",
];
export const aboutToolTips = [
  {
    tech: "MongoDB",
    img: "/img/mongoDB.svg",
    symbol: "M",
    textColor: "#499e49",
  },
  {
    tech: "Express.JS",
    img: "/img/express.svg",
    symbol: "E",
    textColor: "#fff",
  },
  {
    tech: "React.JS",
    img: "/img/react.svg",
    symbol: "R",
    textColor: "#64dcf5",
  },
  {
    tech: "Node.JS",
    img: "/img/node.svg",
    symbol: "N",
    textColor: "#8dc154",
  },
];
export const clientReviewData = [
  {
    clientName: "Dr. Kapil Sharma",
    clientPosition: "Assistant Professor, GNDEC",
    clientImg: "/img/kapilSirPic.jpeg",
    clientReview: `Arshdeep Anand is an extremely dedicated student who consistently excels in all tasks. His ability to quickly understand complex concepts and his willingness to assist others set him apart. Arshdeep is also an accomplished coder, often referred to as an "Einstein coder," showcasing strong technical skills. He is reliable, always available to support his peers, and demonstrates a deep knowledge of his subjects. Beyond his academic and technical strengths, Arshdeep is a humble and respectful individual. His positive attitude and strong work ethic ensure continued success in all his endeavors.`,
  },
];
export const latestWorksCollection = [
  {
    key: crypto.randomUUID(),
    websiteLink: "https://countries-detailed-information-a.netlify.app/",
    websiteImg: "/img/country-api.png",
    websiteName: "Country API",
    shortDisc: "Global Data",
    longDisc:
      "CountryAPI offers a comprehensive platform for accessing detailed global information, seamlessly integrating into applications",
    techUsed: ["html", "css", "react.js", "javascript", "parcel"],
    imgPosition: "left",
  },
  {
    key: crypto.randomUUID(),
    websiteLink: "https://conference-ticket-generator-a.netlify.app/",
    websiteImg: "/img/conference-ticket-generator.png",
    websiteName: "Conference Ticket Generator",
    shortDisc: "Ticket Generator",
    longDisc:
      "TicketGen is an innovative EdTech platform that simplifies conference ticket creation with a responsive interface. It delivers seamless ticket design and management.",
    techUsed: ["html", "css", "javascript"],
    imgPosition: "right",
  },
  {
    key: crypto.randomUUID(),
    websiteLink: "https://focus-on-today-a.netlify.app/",
    websiteImg: "/img/focus-on-today.png",
    websiteName: "Focus On Today",
    shortDisc: "Task Manager",
    longDisc:
      "FocusOnToday is a dynamic platform for adding, tracking, and locking tasks with a user-friendly interface. It streamlines task management and completion tracking.",
    techUsed: ["html", "css", "javascript"],
    imgPosition: "left",
  },
];
