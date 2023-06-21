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
    accenture,
    cognam,
    skilling,
    gamio,
    carrent,
    jobit,
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
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
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
        title: "Associate Software Engineer",
        company_name: "Accenture",
        icon: accenture,
        iconBg: "#E6DEDD",
        date: "Aug 2018 - Jun 2019",
        points: [
            "Developing and maintaining web services using Java/J2EE and Spring Boot web framework",
            "Collaborating with cross-functional teams including Frontend developers, product managers, and client to create high-quality web services and APIs.",
            "Worked on an E-commerce application for UK based jewellry company.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend developer",
        company_name: "Cognam Technologies",
        icon: cognam,
        iconBg: "#383E56",
        date: "Jun 2019 - Sept 2021",
        points: [
            "Collaborated with designers and backend developers to develop, design and test web application product.",
            "Turning wireframes to life by building stable and maintainable codebase using React Js.",
            "Build the Fintech remittance product from scratch, involved in flow design create new features and functionalities using AJAX and JSON.",
            "Successfully created the product user interface and integrates the frontend with backend services.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "Gamio Technologies Pvt Ltd",
        icon: gamio,
        iconBg: "#383E56",
        date: "Sept 2021 - Present",
        points: [
            "Developing online Real Money Gaming products focusing on driving customer engagement and rich and fast performing user interface.",
            "Writing UI components using ReactJs, Next.js and managing data using Redux for an online multiplayer poker game.",
            "Integration with server using Web sockets and apis.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Integration with igamio application based on React native.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer (Freelance-contract)",
        company_name: "Skilling",
        icon: skilling,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Jun 2023",
        points: [
            "Developing and maintaining web applications using Angular and Typescript.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Worked on their Trading application to fix bugs, develop new features and improve application performance and UX",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
        name: "Online Poker",
        description:
            "Web and mobile based Real money poker game which allows user to Signup, Log-in, Add money and sit on different tables and play with multiple players.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "websockets",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://gamesoftware.gamiotech.com/",
    },
    {
        name: "Ulink Business",
        description:
            "Web application that allows user to create account as a company representative onboard a company, and create payments to their clients.",
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
        name: "Pitching portfolio",
        description:
            "My own portfolio to showcase my skills and experience in a better and interactive way, used 3D models and tailwind css, added functionality to contact me by sending email.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "ThreeJs",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/rohans540/my-folio",
    },
];

export { services, technologies, experiences, testimonials, projects };