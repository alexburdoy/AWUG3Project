import { action, computed, makeObservable, observable } from "mobx";
import React, { createContext } from "react";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";

class GameModel {
  constructor() {
    this.games = null;
    this.trending = null;
    this.recomendations = null;
    this.gameDetails = null;
    this.gameName = null;
    this.favorites = new Set();
    this.favGenres = new Set();
    this.library = new Set();

    makeObservable(this, {
      games: observable,
      trending: observable,
      recomendations: observable,
      favorites: observable,
      library: observable,
      gameDetails: observable,
      setAllGames: action,
      setTrending: action,
      setRecomendations: action,
      toggleFavorite: action,
      getName: action,
      favoriteList: computed,
      recomendationsList: computed,
    });
  }

  setAllGames(games) {//Llista de tots els jocs pel cataleg
    this.games = games;
    this.games.forEach((games) => (games.type = "game"));
  }

  setTrending(trending) {//Llista de jocs mes populars del moment(Maxim 3 o 4 es mostraran)
    this.trending = trending;
    this.trending.forEach((trending) => (trending.type = "game"));
  }

  setRecomendations(recomendations) {//Llista de jocs recomanats en base als generes de la biblioteca de preferits. Si no ni han mostrar una llista generica)
    this.recomendations = recomendations;
    this.recomendations.forEach((recomendations) => (recomendations.type = "recomendations"));
  }

  setDetails(gameDetails) {//Detalls del joc seleccionat
    
    this.gameDetails = gameDetails;
    this.gameDetails.forEach((gameDetails) => (gameDetails.type = "game"));
  }

  toggleFavorite(name) {
    this.gameName=name;
    if (this.favorites.has(name)) {
      this.favorites.delete(name);
    } else {
      this.favorites.add(name);
    }
    
  }
  getName(name){
    
    this.gameName=name;
    
  }

  get gameNameReturn(){
    return this.gameName;
  }

  get favoriteList() {
    let favGames = [];
    if (this.games) {
      favGames = this.games.filter((person) =>
        this.favorites.has(person.name)
      );
    }
    return [...favGames];
  }

  get recomendationsList() {
    let favGenres = [];
    if (this.recomendations) {
      favGenres = this.recomendations.filter((planet) =>
        this.favorites.has(planet.name)
      );
    }
    return [...favGenres];
  }

  async loadAllGames() {//Mostrar tots els jocs per pagina
    const response = await fetch(`https://api.rawg.io/api/games?key=511084e1f425491089c17b0d2c21354a`);
    const json = await response.json();
    this.setAllGames(json.results);
  }

  async loadTrending() {//Mostra els 4 en trending (falta crear una consulta per trending sino simplement agafem els 4 que primer surtin)
    const response = await fetch(`https://api.rawg.io/api/games?key=511084e1f425491089c17b0d2c21354a&page_size=4`);
    const json = await response.json();
    this.setTrending(json.results);
  }

  async loadRecomendations() {//Mostra recomanacions de jocs en base al nome de l'ultim joc cercat
    const response = await fetch(`https://api.rawg.io/api/games?key=511084e1f425491089c17b0d2c21354a&search=${this.gameName}`);
    const json = await response.json();
    this.setRecomendations(json.results);
  }

  async loadDetails() {
    const response = await fetch(`https://api.rawg.io/api/games?key=511084e1f425491089c17b0d2c21354a&search=${this.gameName}&page_size=1`);
    const json = await response.json();
    this.setDetails(json.results);
  }

}

const model = new GameModel(); 

export const ModelContext = createContext();

export const ModelProvider = ({ children }) => (
  <ModelContext.Provider value={model}>{children}</ModelContext.Provider>
);
/*
Consultes

Tots els jocs:
https://api.rawg.io/api/games?key=511084e1f425491089c17b0d2c21354a&page_size=0&page=1

Categories/generes:
https://api.rawg.io/api/genres?key=511084e1f425491089c17b0d2c21354a

https://api.rawg.io/api/games?key=511084e1f425491089c17b0d2c21354a&search=%22grand-theft-auto-v%22&page_size=1
*/