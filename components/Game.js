import { Entypo } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from '@react-navigation/native';


const Game = observer(({ game }) => {
  const model = useContext(ModelContext);
  const navigation = useNavigation();
  //Aqui hem de trobar la forma que a la linia 18 mostri tots els generes que te un joc. Tenen 1 o 2. Si es cambia el 0 per un 1 pot petar perque algu nno en tingui 2

  function apreta(){
    model.getName(game.name);
    navigation.navigate('GameDetailsPage');
  }

  return (

    <View style={styles.person}>

      <TouchableOpacity onPress={() => model.toggleFavorite(game.name)}>
        <Entypo
          name={model.favorites.has(game.name) ? "star" : "star-outlined"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => apreta()}>

        <View>
          <Text style={styles.name}>{game.name}</Text>
          <Text>
            <Text style={styles.label}>Release date:</Text> {game.released}
          </Text>
          <Text>
            <Text style={styles.label}>Genres:</Text>{game.genres[0].name}
          </Text>
        </View>
      </TouchableOpacity>
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