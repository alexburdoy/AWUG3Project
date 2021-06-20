import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";


const MainMenu = observer(({ }) => {
  const navigation = useNavigation();
  
  return (

    <View style={styles.page}>
      <View style={styles.logoAppView}><Image style={styles.logoApp} source={require('../assets/GemuMenu.png')}></Image></View>
      <View style={styles.menuCircle}>
        <TouchableOpacity onPress={() => navigation.navigate('TrendingList')}>
          <Text style={styles.menuItem}>
            Trending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GameList')}>
          <Text style={styles.menuItem}>
            Game catalog
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Library')}>
          <Text style={styles.menuItem}>
            Library
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RecomendationsList')}>
          <Text style={styles.menuItem}>
            Recomendations
          </Text>
        </TouchableOpacity>
      </View>
    </View>


  );
});


export default MainMenu;