import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Aditya Shinde",
  title: "Full-Stack MERN Developer",
  description: `
Full-Stack MERN Developer with strong expertise in building scalable and responsive web applications.
Skilled in React.js, Node.js, Express.js, and MongoDB with hands-on experience in RESTful API development,
JWT authentication, database management, and performance optimization.

Passionate about clean architecture, UI/UX design, and Agile development practices.
Currently exploring CI/CD pipelines and cloud deployment strategies to enhance application efficiency.
`,
  resumeLink:
    "https://drive.google.com/file/d/1mtcFdGsd9MUm07HRCSY9SfDyJQ-wNHiO/view?usp=drive_link",
};

export const openSource = {
  githubUserName: "itsaditya5511",
};
export const socialLinks: SocialLinksType = {
  email: "mailto:adishinde2008@gmail.com",
  linkedin: "https://www.linkedin.com/in/aditya-shinde-9b8236241/",
  github: "https://github.com/itsaditya5511",
  instagram: "https://www.instagram.com/itsaditya__",
  facebook:
    "https://www.facebook.com/people/Aditya-Shinde/pfbid0hf8UNRMAWjeUTBiTa4Do74wzCZCgvFDzQSL1puhKK4bCvnys6DKPsRidxWS8Lg7cl/",
  twitter: "https://x.com/adityas2300",
};


export const skillsSection: SkillsSectionType = {
  title: "What I Do",
  subTitle: "Full-Stack MERN Developer passionate about building scalable and high-performance web applications",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Building responsive Single-Page Applications (SPA) using React.js"),
        emoji("⚡ Developing RESTful APIs using Node.js & Express.js"),
        emoji("⚡ Implementing authentication using JWT"),
        emoji("⚡ Database management using MongoDB & MySQL"),
        emoji("⚡ Version control and collaboration using Git & GitHub"),
        emoji("⚡ Building responsive static websites using Next.js"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
         {
       skillName: "Nodejs",
    iconifyTag: "logos:nodejs-icon",
  },
  {
    skillName: "Expressjs",
    iconifyTag: "simple-icons:express",
  },
  {
    skillName: "MongoDB",
    iconifyTag: "logos:mongodb-icon",
  },
  {
    skillName: "Java",
    iconifyTag: "logos:java",
  },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo = [
  {
    schoolName: "Kankavli College, Kankavli",
    subHeader: "Bachelor of Computer Science (BCS)",
    duration: "August 2020 - July 2023",
    desc:
      "Completed a three-year undergraduate program specializing in programming, software development, and database systems.",
    grade: "CGPA: 8.76",
    descBullets: [
  "Built academic projects including Cab Driving Management System and Sindhudurg Tourism Management System using ASP.NET.",
  "Developed strong foundation in Core Java, Python, Data Structures, DBMS, and Web Technologies.",
  "Applied software development principles and database integration in practical coursework projects."
    ],
  },
   {
  schoolName: "Finolex Academy of Management & Technology, Ratnagiri",
  subHeader: "Master of Computer Applications (MCA)",
  duration: "August 2023 - July 2025",
  desc:
    "Completed MCA under the University of Mumbai with specialization in advanced software development and enterprise applications.",
  grade: "CGPA: 8.36",
  descBullets: [
    "Studied Advanced Java and Advanced DBMS for enterprise application development.",
    "Developed expertise in Blockchain and decentralized systems with strong foundations in cybersecurity, cryptography, and secure authentication mechanisms.",
    "Worked on API development, deployment practices, and performance optimization."
  ],
}
];
export const projects: ProjectType[] = [
  {
    name: "Job Portal Master",
    desc: "Built a full-stack Job Portal using the MERN stack to manage job postings, user registration, and applications. Developed secure REST APIs with JWT authentication and role-based access control for students, companies, and admin users. Integrated MongoDB for data management, tested APIs using Postman, and designed a responsive React frontend for smooth user experience.",
     image: "/img/jobportal.png",
    github: "https://github.com/itsaditya5511/JOB-PORTAL-master",
    //link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "GETURCAKE",
    desc: "Built a full-stack Job Portal using the MERN stack to manage job postings, user registration, and applications. Developed secure REST APIs with JWT authentication and role-based access control for students, companies, and admin users. Integrated MongoDB for data management, tested APIs using Postman, and designed a responsive React frontend for smooth user experience.",
    image: "/img/cake.png",
    github: "https://github.com/itsaditya5511/GetURCake_Online-cake-oredring",
    //link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },

 ];

export const experience: ExperienceType[] = [
  {
    role: "Trainee Software Developer Intern",
    company: "Aaryak Solutions Private Limited",
    companyLogo: "/img/icons/common/Aaryak.jpg",
    date: "January 2025 - June 2025",
    desc: "Contributed to full-stack web application development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Designed and implemented RESTful APIs, integrated frontend components with backend services, and optimized MongoDB database queries for improved performance. Implemented JWT-based authentication and role-based access control. Participated in Agile development processes, version control using Git, debugging, testing, and deployment of scalable web applications.",
  },
  {
    role: "Trainee Software Developer Intern",
    company: "SevenMentor",
    companyLogo: "/img/icons/common/sevenmentor.jpg",
    date: "July 2025 - January 2026",
    desc: "Developed responsive and dynamic web applications using React.js and Node.js. Built reusable UI components, integrated APIs, and managed data using MongoDB. Assisted in implementing authentication and authorization mechanisms, improved application performance, and followed best practices in software development lifecycle (SDLC). Collaborated with cross-functional teams, performed code reviews, and maintained version control using Git.",
  }
];

export const feedbacks = [
  {
    name: "Professional Collaboration",
    role: "Client",
    feedback:
      "Aditya demonstrates strong technical expertise in MERN stack development and delivers scalable, high-quality solutions.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Aditya Shinde",
  description: greetings.description,
  author: "Aditya Shinde",
  image: "/img/profile.jpg", // change if you have your own image
  url: "http://localhost:3000", // change after deployment
  keywords: [
    "Aditya Shinde",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Express Developer",
    "MongoDB Developer",
    "Full Stack Developer",
    "Portfolio",
  ],
};
