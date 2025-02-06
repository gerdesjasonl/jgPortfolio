import Project from "./Project";

const Portfolio = () => {
    return (
      <section>
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