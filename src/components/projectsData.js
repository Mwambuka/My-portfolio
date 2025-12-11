const myProjects = [
    {
        id:"01",
        image: "/images/project1.png",
        title: "End-to-End Machine Learning Pipeline for Anomaly Detection",
        description:
          "Developed a modular ML system that detects real-time anomalies in system logs using Random Forest and Autoencoders. Created RESTful API endpoints for inference and integrated model deployment into a Flask-based microservice. Achieved 92% precision and 87% recall on unseen log anomaly datasets. Implemented version control and CI/CD workflows with GitHub Actions.",
        technology: "Python, scikit-learn, TensorFlow, Flask, Nginx, GitHub Actions",
        source: "https://github.com/Mwambuka"
      },
    {
        id:"02",
        image: "/images/project2.png",
        title: "C++ Memory Management Simulator",
        description:
          "Built a simulator for dynamic memory allocation in C++ mimicking malloc(), free(), and garbage collection principles. Used STL containers and smart pointers to implement custom memory pools with defragmentation logic. Instrumented extensive unit tests with memory leak tracing using Valgrind. Improved memory access speed by 25% compared to naive heap management approaches.",
        technology: "C++, GDB, Valgrind, STL",
        source: "https://github.com/Mwambuka"
      },
    {
        id:"03",
        image: "/images/project3.png",
        title: "Fyyar App",
        description:
          "Implemented the data models to power the API endpoints for the website by connecting to a PostgresSQL database for storing, querying, and creating information about artists and venues on the website.",
        technology: "Postgres, Python, Flask, javaScript, SQLalchemy, ReactJs",
        source: "https://github.com/Mwambuka/data-models"
      },
      {
        id:"04",
        image: "/images/project4.png",
        title: "Trivia Full-Stack App",
        description:
          "Implemented CRUD operation where employees can have the ability to add, delete, Search, display the details of any question, and play quiz games, randomizing either all questions or specific",
        technology: "Postgres, Python, Flask, javaScript, SQLalchemy",
        source: "https://github.com/Mwambuka/trivia-api-app"
      },
      {
        id:"05",
        image: "/images/project5.PNG",
        title: "Coffee Shop full Stack",
        description:
          "Created a Full-stack drink menu application that can allow users only to get all the drink coffee that is available, while the manager can add, edit, and delete the drink coffee. Implemented using AuthO to give them permission.",
        technology: "Postgres, Python, Flask, javaScript, SQLalchemy, Angular, AuthO",
        source: "https://github.com/Mwambuka/coffee-shop-app"
      },
      {
        id:"06",
        image: "/images/project4.png",
        title: "Deploying a Flask API",
        description:
          "Deploy a Flask API App to a Kubernetes cluster using Docker, AWS EKS, CodePipeline, and CodeBuild.",
        technology: "Docker, Kubernets, AWS, EKS, CodePipeline, CodeBuild, Postgres, Python, Flask, javaScript, SQLalchemy",
        source: "https://github.com/Mwambuka/deploying-flask",
      },
    {
      id:"07",
      image: "/images/project5.PNG",
      title: "Punk API Beer App",
      description:
        " A simple Bear App built with JavaScript using Punk API, It also show you if the Beer is available or not, I style it using normal styling though it looks like simple but amazing when going through it",
        technology: "javaScript, Api, CSS, HTML5 ",
      source: "https://github.com/Mwambuka/beer-application",
      demoLink: "https://punkbeerapp.netlify.app/",
    },
    {
      id:"08",
      image: "/images/project6.PNG",
      title: "Movies Search App",
      description:
        "It is a simple application named Movies App, built with Ract.js using TMDb API that will helps you to find your favourate  latest movies, and some information about it like date of releasing and so on",
        technology: "ReactJS, javaScript, Api, CSS",
      source: "https://github.com/Mwambuka/react-movie-app",
      demoLink: "https://codewithbilal.github.io/react-movie-search-app/",
    },
    {
      id:"09",
      image: "/images/project7.PNG",
      title: "PicSome",
      description:
        " It is an e-Commance picture gallery even though is a Frontend application I added some functionallity that helps user to add his favourate fix on his card in simple way, built with React.js and React-Router using unsplash API",
        technology: "ReactJS, javaScript, Api, CSS",
      source: "https://github.com/Mwambuka/react-picsome",
     // demoLink: "https://CodeWithBilal.github.io/picsome/",
    },
    {
      id:"10",
      image: "/images/project8.PNG",
      title: "Robo Friends",
      description:
        "Robo Friends is a mini application that helps you to find Robots of you choice I created and design it using React.js, during my Fullstack Course on Udemy I used Rorotic APi styled with tachyons predefined CSS",
        technology: "ReactJS, javaScript, Api, tachyons CSS",
      source: "https://github.com/Mwambuka/robofriends",
    // demoLink: "https://codewithbilal.github.io/robofriends/",
    },
    {
      id:"11",
      image: "/images/project9.PNG",
      title: "Scenic Forest",
      description:
        "This is a Scenic Beauties Vacation Forest Web site that helps strengers to experience the beauty of the forest for travelers built with HTMl, CSS and JavaScript.",
        technology: "javaScript, Api, CSS, HTML5",
      source: "https://github.com/Mwambuka/scenic-forest",
    //  demoLink: "https://scenicforestsite.netlify.app/",
    },
    {
      id:"12",
      image: "/images/project10.PNG",
      title: "Jake and Elwood",
      description:
        "This is a copy of a marketing agency website that I created during my Responsive web design course on Scrimba, built using HTML5, CSS, and JavaScript.",
        technology: "JavaScript, Api, CSS, HTML5",
      source: "https://github.com/Mwambuka/marketing-website",
   //   demoLink: "https://jakeandelwoodsite.netlify.app/",
    },
    {
      id:"13",
      image: "/images/project11.png",
      title: "Weather App",
      description:
        "This is a small weather application, that allow user to search and find the condition of his specific search area with alot of information about the weather, built using weather API.",
        technology: "JavaScript, React, Api, Tailwind css",
      source: "https://github.com/Mwambuka/weather-application",
   //   demoLink: "https://weatherapp-bilal.netlify.app/",
    },
    {
      id:"14",
      image: "/images/project12.png",
      title: "Dice Game",
      description:
        "this is a mini Dice games built to for my self to have fun while get tired of coding and also helpful for young kids which not only provides them with a fun option but also helps develop and enhance their Math skills by counting, adding, subtracting, multiplying a set of rolled dice values.",
        technology: "JavaScript, HTML5, CSS",
      source: "https://github.com/Mwambuka/dicegame",
   //   demoLink: "https://dicegameme.netlify.app/",
    },
  ];

  export default myProjects;