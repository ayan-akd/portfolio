import CustomContainer from "@/Components/CustomContainer";
import ProjectsCard from "@/Components/ProjectsCard";
import medi1 from "@/assets/medi/image_66.png";
import medi2 from "@/assets/medi/image_67.png";
import medi3 from "@/assets/medi/image_68.png";
import wander1 from "@/assets/wander/image_69.png";
import wander2 from "@/assets/wander/image_70.png";
import wander3 from "@/assets/wander/image_71.png";
import techno1 from "@/assets/techno/image_72.png";
import techno2 from "@/assets/techno/image_73.png";
import techno3 from "@/assets/techno/image_74.png";
import React from "react";

const Projects = () => {
  const mediImages = {
    img1: medi1,
    img2: medi2,
    img3: medi3,
  };
  const mediTech = {
    HTML: "HTML",
    CSS: "CSS",
    Tailwind: "Tailwind",
    "Daisy UI": "Daisy UI",
    React: "React",
    "Node JS": "Node JS",
    Express: "Express",
    Firebase: "Firebase",
    JWT: "JWT",
    MongoDB: "MongoDB",
    Mongoose: "Mongoose",
    Stripe: "Stripe",
  };
  const mediData = {
    title: "Medicamp",
    description: "MediCamp is an innovative platform designed to simplify the organization and participation process for medical camps. It is a web application that allows users to create and manage medical camps. It also allows users to register for medical camps. It is a full-stack web application built using the MERN stack with role based dashboard access and payment gateway with Stripe.",
    live: "https://medicamp-1eede.web.app/",
    client: "https://github.com/ayan-akd/Medi_Camp_Client",
    server: "https://github.com/ayan-akd/Medi_Camp_Server",
  };
  const wanderImages = {
    img1: wander1,
    img2: wander2,
    img3: wander3,
  };
  const wanderTech = {
    HTML: "HTML",
    CSS: "CSS",
    Tailwind: "Tailwind",
    "Daisy UI": "Daisy UI",
    React: "React",
    "Node JS": "Node JS",
    Express: "Express",
    Firebase: "Firebase",
    JWT: "JWT",
    MongoDB: "MongoDB",
  }
  const wanderData = {
    title: "WanderLand",
    description: "WanderLand invites you to explore a captivating world of travel through an immersive and interactive blog experience. This web application not only showcases breathtaking travel stories but also offers engaging features to enhance your journey. It is a full-stack web application built using the MERN stack.",
    live: "https://akd-wanderland.web.app/",
    client: "https://github.com/ayan-akd/WanderLand",
    server: "https://github.com/ayan-akd/wanderland-server"
  }
  const technoImages = {
    img1: techno1,
    img2: techno2,
    img3: techno3,
  }
  const technoTech = {
    HTML: "HTML",
    CSS: "CSS",
    Tailwind: "Tailwind",
    "Daisy UI": "Daisy UI",
    React: "React",
    "Node JS": "Node JS",
    Express: "Express",
    Firebase: "Firebase",
    MongoDB: "MongoDB",
  }
  const technoData = {
    title: "Techno City",
    description: "Welcome to TechnoCity, where cutting-edge technology meets seamless online shopping. TechnoCity is your go-to e-commerce platform for purchasing the latest and greatest mobile devices. With a sleek design, robust features, and a user-friendly interface, TechnoCity ensures a top-notch shopping experience.",
    live: "https://akd-techno-city.web.app/",
    client: "https://github.com/ayan-akd/technoCity",
    server: "https://github.com/ayan-akd/techno-city-server",
  }
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <CustomContainer>
        <h1 className="text-white text-center text-5xl mt-16 pb-12 font-bold">
          My Projects
        </h1>
        <div>
          <ProjectsCard
            data={mediData}
            tech={mediTech}
            images={mediImages}
          ></ProjectsCard>
        </div>
        <div className="mt-10">
          <ProjectsCard
            data={wanderData}
            tech={wanderTech}
            images={wanderImages}
          ></ProjectsCard>
        </div>
        <div className="mt-10">
          <ProjectsCard
            data={technoData}
            tech={technoTech}
            images={technoImages}
          ></ProjectsCard>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Projects;
