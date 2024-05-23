import auburn from '../images/auburn.jpg';
import klu from '../images/klu.jpg';
import blog from '../images/blog.png';
import bjc from '../images/BJC.png';
import bookstore from '../images/bookstore.png';
import image from '../images/image.png';
import finance from '../images/finance.jpg';
import flag from '../images/flag.jpg';
import todo from '../images/todo.jpg';
import todoweb from '../images/todoweb.png';
import mathgame from '../images/mathgame.jpg';
import git from '../images/git.png';
import postman from '../images/postman.png';
import adobe from '../images/adobe.png';
import figma from '../images/figma.png';

export const Bio = {
    name: "Nihitha Reddy Seelam",
    roles: [
      "Software Engineer",
      "Android Developer",
      "Web Developer",
      "Programmer",
    ],
    description:
      "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    github: "https://github.com/nihitha167",
    resume:
      "https://drive.google.com/file/d/1l5Vzv-AeEhpBcw6jCS2Om2o2jEV44QDH/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/nihitha-reddy-seelam/"
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
        },
        {
          name: "Express Js",
          image:
            "data:image/png;base64,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",
        },
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
        {
          name: "Postgresql",
          image: "https://www.postgresql.org/media/img/about/press/elephant.png",
        },
        {
          name: "Firebase",
          image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        },
      ],
    },
    {
      title: "Android",
      skills: [
        {
          name: "Java",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          name: "Kotlin",
          image:
            "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
        },
        {
          name: "XML",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
        },
        {
          name: "Android Studio",
          image:
            "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:git,
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
        },
        {
          name: "Adobe XD",
          image:adobe,
        },
        {
          name: "Figma",
          image: figma,
        },
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: auburn,
      school: "Auburn University",
      date: "Aug 2022 - May 2024",
      grade: "4/4 GPA",
      desc: "Master of Science in Computer Science and Software Engineering with coursework in Database Systems, Machine Learning, User Design and Interface, Intermediate Statistical Methods for Data Science, Cloud Computing, and Web Development.",
      degree: "Master of Science in Computer Science and Software Engineering",
    },
    {
      id: 1,
      img: klu,
      school: "Koneru Lakshmaiah Education Foundation",
      date: "Jun 2016 - Jun 2020",
      grade: "9.16/10 GPA",
      desc: "Bachelor of Technology in Computer Science and Engineering with coursework in C Programming and Data Structures, Operating Systems, Platform Based Development, Artificial Intelligence, Cloud Computing, Computer Networks, Algorithm Design and Analysis, and Language and Compilers.",
      degree: "Bachelor of Technology in Computer Science and Engineering",
    },
  ];

  export const experiences = [
    {
      id: 0,
      role: "TES - ARC Program Testing Specalist",
      company: "RFID Lab – Auburn University, Auburn, AL",
      date: "May 2024 – Present",
      desc: "In this role, I oversaw and maintained the project database, ensuring data accuracy and reliability. I efficiently managed the receipt, logging, and tracking of packages sent in for validation. I communicated project updates with suppliers and served as the primary point of contact for the student team. Additionally, I conducted quality certification for tag testing and assisted in training incoming employees, ensuring smooth transitions and high standards.",
    },
    {
      id: 1,
      role: "Graduate Assistant",
      company: "RFID Lab – Auburn University, Auburn, AL",
      date: "Apr 2023 – Apr2024",
      desc: "Led data collection and analysis for large-scale RFID deployments, improving communication and decision-making. Utilized RF test equipment for troubleshooting and maintenance, resulting in a 10% rise in customer satisfaction and a 25% decrease in complaints. Promoted to Team Lead for consistent delivery of high-quality reports. Independently conducted research for time-sensitive projects, resulting in a 20% increase in project completion efficiency.",
    },
    {
      id: 2,
      role: "Research Engineer",
      company: "Hyundai Mobis, Hyderabad, India",
      date: "Sep 2020 – Jun 2022",
      desc: "Developed advanced features for USB Music/Video streaming and UI in vehicle infotainment systems. Directed and led the Android application development project, leveraging Java to prioritize mobile development and OOP principles; implemented design patterns.",
    },
  ];

  export const projects = [
    {
        id: 0,
        title: "Beauty and Joy of Computing: An E-learning Website",
        date: "Oct 2023",
        description:
            "Orchestrated the development of an innovative e-learning platform, implementing agile methodology and prioritizing simplicity and optimization. Achieved a 40% reduction in course creation time and increased user engagement by 50%. Utilized HTML, CSS, and JavaScript to develop a user-friendly interface, ensuring a seamless and engaging learning experience.",
        image: bjc,
        tags: [
            "Agile Methodology",
            "HTML",
            "CSS",
            "JavaScript",
            "E-learning"
        ],
        category: "web app",
        github: "https://github.com/nihitha167/BJC",
        webapp: "https://github.com/nihitha167/BJC",
    },
    {
        id: 1,
        title: "Deep Residual Learning for Image Recognition",
        date: "Oct 2022",
        description:
            "Developed a program to recognize images using Residual Networks and the CIFAR-10 dataset. Implemented residual networks to optimize deep neural networks for image recognition tasks, resulting in a 20% reduction in processing time and a 15% increase in accuracy compared to traditional models.",
        image: image,
        tags: [
            "Deep Learning",
            "Residual Networks",
            "Image Recognition",
            "CIFAR-10",
            "Python"
        ],
        category: "programming",
        github: "https://github.com/nihitha167/Deep-residual-learning-for-image-recognition",
        webapp: "https://github.com/nihitha167/Deep-residual-learning-for-image-recognition",
    },
    {
        id: 2,
        title: "Online Bookstore Management System",
        date: "Oct 2022",
        description:
            "Developed a database using MySQL for an online bookstore system. The system maintains information about books, subjects, suppliers, and shippers. Implemented interactive PHP and HTML interfaces to facilitate user interaction with the database, allowing for seamless SQL query submission and retrieval of results, resulting in a 30% increase in user engagement.",
        image: bookstore,
        tags: [
            "MySQL",
            "PHP",
            "HTML",
            "Database Management",
            "Web Development"
        ],
        category: "web app",
        github: "https://github.com/nihitha167/Bookstore-Management-System",
        webapp: "https://github.com/nihitha167/Bookstore-Management-System",
    },
    {
        id: 3,
        title: "Blog Application",
        date: "Feb 2024",
        description:
            "This is a web application built with Node.js and Express.js for creating and viewing blog posts.",
        image:blog,
        tags: [
            "Node js",
            "Express Js",
            "EJS",
            "HTML",
            "CSS",
            "Javascript",
            "Web Development"
        ],
        category: "web app",
        github: "https://github.com/nihitha167/Capstone_project---Blog-application",
        webapp: "https://github.com/nihitha167/Capstone_project---Blog-application",
    },
    {
        id: 4,
        title: "To-do Web Application",
        date: "Apr 2024",
        description:
            "This project is a simple yet effective to-do list application built with Java, Servlets,CSS and XML. It demonstrates key concepts in server-side Java programming, including servlet handling, XML-based data storage, and basic web application architecture",
        image: todoweb ,
        tags: [
            "XML",
            "JSP",
            "HTML",
            "CSS",
            "Javascript",
            "Web Development"
        ],
        category: "web app",
        github: "https://github.com/nihitha167/Todo_WebApplication_Comp6000",
        webapp: "https://github.com/nihitha167/Todo_WebApplication_Comp6000",
    },
    {
        id: 5,
        title: "Personal Finance Tracker",
        date: "Jan 2024",
        description:
            " Personal Finance Tracker is a command-line tool designed to help you manage your income, expenses, and savings goals. It provides a flexible and extensible platform for tracking financial transactions, calculating budgets, and setting savings targets.",
        image: finance,
        tags: [
            "Python",
            "Oops Concepts",
            "Programming"
        ],
        category: "programming",
        github: "https://github.com/nihitha167/Personal_Finance_Tracker",
        webapp: "https://github.com/nihitha167/Personal_Finance_Tracker",
    },
    {
        id: 6,
        title: "To do Android App",
        date: "Feb 2024",
        description:
            " Personal Finance Tracker is a command-line tool designed to help you manage your income, expenses, and savings goals. It provides a flexible and extensible platform for tracking financial transactions, calculating budgets, and setting savings targets.",
        image: todo,
        tags: [
            "Kotlin",
            "Android"
        ],
        category: "android app",
        github: "https://github.com/nihitha167/Todo_Android_App",
        webapp: "https://github.com/nihitha167/Todo_Android_App",
    },
    {
        id: 7,
        title: "Math Game",
        date: "Mar 2024",
        description:
            " Math Game is an Android application designed to help primary school children practice their math skills in a fun and engaging way. The game offers various categories such as addition, subtraction, and multiplication, where users can answer math questions against the clock.",
        image: mathgame,
        tags: [
            "Kotlin",
            "Android"
        ],
        category: "android app",
        github: "https://github.com/nihitha167/Math_Game",
        webapp: "https://github.com/nihitha167/Math_Game",
    },
    {
        id: 8,
        title: "Flag Quiz App",
        date: "Apr 2024",
        description:
            "Flag Quiz is an Android application designed to test users' knowledge of flags from various countries around the world. The app uses SQLite as the database to store flag data and allows users to answer quiz questions based on flag images",
        image: flag,
        tags: [
            "Kotlin",
            "Sql Lite Database",
            "Navigation"
        ],
        category: "android app",
        github: "https://github.com/nihitha167/FlagQuiz_App",
        webapp: "https://github.com/nihitha167/FlagQuiz_App",
    }

];


  export const TimeLineData = [
    { year: 2020, text: "Started my journey" },
    { year: 2021, text: "Research Assitant at Hyundai Mobis" },
    { year: 2022, text: "Computer Science Graduate , Auburn University" },
    { year: 2023, text: "Graduate Assistant at RFID Lab, Auburn University" },
    { year: 2024, text: "TES - ARC Program Testing Specialist at RFID Lab, Auburn University" }
  ];