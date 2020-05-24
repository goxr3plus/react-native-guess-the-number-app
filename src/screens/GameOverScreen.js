import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import { Button } from 'react-native-elements'

const GameOverScreen = (props) => {
   return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <View style={styles.container}>
            <Text style={styles.title}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
               <Image style={styles.image} source={require('../assets/gameOver.png')} resizeMode="cover"></Image>
            </View>
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
      height: 650,
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   title: {
      fontSize: 25,
      marginBottom: 0
   },
   imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 150, //For a perfect circle this must be always half of width and height,
      borderWidth: 3,
      borderColor: 'black',
      overflow: 'hidden',
      marginVertical: 30
   },
   image: {
      width: '100%',
      height: '100%'
   }
})

export default GameOverScreen
