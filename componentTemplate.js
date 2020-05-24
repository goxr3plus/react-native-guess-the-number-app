import React from "react";
import { View, Text, StyleSheet } from "react-native";

const template = (props) => {
  return (
    <View styles={styles.gameScreen2}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen2: {
    flex: 1,
    padding: 10,
  },
});

export default template;
