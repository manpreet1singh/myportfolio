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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    gri,
    tripguide,
    threejs,
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
    {
      id:"resume",
      title: "Resume",
      link: "https://drive.google.com/file/d/1Ki6a19MCDUlkdSISvw-JqQbYclGkviBn/view",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Problem Solving",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Gro Globally",
      icon: gri,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Led the complete redesign and rebuild of Gro Globally’s website, implementing a user-friendly interface that enhanced user experience and increased client engagement by 30%.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Streamlined a responsive video playback feature for web pages using the React Video Player component, providing aseamless and user-friendly media experience.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Mern Chat app",
      company_name: "Various",
      icon: mongodb,
      iconBg: "#E6DEDD",
      date: "April 2024  - May 2024",
      points: [
        "Applied frontend development best practices for a polished and user-friendly website using react.js",
        "Spearheaded private chat feature and smooth and seamless file sharing and login/register features for users.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Employed Express.js as the backend framework to handle API requests and manage Socket.IO connections.",
      ],
    },
    {
      title: "Gen-Z Drips",
      company_name: "Private",
      icon: shopify,
      iconBg: "#383E56",
      date: "Feb 2024 - March 2024",
      points: [
        " Ensured seamless functioning of the website and designed different sections for kids, women and men. Utilised contextAPI for state management.",
        " Utilized React hooks like useState,useEffect for managing application state, ensured amount calculation and promocodes application.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Integrated functionalities like add to cart, remove from cart, and browse different product categories.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };