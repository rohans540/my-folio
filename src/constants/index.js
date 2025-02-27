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
    gologo,
    kafka,
    redis,
    nodejs,
    mongodb,
    git,
    figma,
    graphql,
    accenture,
    cognam,
    norstella,
    gamio,
    poker,
    ulink,
    portfolio,
    crowdfunding,
    jobit,
    threejs,
    angular,
    fernano_g,
    sameersir,
    instagram,
    linkedIn,
    githubSocial
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
        title: "webDeveloper",
        icon: web,
    },
    {
        title: "frontendDev",
        icon: mobile,
    },
    {
        title: "fullStackDev",
        icon: backend,
    },
    {
        title: "goDev",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Go",
        icon: gologo,
    },
    {
        name: "Kafka",
        icon: kafka,
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
        name: "Redis",
        icon: redis,
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
        name: "angular",
        icon: angular,
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
        name: "graphql",
        icon: graphql,
    },
];

const experiences = [
    {
        title: "associateSoftwareEng",
        company_name: "Accenture",
        icon: accenture,
        iconBg: "#E6DEDD",
        date: "Aug 2018 - Jun 2019",
        points: [
            "exp1p1",
            "exp1p2",
            "exp1p3",
            "exp1p4",
        ],
    },
    {
        title: "frontendDev",
        company_name: "Cognam Technologies",
        icon: cognam,
        iconBg: "#383E56",
        date: "Jun 2019 - Sept 2021",
        points: [
            "exp2p1",
            "exp2p2",
            "exp2p3",
            "exp2p4",
            "exp2p5",
            "exp1p4",
        ],
    },
    {
        title: "sse",
        company_name: "Gamio Technologies Pvt Ltd",
        icon: gamio,
        iconBg: "#383E56",
        date: "Sept 2021 - Dec 2023",
        points: [
            "exp3p1",
            "exp3p2",
            "exp3p3",
            "exp2p5",
            "exp3p4",
            "exp1p4",
        ],
    },
    {
        title: "Senior software engineer",
        company_name: "Norstella",
        icon: norstella,
        iconBg: "#383E56",
        date: "Jan 2024 - Present",
        points: [
            "exp4p1",
            "exp4p2",
            "exp4p3",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Outstanding frontend developer who skillfully crafted our online poker app, elevating the user experience to a whole new level.",
        name: "Sonia Singh",
        designation: "Ops Manager",
        company: "Gamio Technologies",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "A highly talented frontend developer who played a crucial role in building our cutting-edge B2B remittance transfer application, delivering an exceptional user interface and seamless experience.",
        name: "Fernando Gutierrez",
        designation: "Head Digital Innovations",
        company: "Uniteller",
        image: fernano_g,
    },
    {
        testimonial:
            "Rohan was the key part of our team for delivering the online business payment application for our client, he started the project from scratch and successfully delivered.",
        name: "Sameer Taneja",
        designation: "Director",
        company: "Cognam Technologies",
        image: sameersir,
    },
];

const projects = [
    {
        name: "Online Poker",
        description:
            "pokerDes",
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
            }
        ],
        image: poker,
        source_code_link: "https://gamesoftware.gamiotech.com/poker",
    },
    {
        name: "Ulink Business",
        description:
            "ulinkDes",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Go",
                color: "green-text-gradient",
            },
            {
                name: "Gin",
                color: "pink-text-gradient",
            },
            {
                name: "Kafka",
                color: "blue-text-gradient",
            },
            {
                name: "Postgre",
                color: "green-text-gradient",
            },
        ],
        image: ulink,
        source_code_link: "https://github.com/",
    },
    {
        name: "Pitching portfolio",
        description:
            "porffoliodes",
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
        image: portfolio,
        source_code_link: "https://github.com/rohans540/my-folio",
    },

    {
        name: "Web3 Crowdfunding App",
        description:
            "crowdfundDes",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Thirdweb",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "Web3",
                color: "blue-text-gradient",
            }
        ],
        image: crowdfunding,
        source_code_link: "https://github.com/rohans540/crowdfunding-client",
    }
];

const socialLinks = [
    {
        name: "LinkedIn",
        icon: linkedIn,
        link: "https://www.linkedin.com/in/rohans540/"
    },
    {
        name: "Github",
        icon: githubSocial,
        link: "https://github.com/rohans540"
    },
    {
        name: "Instagram",
        icon: instagram,
        link: "https://www.instagram.com/rohans540/"
    }
]

const CALENDLY_URL = "https://calendly.com/rohans540";

export { services, technologies, experiences, testimonials, projects, socialLinks, CALENDLY_URL };