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
        <div className="release">
          Release: {game.released}
        </div>
        <div className="rating">
          Rating: {game.rating}
        </div>

      </div>
    </div>
  );
};

const Platforms = ({ platforms }) => {
  return (
    <div className="platforms">
      <div>
        <div className="name">
          {platforms.name}
        </div>

      </div>
    </div>
  );
};

const Stores = ({ stores }) => {
  return (
    <div className="stores">
      <div>
        <div className="name">
          {stores.name} - ID: {stores.id}
        </div>

      </div>
    </div>
  );
};

const Publishers = ({ publishers }) => {
  return (
    <div className="publishers">
      <div>
        <div className="name">
          {publishers.name}
        </div>

      </div>
    </div>
  );
};

const Developers = ({ developers }) => {
  return (
    <div className="developers">
      <div>
        <div className="name">
          {developers.name}
        </div>

      </div>
    </div>
  );
};

export default function ApiTest() {
  const [games, setGames] = useState(null);//Mostra la primera pagina de jocs
  const [platforms, setPlatforms] = useState(null);//Mostra la llista de plataformes(agrupades per marca)
  const [stores, setStores] = useState(null);//Mostra la llista de tendes digitals
  const [publishers, setPublishers] = useState(null);//Mostra la llista de empreses publicadores
  const [developers, setDevelopers] = useState(null);//Mostra la llista de empreses desenvolupadores


  //buscar algo + ?page=2 per triar la pagina a buscar
  const loadGames = async () => {
    const response = await fetch(`${URL_BASE}/games?`);
    const json = await response.json();
    setGames(json.results);
  };

  const loadPlatforms = async () => {
    const response = await fetch(`${URL_BASE}/platforms/lists/parents?`);
    const json = await response.json();
    setPlatforms(json.results);
  };

  const loadStores = async () => {
    const response = await fetch(`${URL_BASE}/stores?/{id:1}`);
    const json = await response.json();
    setStores(json.results);
  };

  const loadPublishers = async () => {
    const response = await fetch(`${URL_BASE}/publishers?page_size=40`);
    const json = await response.json();
    setPublishers(json.results);
  };

  const loadDevelopers = async () => {
    const response = await fetch(`${URL_BASE}/developers?page_size=100`);
    const json = await response.json();
    setDevelopers(json.results);
  };

  useEffect(() => {
    loadGames();
    loadPlatforms();
    loadStores();
    loadPublishers();
    loadDevelopers();
  }, []);

  if (games === null) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {games.map((game) => (
        <Game game={game} />
      ))}
      <br></br>
      {platforms.map((platforms) => (
        <Platforms platforms={platforms} />
      ))}
      <br></br>
      {stores.map((stores) => (
        <Stores stores={stores} />
      ))}
      <br></br>
      {publishers.map((publishers) => (
        <Publishers publishers={publishers} />
      ))}
      <br></br>
      {developers.map((developers) => (
        <Developers developers={developers} />
      ))}

    </div>
  );

}
