import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import GameOverScreen from './src/screens/GameOverScreen'
import GameScreen from './src/screens/GameScreen'
import StartGameScreen from './src/screens/StartGameScreen'

const fetchFonts = () => {
   return Font.loadAsync({
      openSans: require('./src/assets/fonts/OpenSans-Regular.ttf'),
      openSansBold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
   })
}

export default function App() {
   const [userNumber, setUserNumber] = useState()
   const [numberOfRounds, setNumberOfRounds] = useState(0)
   const [dataLoaded, setDataLoaded] = useState(false)

   if (!dataLoaded) {
      return (
         <AppLoading
            startAsync={fetchFonts}
            onFinish={setDataLoaded(true)}
            onError={(err) => Alert.alert('Failed loading fonts...', [{ text: 'Oupsss', style: 'cancel' }])}
         />
      )
   }

   const restart = () => {
      setNumberOfRounds(0)
      setUserNumber()
   }

   const startGameHandler = (userNumber) => {
      setUserNumber(userNumber)
   }

   const gameOverHandler = (rounds) => {
      setNumberOfRounds(rounds)
   }

   let content = <StartGameScreen startGameHandler={startGameHandler}></StartGameScreen>

   if (userNumber && numberOfRounds <= 0) {
      content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} restart={restart}></GameScreen>
   } else if (numberOfRounds > 0) {
      content = <GameOverScreen rounds={numberOfRounds} userChoice={userNumber} restart={restart}></GameOverScreen>
   }

   return (
      <SafeAreaView style={styles.screen}>
         <Header title={'Guess a number'}></Header>
         {content}
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
   },
})
