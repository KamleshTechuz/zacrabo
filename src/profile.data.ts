// profile image
import profileImg from './assets/images/profile.JPEG'

// school collge images
import collegeImg from './assets/images/educat/college1.JPEG';
import schoolImg from './assets/images/educat/school1.JPEG';

// images for projects
import tutorac from './assets/images/projects/tutorac.JPEG'
import tutorac_res from './assets/images/projects/tutorac_res.JPEG'
import getlitt from './assets/images/projects/getlitt.JPEG'
import getlitt_res from './assets/images/projects/getlitt_res.JPEG'
import employee from './assets/images/projects/employee.JPEG'
import emp_res from './assets/images/projects/emp_res.JPEG'
import portfolio from './assets/images/projects/portfolio.JPEG'
import portfolio_res from './assets/images/projects/portfolio_res.JPEG'
import qkart from './assets/images/projects/qkart.JPEG'
import qkart_res from './assets/images/projects/qkart_res.JPEG'

export const PERSON = {
  first_name: "Kamlesh",
  last_name: "Mundel",
  age: 23,
  number: "+91 779-099-7718",
  email: "kamleshmundel18@gmail.com",
  image: profileImg,
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
    college: [
      {
        name: "Jodhpur Institute Of Engineering & Technology",
        degree: "Bachelor Of Technology",
        field: "Electronics & Communication Engineering",
        year: "2018-2022",
        status: "Completed",
        image: collegeImg
      }
    ],
    school: [
      {
      name: "Shree Vageeshwaree Vidhya Mandir",
      degree: "12th",
      field: "Physics, Chemistry & Maths",
      year: "2016-2017",
      status: "Completed",
      image: schoolImg
    }, {
      name: "Shree Vageeshwaree Vidhya Mandir",
      degree: "10th",
      field: "Board of Secondary Education, Rajasthan",
      year: "2014-2015",
      status: "Completed",
      image: schoolImg
    }]
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
      res_img: tutorac_res,
      category: [3, 4], // ANGULAR + NODE
      links: {
        view: "https://tutorac.com/",
        code: ""
      }
    },
    {
      name: "Portfolio web site",
      desc: "Modern resume pattern using react | content about person like education, skills, experience and etc.",
      image: portfolio,
      res_img: portfolio_res,
      category: [1], // REACT
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
      res_img: getlitt_res,
      category: [3, 4], // ANGULAR + NODE
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
      res_img: emp_res,
      category: [3, 4], // ANGULAR + NODE
      links: {
        view: "",
        code: ""
      }
    },
    {
      name: "Q-Kart",
      desc: `Q-Kart is an E-Commerce wesite on which a lot of electronics gadgets are available at very low cost.
      It delivers dreams to the doors. Here it has seasonal sale to let the people enjoy the festivals and joyful.
      NextJs is used to develop Q-Kart and Sanity-Studeio is used as data storage and manager. Stripe is use as payment gateway.`,
      image: qkart,
      res_img: qkart_res,
      category: [2], // NEXTJS
      links: {
        view: "https://qkart.vercel.app/",
        code: "https://github.com/myqkart/qkart"
      }
    },
  ]
  
};
