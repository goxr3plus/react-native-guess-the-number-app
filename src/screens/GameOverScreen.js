import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Colors from '../utils/Colors'
import MainButton from './../components/MainButton'

const GameOverScreen = (props) => {
   /* -------------------------------------------  Render ---------------------------------------------------------------- */
   return (
      <ScrollView>
         <View style={styles.screen}>
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
            <MainButton style={{ marginVertical: 10 }} onPress={props.restart}>
               Restart
            </MainButton>
         </View>
      </ScrollView>
   )
}

/* -------------------------------------------  Styles ---------------------------------------------------------------- */
const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   title: {
      fontSize: 25,
      marginBottom: 0,
   },
   imageContainer: {
      width: Dimensions.get('window').width * 0.5,
      height: Dimensions.get('window').width * 0.5,
      borderRadius: (Dimensions.get('window').width * 0.7) / 2, //For a perfect circle this must be always half of width and height,
      borderWidth: 3,
      borderColor: 'black',
      overflow: 'hidden',
      marginVertical: Dimensions.get('window').height / 30,
   },
   image: {
      width: '100%',
      height: '100%',
   },
   hightlight: {
      color: Colors.accent,
   },
})

export default GameOverScreen
