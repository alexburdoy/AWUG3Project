import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import Game from "../components/Game";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";

const GameList = observer(() => {
  const model = useContext(ModelContext);

  useEffect(() => {
    model.loadAllGames();
  }, []);

  if (model.games === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <FlatList
        data={model.games}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <Game game={item} />}
      />
    </View>
  );
});

export default GameList;

GameList.Icon = ({ color, size }) => (
  <Ionicons name="game" size={size} color={color} />
);
