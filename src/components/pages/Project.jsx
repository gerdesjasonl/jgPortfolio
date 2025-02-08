import Card from 'react-bootstrap/Card';

// const CardStyle = css({
//   display: 'flex', 
//   justifyContent: 'center', 
//   alignItems: 'center',
// });

const Project = ({ title, description, image, link }) => {
  return (
    <Card css={{width: '100%', left: 0}}>
      <Card.Img
        src={image}
        alt={title}
        width= {400}
        height={250}
      
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={link} target="_blank" rel="noopener noreferrer">
        </a>
      </Card.Body>
    </Card>
  );
};

export default Project;