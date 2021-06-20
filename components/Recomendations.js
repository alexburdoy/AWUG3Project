import { Entypo } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from '@react-navigation/native';

const Recomendations = observer(({ recomendations }) => {
  const model = useContext(ModelContext);
  const navigation = useNavigation();
  
  function apreta() {
    model.getName(recomendations.name);
    navigation.navigate("GameDetailsPage");
  }
  
  return (
    
    <View style={styles.person}>
      <View style={styles.gameContainer}>

      <TouchableOpacity onPress={() => model.toggleFavorite(recomendations.name)}>
        
      </TouchableOpacity>
      <TouchableOpacity onPress={() => apreta()}>
      <Image
            style={styles.bgImageRecommendation}
            source={{ uri: recomendations.background_image }}
          />
        <View style={styles.gameRecommendation}>
          <Text style={styles.platforms}>{recomendations.name}</Text>
          <Text style={styles.platforms}>
            <Text style={styles.date}>Release date: </Text> {recomendations.released}
          </Text>
          
        </View>
        <Entypo
          name={model.favorites.has(recomendations.name) ? "heart" : "heart-outlined"}
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

export default Recomendations;
