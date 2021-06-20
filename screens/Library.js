import { FontAwesome } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { FlatList, Text, View, Button } from "react-native";
import Game from "../components/Game";
import Recomendations from "../components/Recomendations";
import Trending from "../components/Trending";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

const Library = observer(() => {
  const model = useContext(ModelContext);
  const navigation = useNavigation();

  function anarMenu(){
    navigation.navigate('MainMenu');
  }

  return (
    <View style={styles.page}>
      <Button onPress={anarMenu} title="Go Menu"></Button>
      <FlatList
        data={model.favoriteList}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => {
          if (item.type === "game") {
            return <Game game={item} />;
          } else if (item.type === "recomendations") {
            return <Recomendations recomendations={item} />;
          } else {
            return <Text>unknown item {item}</Text>;
          }
        }}
      />
    </View>
  );
});

export default Library;

Library.Icon = ({ color, size }) => (
  <FontAwesome name="star" size={size} color={color} />
);