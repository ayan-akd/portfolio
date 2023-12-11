"use client";
import Slider from "./Slider";
import { Chip, link } from "@nextui-org/react";
const ProjectsCard = ({ images, tech, data }) => {
  return (
    <div className="text-white max-w-screen-2xl mx-auto">
      <h1 className="text-3xl text-center mb-5">{data.title}</h1>
      <Slider images={images}></Slider>
      <p className="py-2">
        {data.description}
      </p>
      <p>Technologies Used:</p>
      <div className="flex flex-wrap gap-2 py-2">
        {Object.keys(tech).map((technology) => (
          <Chip key={technology} color="warning" variant="bordered">
            {tech[technology]}
          </Chip>
        ))}
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center py-5">
        <p>
          Live Link:{" "}
          <a className="text-blue-300" target="_blank" href={data.live}>
           {data.title}
          </a>
        </p>
        <p>
          Client Repo:{" "}
          <a className="text-blue-300" target="_blank" href={data.client}>
            Link
          </a>
        </p>
        {data.server && (
          <p>
            Server Repo:{" "}
            <a className="text-blue-300" target="_blank" href={data.server}>
              Link
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
