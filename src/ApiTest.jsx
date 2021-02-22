import React, { useEffect, useState } from 'react';
import './ApiTest.css';

// https://randomuser.me/api/?results=50

const URL_BASE = 'https://api.rawg.io/api';

const Game = ({ game }) => {
  return (
    <div className="game">
      <div>
        <div className="name">
          {game.name}
        </div>

      </div>
    </div>
  );
};


export default function ApiTest() {
  const [games, setGames] = useState(null);

  // https://api.rawg.io/api/platforms
  // https://api.rawg.io/api/games
  // https://api.rawg.io/api/games?page=4&platform=18
  // https://api.rawg.io/api/games/{id} 
  // https://api.rawg.io/api/games/{id}/suggested
  //hola

  const loadGames = async () => {
    const response = await fetch(`${URL_BASE}/games?`);
    const json = await response.json();
    setGames(json.results);
  };

  useEffect(() => {
    loadGames();
  }, []);

  if (games === null) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {games.map((game) => (
        <Game game={game} />
      ))}
    </div>
  );
  
}
 