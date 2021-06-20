import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import Recomendations from "../components/Recomendations";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

const RecomendationsList = observer(() => {
  const model = useContext(ModelContext);
  const navigation = useNavigation();

  useEffect(() => {
    model.loadRecomendations();
  }, []);

  function anarMenu(){
    navigation.navigate('MainMenu');
  }

  if (model.recomendations === null) {
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
        data={model.recomendations}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <Recomendations recomendations={item} />}
      />
    </View>
  );
});

export default RecomendationsList;

RecomendationsList.Icon = ({ color, size }) => (
  <Ionicons name="recomendations" size={size} color={color} />
);
