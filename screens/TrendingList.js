import { FontAwesome } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext,useEffect } from "react";
import {ActivityIndicator, FlatList, Text, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import Trending from "../components/Trending";
import styles from "../styles";

const TrendingList = observer(() => {
  const model = useContext(ModelContext);

  useEffect(() => {
    model.loadTrending();
  }, []);

  if (model.trending === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <FlatList
        data={model.trending}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <Trending trending={item} />}
      />
    </View>
  );
});

export default TrendingList;

TrendingList.Icon = ({ color, size }) => (
  <Ionicons name="planet" size={size} color={color} />
);