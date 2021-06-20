import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { color } from "react-native-reanimated";
import Game from "../components/Game";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

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
      <Button
        onPress={anarMenu}
        icon={
          <Icon
            name="arrow-left"
            size={15}
            color="white"
          />
        }
        title="Menú"
      />
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