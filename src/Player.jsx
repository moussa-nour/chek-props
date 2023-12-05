import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: 'auto', marginBottom: '20px', padding: '10px' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={{ width: '250px', height: '200px', paddingLeft: '10px' }} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Props
Player.defaultProps = {
  name: "Player Name",
  team: "Team",
  nationality: "Nationality",
  jerseyNumber: 0,
  age: 0,
  image: "image",
};

export default Player;