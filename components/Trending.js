import { Entypo } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from '@react-navigation/native';

const Trending = observer(({ trending }) => {
  const model = useContext(ModelContext);
  const navigation = useNavigation();
  return (
    <View style={styles.person}>
      <View style={styles.gameContainer}>

        <TouchableOpacity
          onPress={() => navigation.navigate("GameDetailsPage")}
        >
          <Image
            style={styles.bgImage}
            source={{ uri: trending.background_image }}
          />
          <View style={styles.game}>
            <Text style={styles.name}>{trending.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => model.toggleFavorite(trending.name)}>
        <Entypo
          name={model.favorites.has(trending.name) ? "heart" : "heart-outlined"}
          size={24}
          color="#E6FF2E"
          style={{
            position:'absolute',
            right:10,
            top:10
          }}
        />
      </TouchableOpacity>
    </View>
  );
});

export default Trending;
