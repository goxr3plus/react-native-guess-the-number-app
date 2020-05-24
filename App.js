import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './src/components/Header'
import StartGameScreen from './src/screens/StartGameScreen'
import GameScreen from './src/screens/GameScreen'

export default function App() {
   const [userNumber, setUserNumber] = useState()

   const startGameHandler = (userNumber) => {
      setUserNumber(userNumber)
   }

   return (
      <View style={styles.screen}>
         <Header title={'Guess a number'}></Header>
         {!userNumber ? <StartGameScreen startGameHandler={startGameHandler}></StartGameScreen> : <GameScreen></GameScreen>}
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1
   }
})
