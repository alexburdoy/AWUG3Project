import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import GameDetails from "../components/GameDetails";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";

const Details = observer(() => {
  const model = useContext(ModelContext);
  useEffect(() => {
    model.loadDetails();
  }, []);

  if (model.gameDetails === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <FlatList
        data={model.gameDetails}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <GameDetails gameDetails={item} />}
      />
    </View>
  );
});

export default Details;

Details.Icon = ({ color, size }) => (
  <Ionicons name="game" size={size} color={color} />
);
