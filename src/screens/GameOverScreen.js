import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import { Button } from 'react-native-elements'
import Colors from '../utils/Colors'
import MainButton from './../components/MainButton'

const GameOverScreen = (props) => {
   return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <View style={styles.container}>
            <Text style={styles.title}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
               {/* For Local Image */}
               <Image style={styles.image} source={require('../assets/gameOver.png')} resizeMode="cover"></Image>
               {/* For Web Image */}
               {/* <Image fadeDuration={1000} style={styles.image} source={{ uri: 'imageuri' }} resizeMode="cover"></Image> */}
            </View>
            <Text>
               Phone <Text style={styles.hightlight}>rounds</Text>
            </Text>
            <NumberContainer>{props.rounds}</NumberContainer>
            <Text>Your number was</Text>
            <NumberContainer>{props.userChoice}</NumberContainer>
            <MainButton onPress={props.restart}>Restart</MainButton>
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
   },
   hightlight: {
      color: Colors.accent
   }
})

export default GameOverScreen
