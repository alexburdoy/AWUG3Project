import { Entypo } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";

const Trending = observer(({ trending }) => {
  const model = useContext(ModelContext);
  return (
    <View style={styles.person}>
      <View>
        <Text style={styles.name}>{trending.name}</Text>
        <Text style={styles.name}>{trending.background_image}</Text>
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
