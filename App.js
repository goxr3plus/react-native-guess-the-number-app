import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import StartGameScreen from "./src/containers/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Guess a number"}></Header>
      <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
