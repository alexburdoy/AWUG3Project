import { Entypo } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Text, ScrollView, TouchableOpacity, Image, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

const Trending = observer(({ trending }) => {
  const model = useContext(ModelContext);
  const navigation = useNavigation();

  function apreta() {
    model.getName(trending.name);
    navigation.navigate("GameDetailsPage");
  }

  return (
    <View style={styles.person}>
      <ScrollView horizontal>
      <View style={styles.gameContainer}>
          <TouchableOpacity onPress={() => apreta()}>
            <Image
              style={styles.bgImage}
              source={{ uri: trending.background_image }}
            />
            <View style={styles.game}>
              
            </View>
          </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
});

export default Trending;
