import { Entypo } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ModelContext } from "../model/GameModel";
import styles from "../styles";

const GameDetails = observer(({ gameDetails }) => {
  const model = useContext(ModelContext);
    return (

      <View style={styles.person}>
        <View>
        <Text style={styles.name}>{gameDetails.name}</Text>
        </View>
      </View>
    );
  
});

export default GameDetails;
