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
      <View>
        <Text style={styles.name}>{trending.name}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("GameDetailsPage")}
        >
          <Image
            style={{
              height: 200,
            }}
            source={{ uri: trending.background_image }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => model.toggleFavorite(trending.name)}>
        <Entypo
          name={model.favorites.has(trending.name) ? "star" : "star-outlined"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
});

export default Trending;
