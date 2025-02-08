import Project from "./Project";
import { css } from "@emotion/react";
import empTrack from "../../../public/employeeTrackerScreen.png";
import readmeGen from "../../../public/employeeTrackerScreen.png";
import vehicleBuild from "../../../public/employeeTrackerScreen.png";


const portfolioStyle = css({
  marginTop: '20%',
"@media screen and (min-width: 768px)": {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr',
}
})

const Portfolio = () => {
    return (
      <section css={portfolioStyle}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
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
    image: '',
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