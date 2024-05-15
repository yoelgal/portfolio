import {React, useState} from "react";
import SkillSwap from "../assets/skillswap.png";
import SpaceExplore from "../assets/space-explore.png";
import CSWizard from "../assets/cswizard.png";

const projects = [
    {
        title: "2024 - SkillSwap",
        description: "A platform for university students to teach others and learn new skills.",
        image: SkillSwap,
        details: ["SkillSwap is a platform that allows university students to teach others and learn new skills. Driven by a powerful and secure Nest.js backend, the platform features a user-friendly interface that allows users to easily navigate the site and find the skills they are looking for.",
            "Technologies used: Nest.js, React, TypeScript, MySQL, Git, GitLab, Docker, JavaScript, CSS"],
        link: null
    },
    {
        title: "2024 - Space Explorer",
        description: "An app that lets you explore the Milky Way from the comfort of your home.",
        image: SpaceExplore,
        details: ["This app was built using the 3js library. It allows users to explore the universe and learn about the different planets in our solar system. The app also plays ambient music to create a calming experience for users.",
            "Technologies used: 3js, CSS, HTML, JavaScript, Git, GitHub, Vercel"],
        link: "https://explore.yoelgal.com"

    },
    {
        title: "2022 - CS Wizard",
        description: "A site providing topic-specific practice papers for A-Level Computer Science.",
        image: CSWizard,
        details: ["CS Wizard is a site that provides topic-specific practice papers for A-Level Computer Science. The site features a user-friendly interface that allows students to easily navigate the site and find the papers they are looking for.",
            "Technologies used: Next.js, Git, GitHub, Vercel, JavaScript, CSS"],
        link: "https://cswizard.yoelgal.com"
    },
    // Add more projects as needed
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleImageClick = (link) => {
        if (link) {
            window.open(link, "_blank", 'noopener noreferrer');
        }
    }

    return (
        <section id="portfolio" className="w-full max-w-4xl mx-auto p-4 text-left pt-24 text-blue-100">
            <h2 className="text-4xl font-bold mb-4">
                <span className="font-source-code font-normal text-xl text-non_photo_blue-400">0010</span> Portfolio
            </h2>
            <p className="mb-4 text-lg">Here are some of the projects I have worked on:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <div key={index} className="relative">

                        <img src={project.image} alt={project.title}
                             className={`w-full h-48 object-contain m-4 duration-300 hover:scale-105 ${project.link ? "cursor-pointer" : "cursor-not-allowed"}`}
                             onClick={() => handleImageClick(project.link)}/>

                        <h3 className="text-2xl mt-2">{project.title}</h3>
                        <p className="text-lg">{project.description}</p>

                        <button onClick={() => setSelectedProject(project)}
                                className="mt-2 text-non_photo_blue-400">Learn More
                        </button>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div
                    className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ${
                        selectedProject ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className={`bg-rich_black-600 p-8 rounded-lg max-w-md mx-auto text-left`}>
                        <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                        {selectedProject.details.map((detail) => (
                            <p key={detail} className="mt-4">{detail}</p>
                        ))}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="mt-4 text-non_photo_blue-400"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
};

export default Portfolio;