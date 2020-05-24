import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NumberContainer from '../components/NumberContainer'

const GameOverScreen = (props) => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>The Game is Over!</Text>
         <Text>Number of rounds</Text>
         <NumberContainer>{props.rounds}</NumberContainer>
         <Text>User number was</Text>
         <NumberContainer>{props.userChoice}</NumberContainer>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   title: {
      fontSize: 25,
      marginBottom: 40
   }
})

export default GameOverScreen
