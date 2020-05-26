import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Colors from '../utils/Colors'
import MainButton from './../components/MainButton'

const GameOverScreen = (props) => {
   /* -------------------------------------------  State + Lifecycle ------------------------------------------------------------- */

   const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
   const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height)

   useEffect(() => {
      const updateLayout = () => {
         setAvailableDeviceWidth(Dimensions.get('window').width)
         setAvailableDeviceHeight(Dimensions.get('window').height)
      }

      Dimensions.addEventListener('change', updateLayout)

      return () => {
         Dimensions.removeEventListener('change', updateLayout)
      }
   })

   /* -------------------------------------------  Render ---------------------------------------------------------------- */
   return (
      <ScrollView>
         <View style={styles.screen}>
            <Text style={styles.title}>The Game is Over!</Text>
            <View
               style={{
                  ...styles.imageContainer,
                  width: availableDeviceWidth * 0.5,
                  height: availableDeviceWidth * 0.5,
                  borderRadius: (availableDeviceWidth * 0.7) / 2,
                  marginVertical: availableDeviceHeight / 30,
               }}
            >
               {/* For Local Image */}
               <Image style={styles.image} source={require('../assets/gameOver.png')} resizeMode="cover"></Image>
               {/* For Web Image */}
               {/* <Image fadeDuration={1000} style={styles.image} source={{ uri: 'imageuri' }} resizeMode="cover"></Image> */}
            </View>
            <Text>
               Phone <Text style={styles.highlight}>rounds</Text>
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
      borderWidth: 3,
      borderColor: 'black',
      overflow: 'hidden',
   },
   image: {
      width: '100%',
      height: '100%',
   },
   highlight: {
      color: Colors.accent,
   },
})

export default GameOverScreen
