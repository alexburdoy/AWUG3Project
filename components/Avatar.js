import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const InitialsAvatar = ({ initials, color }) => (
  <View style={[styles.circle, styles.initialsCircle, { backgroundColor: color || "#aab" }]}>
    <Text style={styles.initials}>{initials}</Text>
  </View>
);

const PhotoAvatar = ({ photoUrl }) => <Image style={styles.circle} source={{ uri: photoUrl }} />;

export default function Avatar({ photoUrl, initials, color }) {
  if (photoUrl) {
    return <PhotoAvatar photoUrl={photoUrl} />;
  } else {
    return <InitialsAvatar initials={initials} color={color} />;
  }
}

const avatarSize = 56;

const styles = StyleSheet.create({
  initials: {
    fontSize: avatarSize / 2,
    color: "white",
  },
  circle: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
  },
  initialsCircle: {
    justifyContent: "center",
    alignItems: "center",
  },
});