import Project from "./Project";
import { css } from "@emotion/react";
import empTrack from "../../assets/employeeTrackerScreen.png";
import readmeGen from "../../assets/readmeGeneratorScreen.png";
import vehicleBuild from "../../assets/vehicleBuilderScreen.png";
import frenchCast from "../../assets/frenchCastleScreen.png";
import underConstruction from "../../assets/kenstok1_05.jpg";
import { Link } from "react-router-dom";

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
      alignItems: "center",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      // gridTemplateColumns: "repeat(min(3, auto-fit), minmax(250px, 1fr))",
      gap: "10%",
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
    description: "A CLI employee tracker program. Developed with TypeScript, PostgreSQL, and Node.js with Inquirer",
    image: empTrack,
    link: "https://github.com/gerdesjasonl/jgEmployeeTracker.git",
  },
  {
    title: "README Generator",
    description: "A CLI prompt that generates a formated README. Developed with Node.js and Inquirer",
    image: readmeGen,
    link: "https://github.com/gerdesjasonl/READMEgenerator.git",
  },
  {
    title: "Vehicle Builder",
    description: "A CLI vehicle builder and operator. Developed with TypeScript, OOP, and Node.js",
    image: vehicleBuild,
    link: "https://github.com/gerdesjasonl/jgVehicleBuilder.git",
  },
  {
    title: "French Castles",
    description: "An interactive e-learning concept developed collaboratively utilizing HTML, CSS, and JS",
    image: frenchCast,
    link: "https://github.com/gerdesjasonl/frenchFootsteps.git",
  },
  {
    title: "Project to be revealed soon!",
    description: "",
    image: underConstruction,
    link: "",
  },
  {
    title: "Project to be revealed soon!",
    description: "",
    image: underConstruction,
    link: "",
  },
];

export default Portfolio;