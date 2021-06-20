import { Entypo } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View,Image } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from '@react-navigation/native';


const Game = observer(({ game }) => {
  const model = useContext(ModelContext);
  const navigation = useNavigation();
  let gameGenres = "";
  //Aqui hem de trobar la forma que a la linia 18 mostri tots els generes que te un joc. Tenen 1 o 2. Si es cambia el 0 per un 1 pot petar perque algu nno en tingui 2

  function apreta(){
    model.getName(game.name);
    navigation.navigate('GameDetailsPage');
  }

  for (let index = 0; index < game.genres.length; index++) {
    //console.log(game.genres[index].name);
    if (index == game.genres.length - 1) {
      gameGenres += game.genres[index].name;
    } else {
      gameGenres += game.genres[index].name + ", ";
    }
    /*console.log("prova");
    <Text>{game.genres[index].name}</Text>*/
  }

  return (

    <View style={styles.person}>
      <View style={styles.gameContainer}>

      <TouchableOpacity onPress={() => model.toggleFavorite(game.name)}>
        
      </TouchableOpacity>
      <TouchableOpacity onPress={() => apreta()}>
      <Image
            style={styles.bgImage}
            source={{ uri: game.background_image }}
          />
        <View style={styles.game}>
          <Text style={styles.platforms}>{game.name}</Text>
          <Text style={styles.platforms}>
            <Text style={styles.date}>Release date: </Text> {game.released}
          </Text>
          <Text style={styles.platforms}>
            <Text style={styles.date}>Genres: {gameGenres}</Text>
          </Text>
        </View>
        <Entypo
          name={model.favorites.has(game.name) ? "heart" : "heart-outlined"}
          size={24}
          color="#E6FF2E"
          style={{
            position:'absolute',
            top:10,
            right:10
          }}
        />
      </TouchableOpacity>
      </View>
    </View>

    
  );


});



export default Game;


/* Aixo ha d'estar englobant tota la caixa del joc



        <TouchableOpacity onPress={() => model.loadDetails()}>
          <Entypo
            name={model.favorites.has(game.name) ? "star" : "star-outlined"}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => model.getName(game.name)}>
          <Entypo
            name={model.favorites.has(game.name) ? "star" : "star-outlined"}
            size={24}
            color="black"
          />
        </TouchableOpacity>

*/