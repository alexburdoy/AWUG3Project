import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { textPrimary, textSecondary, textTertiary } from "../styles";
import Avatar from "./Avatar";

export default function Comment({ user, text, rate }) {
  const { name, email, picture } = user;
  const initials = name.first[0].toUpperCase() + name.last[0].toUpperCase();
  return (
    <View style={styles.commentBox}>
      <View style={styles.user}>
        <Avatar photoUrl={picture.thumbnail} initials={initials} color="teal" />
        <View style={styles.info}>
          <Text style={styles.name}>
            {name.first} {name.last}
          </Text>
          <Text style={styles.email} adjustsFontSizeToFit={true} >{email}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.commentTitle}>{rate}</Text>
        <Text style={styles.commentText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentBox: {
    width: "90%",
    margin: 20,
    padding:10,
    backgroundColor: "#1D0032",
    borderRadius: 10,
    
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  user: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: "Montserrat-Black",
    color: textPrimary,
  },
  email: {
    flex: 1,
    fontSize: 11,
    fontFamily: "Montserrat-Black",
    color: textSecondary,
  },
  commentTitle: {
    fontSize: 16,
    fontFamily: "Montserrat-Black",
    color: "#00FF6F",
  },
  commentText: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    color: textTertiary,
  },
});