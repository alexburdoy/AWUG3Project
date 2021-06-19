import { Entypo } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";

const Recomendations = observer(({ recomendations }) => {
  const model = useContext(ModelContext);
  return (
    <View style={styles.person}>
      <View>
      <Text style={styles.name}>{recomendations.name}</Text>
      </View>
      <TouchableOpacity onPress={() => model.toggleFavorite(recomendations.name)}>
        <Entypo
          name={model.favorites.has(recomendations.name) ? "star" : "star-outlined"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
});

export default Recomendations;
