import Card from 'react-bootstrap/Card';
import { css }from '@emotion/react';

const cardStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  padding: "20px"
});

const Project = ({ title, description, image, link }) => {
  return (
  <div>
    <Card>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card.Img
        src={image}
        alt={title}
        width= {400}
        height={250}
      />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};


export default Project;