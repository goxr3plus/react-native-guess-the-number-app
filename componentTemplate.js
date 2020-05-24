import React from "react";
import { View, Text, StyleSheet } from "react-native";

const template = (props) => {
  return (
    <View styles={styles.screen}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default template;
