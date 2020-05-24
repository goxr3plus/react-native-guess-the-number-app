import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import NumberInput from '../components/NumberInput'
import Colors from '../utils/Colors'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = (props) => {
   const [enteredValue, setEnteredValue] = useState('')
   const [confirmed, setConfirmed] = useState(false)
   const [selectedNumber, setSelectedNumber] = useState()

   const numberInputHandler = (inputText) => {
      setEnteredValue(inputText.replace(/[^0-9]/g, ''))
   }

   const resetInputHandler = () => {
      setEnteredValue('')
      setConfirmed(false)
   }

   const confirmInputHandler = () => {
      const chosenNumber = parseInt(enteredValue)
      console.log(chosenNumber)
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
         Alert.alert('Invalid Number!', 'Number has to be ( 1-99 )', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
         return
      }

      setConfirmed(true)
      setSelectedNumber(chosenNumber)
      setEnteredValue('')
      Keyboard.dismiss()
      props.startGameHandler(chosenNumber)
   }

   let confirmedOutput

   if (confirmed) {
      confirmedOutput = (
         <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" />
         </Card>
      )
   }

   return (
      <TouchableWithoutFeedback
         onPress={() => {
            Keyboard.dismiss()
         }}
      >
         <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
               <Text>Select a Number ( 1 - 99 )</Text>
               <NumberInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="type your number..."
                  blurOnSubmit
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  autoCorrect={false}
                  maxLength={2}
                  onChangeText={numberInputHandler}
                  value={enteredValue}
               ></NumberInput>
               <View style={styles.buttonContainer}>
                  <Button buttonStyle={{ ...styles.buttonStyle, backgroundColor: Colors.accent }} title="Reset" onPress={resetInputHandler} />
                  <Button
                     buttonStyle={{ ...styles.buttonStyle, backgroundColor: Colors.primary }}
                     title="Confirm"
                     onPress={confirmInputHandler}
                  />
               </View>
            </Card>
            {confirmedOutput}
         </View>
      </TouchableWithoutFeedback>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
   },
   title: {
      fontSize: 20,
      marginVertical: 10
   },
   inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center'
   },
   buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      paddingHorizontal: 15
   },
   buttonStyle: {
      width: 100
   },
   input: {
      width: 180,
      textAlign: 'center'
   },
   summaryContainer: {
      height: 190,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'space-between'
   }
})

export default StartGameScreen
