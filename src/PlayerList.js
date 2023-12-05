import Player from './Player';
import playersData from './players';
// this a player list 

const PlayerList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayerList;