import Project from "./Project";
import { css } from "@emotion/react";
import empTrack from "../../../public/employeeTrackerScreen.png";
import readmeGen from "../../../public/readmeGeneratorScreen.png";
import vehicleBuild from "../../../public/vehicleBuilderScreen.png";
import frenchCast from "../../../public/frenchCastleScreen.png";

// const portfolioStyle = css({
//   marginTop: '20%',
// "@media screen and (min-width: 768px)": {
//   gap: '20px',
//   gridTemplateColumns: 'repeat(2, 1fr)',
//   gridTemplateRows: 'auto',
// }
// });

const ProjectGrid = ({ projects }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      // gridTemplateColumns: "repeat(min(3, auto-fit), minmax(250px, 1fr))",
      gap: "20%",
      width: '80%',
      padding: "20px"
    }}>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};


const Portfolio = () => {
    return (
      <section>
        {/* {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))} */}
        <ProjectGrid projects={projects} />
      </section>
    );
  };

const projects = [
  {
    title: "Employee Tracker",
    description: "",
    image: empTrack,
    link: "",
  },
  {
    title: "README Generator",
    description: "",
    image: readmeGen,
    link: "",
  },
  {
    title: "Vehicle Builder",
    description: "",
    image: vehicleBuild,
    link: "",
  },
  {
    title: "French Castles",
    description: "",
    image: frenchCast,
    link: "",
  },
  {
    title: "",
    description: "",
    image: "",
    link: "",
  },
  {
    title: "",
    description: "",
    image: "",
    link: "",
  },
];

export default Portfolio;