// images for projects
import tutorac from './assets/images/projects/tutorac.png'
import getlitt from './assets/images/projects/getlitt.png'
import employee from './assets/images/projects/employee.png'
import portfolio from './assets/images/projects/portfolio1.PNG'

export const PERSON = {
  first_name: "Kamlesh",
  last_name: "Mundel",
  age: 23,
  number: "+91 779-099-7718",
  email: "kamlesh@techuz.com",
  current_place: {
    city: 'Ahmedabad',
    country: 'India',
    pincode: '380060'
  },
  social_url: {
    linkedIn: 'https://www.linkedin.com/in/kamlesh-mundel-88b7401a1/',
    gitHub: 'https://github.com/KamleshTechuz/',
    insta: 'https://www.instagram.com/kamlesh_9162/',
    facebook: 'https://www.facebook.com/kamlesh.mundel.79/',
  },
  education: {
    college: {
      name: "Jodhpur Institute Of Engineering & Technology",
      degree: "Bachelor Of Technology",
      field: "Electronics & communication Engineering",
      year: "2018-2022",
      status: "Completed",
    },
    school: {
      name: "Shree Vageeshwaree Vidhya Mandir",
      degree: "12th",
      field: "Physics, Chemistry & Maths",
      year: "2016-2027",
      status: "Completed",
    },
  },
  about: `I am a Full-Stack developer based in Ahmedabad, India. I am undergraduate from Jodhpur Institute Of Engineering & Technology.
  Currently working at Techuz Infoweb PVT LTD. I am very passionate about improving my coding skills & developing applications & websites.
  I build WebApps and Websites using MERN & MARN Stack. Love to build Full-Stack EdTech, portfolios, E-commerce websites and clones.`,
  current_role: 'Full Stack Developer',
  skills: [
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    }, {
      name: "ExpressJS",
      icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
    }, {
      name: "NodeJS",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    }, {
      name: "Redux",
      icon: "https://img.icons8.com/color/48/000000/redux.png",
    }, {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    }, {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    }, {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    }, {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    }, {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
    }, {
      name: "C++",
      icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    }, {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    }, {
      name: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    }, {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/color/48/000000/postgreesql.png",
    }, {
      name: "AWS",
      icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    }, {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
    },
  ],
  experience : [
    {
        company_name: 'Techuz Infoweb PVT LTD',
        role: 'Jr. Software Developer',
        join_from: 'July 2022',
        till: 'Present'
    }, {
        company_name: 'Techuz Infoweb PVT LTD',
        role: 'Software Trainee',
        join_from: 'January 2022',
        till: 'June 2022'
    }
  ],
  projects: [
    {
      name: "Tutorac",
      desc: `Tutorac is an online learning platform providing video courses and live entrance exam practice tests for
      classes 11 and 12. It offers cinematic video courses aided by 3D visuals to help students learn better. We
      designed and developed the entire platform from the ground up. Key features of the platform include
      rendering 4k video lessons, integrated quizzes and resources, live exam prep tests, and a student-teacher
      doubt clarification module.`,
      image: tutorac,
      category: 1, // MEAN
      links: {
        view: "https://tutorac.com/",
        code: ""
      }
    },
    {
      name: "Portfolio web site",
      desc: "Modern resume pattern using react | content about person like education, skills, experience and etc.",
      image: portfolio,
      category: 2, // MERN
      links: {
        view: "https://kamlesh-mundel.netlify.com/",
        code: "https://github.com/KamleshTechuz/zacrabo"
      }
    },
    {
      name: "Getlitt!",
      desc: `GetLitt! is a gamified book reading and e-learning platform aimed to develop reading habits among
      children. It has a massive digital library of books across different genres like adventure, wildlife, science,
      biographies, fantasy, environment, humor, fairy tales, mystery and non-fiction. The entire platform is
      gamified with game mechanics and dynamics to make learning an enjoyable experience. It also organizes
      national and international-level reading olympiad for kids. Recently, it was also selected for a startup
      accelerator funding program.`,
      image: getlitt,
      category: 1, // MEAN
      links: {
        view: "http://www.getlitt.co/",
        code: ""
      }
    },
    {
      name: "Employee recognition",
      desc: `Employee recognition is an platform to maintain employees data like working hours, leaves, efficiency,
      activity, performance and declares the best performer of the month, employee of the month, emerging
      employee of the month and best leader.`,
      image: employee,
      category: 1, // MARN
      links: {
        view: "",
        code: ""
      }
    },
  ]
  
};
