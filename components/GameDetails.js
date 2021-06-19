import { Entypo } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import Comment from "./Comment";
import styles from "../styles";

const GameDetails = observer(({ gameDetails }) => {
  const model = useContext(ModelContext);
  const [userList, setUserList] = useState([]);
  let gameGenres = ""; /*gameDetails.genres.length;*/
  let gamePlatforms = "";

  const loadUsers = async () => {
    const resp = await fetch(`https://randomuser.me/api/?results=5`);
    const json = await resp.json();
    setUserList(json.results);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  //const gameGenres = showGenres();

  for (let index = 0; index < gameDetails.genres.length; index++) {
    //console.log(gameDetails.genres[index].name);
    if (index == gameDetails.genres.length - 1) {
      gameGenres += gameDetails.genres[index].name;
    } else {
      gameGenres += gameDetails.genres[index].name + ", ";
    }
    /*console.log("prova");
    <Text>{gameDetails.genres[index].name}</Text>*/
  }

  for (let index = 0; index < gameDetails.platforms.length; index++) {
    if (index == gameDetails.platforms.length - 1) {
      gamePlatforms += gameDetails.platforms[index].platform.name;
    } else {
      gamePlatforms += gameDetails.platforms[index].platform.name + ", ";
    }
    /*console.log("prova");
    <Text>{gameDetails.genres[index].name}</Text>*/
  }

  console.log(gamePlatforms);

  //console.log(gameGenres);

  return (
    <View style={styles.person}>
      <View>
        <TouchableOpacity onPress={() => model.toggleFavorite(gameDetails.name)}>
          <Entypo
            name={model.favorites.has(gameDetails.name) ? "star" : "star-outlined"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.name}>{gameDetails.name}</Text>
        <Text style={styles.name}>{gameDetails.released}</Text>
        <Image
          style={styles.image}
          source={{ uri: gameDetails.background_image }}
        />
        <Text style={styles.name}>{gameDetails.rating} / 5</Text>
        <Text style={styles.name}>{gameGenres}</Text>
        <Text style={styles.name}>{gamePlatforms}</Text>
        {userList.map((user) => (
          <Comment
            user={user}
            text="Boníssim"
            rate="Perfect"
            key={user.email}
          />
        ))}
      </View>
    </View>
  );
});

export default GameDetails;
