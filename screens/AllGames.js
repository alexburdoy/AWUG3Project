import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { ActivityIndicator, FlatList, Button, View } from "react-native";
import { color } from "react-native-reanimated";
import Game from "../components/Game";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

const GameList = observer(() => {
  const model = useContext(ModelContext);
  const navigation = useNavigation();


  useEffect(() => {
    model.loadAllGames();
  }, []);

  function anarMenu(){
    navigation.navigate('MainMenu');
  }

  if (model.games === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <Button onPress={anarMenu} title="Go Menu"></Button>
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