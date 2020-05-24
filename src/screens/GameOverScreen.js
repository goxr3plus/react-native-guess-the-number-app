import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import { Button } from 'react-native-elements'

const GameOverScreen = (props) => {
   return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <View style={styles.container}>
            <Text style={styles.title}>The Game is Over!</Text>
            <Text>Number of rounds</Text>
            <NumberContainer>{props.rounds}</NumberContainer>
            <Text>User number was</Text>
            <NumberContainer>{props.userChoice}</NumberContainer>
            <Button title="Restart" onPress={props.restart}></Button>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: 300,
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   title: {
      fontSize: 25,
      marginBottom: 0
   }
})

export default GameOverScreen
