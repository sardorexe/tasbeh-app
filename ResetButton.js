import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ResetButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 3,
    backgroundColor: "#f7fff7",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#001d3d",
    borderRadius: 3,
  },
});
