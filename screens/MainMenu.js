import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from '@react-navigation/native';

const MainMenu = observer(({}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={() => navigation.navigate('TrendingList')}>
        <Text>
            Trending
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('GameList')}>
        <Text>
            Game catalog
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Library')}>
        <Text>
            Library
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RecomendationsList')}>
        <Text>
            Recomendations
        </Text>
      </TouchableOpacity>
    </View>
    
  );
});

export default MainMenu;