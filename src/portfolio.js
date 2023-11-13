/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nimish Nandwana",
  title: "Hi all, I'm Nimish",
  subTitle: emoji(
    "A lead mobile developer with 7+ years of experience in mobile application development in Android and Flutter frameworks and have released over 50+ apps to the stores."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/11zmYQLJuGf7i-ZWiSpN7nWMTGe_wA0JZ?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nimi0112",
  linkedin: "https://www.linkedin.com/in/nimi0112/",
  gmail: "nimishnandwana@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@nimi0112",
  stackoverflow: "https://stackoverflow.com/users/6549598/nimi0112",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A technology, data and metrics driven senior software engineering leader who can be relied on to inspire and lead teams.",
  skills: [
    emoji(
      "⚡ Develop highly interactive, scalable and design savy mobile applications."
    ),
    emoji("⚡ Develop crossplatform mobile apps for Android and iOS using Flutter and native."),
    emoji(
      "⚡ Integration of third party services such as Firebase, cloud logging and other on the fly error reporting tools."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "gradle",
      fontAwesomeClassname: "fas fa-elephant"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Birla Institute of Technology - Mesra, Ranchi",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "July 2012 - April 2016",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Deutsche Telekom Digital Labs | Gurgaon, Haryana",
      companylogo: require("./assets/images/T-Mobile-logo.png"),
      date: "Dec 2022 - Present",
      desc: "Lead Android Developer, OneTV.",
      descBullets: [
        "Leading the player squad on the set-top box team with more than 10 million monthly active users while collaborating with international teams.",
        "Set up code quality checks via git hooks and in CI using Ktlint and Spotless for proper code formatting.",
        "Optimize CI build pipeline by canceling old builds, using caching, and running parallel jobs resulting in a monthly bill reduction by 60%.",
        "Led refactoring of modules to include DI, test cases, and code coverage via Jacoco in pure Kotlin and reduced bug count by 20%.",
        "Enhanced app launch time from over 5 seconds to 2 seconds. Addressed screen rendering issues, resulting in a smoother user experience by leveraging profiling techniques, particularly benefiting the app's performance on lower-end devices.",
      ]
    },
    {
      role: "Senior Mobile developer (Android and Flutter)",
      company: "Grappus Technologies | Gurgaon, Haryana",
      companylogo: require("./assets/images/grappus.png"),
      date: "Feb 2019 - Dec 2022",
      desc: "Senior Mobile developer",
      descBullets: [
        "Divide the monolithic app module into small feature modules to help teams work independently and reduce build time by 80%.",
        "Lead the revamping of 2 Android and KMP apps with 100+ modules, which decreased the time it took to develop new features by 30%.",
        "Developed bash scripts to be executed in CI for concurrent app releases across multiple channels.",
        "Wrote test cases for ViewModel and KMP use cases to ensure stability."
      ]
    },
    {
      role: "Android developer",
      company: "Wabi Tech | New Delhi",
      companylogo: require("./assets/images/sl.jpeg"),
      date: "June 2017 - Feb 2019",
      desc: "Android developer",
      descBullets: [
        "Having ownership of the feature developed, maintaining documentation of the logic applied and the process followed in flow charts with comments.",
        "Looking into user retention by improving UX and UI to hit the user's sweet spot with some smooth and small animations.",
        "Look into analytics data collected by running various campaigns and translate them into key points to be mentioned to the C.E.O. which further decides the direction and pace of upcoming features."
      ]
    },
    {
      role: "Android developer",
      company: "PickJi | Gurgaon, Haryana",
      companylogo: require("./assets/images/pickji.png"),
      date: "Oct 2016 - June 2017",
      desc: "Android developer",
      descBullets: [
        "Collaborated with the backend team to develop an application with enhanced location services, ensuring seamless integration and functionality.",
        "Innovated strategies to improve user retention by actively seeking guidance from the founders.",
        "Implemented a streamlined parcel booking process, minimizing the number of clicks required.",
        "Proactively gathered feedback from the operations team regarding the application's performance. Acted upon their suggestions and aligned development efforts accordingly."
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
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "nimishnandwana@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "nimish_nandwana", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
