import { Entypo } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from '@react-navigation/native';

const Recomendations = observer(({ recomendations }) => {
  const model = useContext(ModelContext);
  const navigation = useNavigation();
  
  function apreta() {
    //model.getName(recomendations.name);
    navigation.navigate("GameDetailsPage");
  }
  
  return (
    
    <View style={styles.person}>

      <View>
      <TouchableOpacity onPress={() => apreta()}>
        <Text style={styles.date}>{recomendations.name}</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => model.toggleFavorite(recomendations.name)}>
        <Entypo
          name={model.favorites.has(recomendations.name) ? "heart" : "heart-outlined"}
          size={24}
          color="#E6FF2E"
        />
      </TouchableOpacity>
    </View>
  );
});

export default Recomendations;
