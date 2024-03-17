/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tan Hu Soon",
  title: "Hi all, I'm Hu Soon",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1Q7yk8X43gN6q24PYjZNgbBXhOl4n2ip5?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/husoonnn",
  linkedin: "https://www.linkedin.com/in/tan-hu-soon/",
  gmail: "husoon01@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as AWS"
    ),
    emoji(
      "⚡ Integration of CICD tools such as azure pipelines for continuous integration and development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nanyang Technological University",
      logo: require("./assets/images/ntuLogo.png"),
      subHeader: "Bachelor's Degree in Computer Science",
      duration: "August 2019 - June 2023",
      desc: "Specialization in Data Science & Artificial Intelligence.",
      descBullets: [
        "Took courses about Algorithms, Distributed Systems, Operating Systems, Software Engineering, OOP for my Software Engineering skills.",
        "Took courses about Data Mining, Machine Learning, Neural Networks & Deep Learning for my Data Science and AI's Specialisation skills."
      ]
    },
    {
      schoolName: "National Junior College",
      logo: require("./assets/images/njcLogo.png"),
      subHeader: "Science Stream",
      duration: "January 2015 - December 2016",
      desc: "GCE 'A' Levels",
      descBullets: ["H2 in Mathematics, Physics, Chemistry, Econs"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [

    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Developer",
      company: "SAP",
      companylogo: require("./assets/images/sapLogo.png"),
      date: "July 2023 – Present",
      desc: "",
      descBullets: [
        "Engineered Restful web services in FastAPI with ReactJS frontend, significantly enhancing business operations by integrating advanced Generative AI capabilities.",
        "Collaborated closely with the development teams and stakeholders to understand business and user requirements, contributing to team's successful product launch."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "foodpanda",
      companylogo: require("./assets/images/foodpandaLogo.png"),
      date: "June 2022 – September 2022",
      desc: "",
      descBullets: [
        "Developed and optimized Restful web services in Golang, enhancing platform efficiency and scalability.",
        "Executed comprehensive unit testing and developed Load Testing for critical endpoints, ensuring robust software performance.",
      ]
    },
    {
      role: "Product Management Intern",
      company: "Shopee",
      companylogo: require("./assets/images/shopeeLogo.png"),
      date: "December 2021 – May 2022",
      desc: "",
      descBullets:[
        "Supported algorithm enhancements for product ranking and recall, utilizing Postman for A/B testing based on user feedback.",
        "Employed SQL for data analysis, providing insights to inform product development strategies and improve performance metrics.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "foodpanda Pandora Hackathon 2022",
      subtitle:
        "Secured 3rd Place among 32 other teams.",
      image: require("./assets/images/pandoraHackathon.gif"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1Q7yk8X43gN6q24PYjZNgbBXhOl4n2ip5"
        },
      ]
    },
    {
      title: "Shopee Product and Design Challenge 2022",
      subtitle:
        "Achieved Semi-Finalist position. Our team designed a recursive order feature for Shopee Supermarkets, to increase customer retention.",
      image: require("./assets/images/shopeeHackathon.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/ce3f5107-fcf7-4b0e-ab38-317641e753d1/public_url"
        }
      ]
    },

    {
      title: "DSTA BrainHack 2023",
      subtitle: "BrainHack hackathon participant, developed a working prototype to address employee experience problems.",
      image: require("./assets/images/brainhack.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        
      ]
    },
    {
      title: "Shopee Code League 2021",
      subtitle:
        "Achieved Semi-Finalist position.",
      image: require("./assets/images/shopee2021.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1Q7yk8X43gN6q24PYjZNgbBXhOl4n2ip5"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "husoon01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
