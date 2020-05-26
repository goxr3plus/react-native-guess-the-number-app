import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../utils/Colors'

const MainButton = (props) => {
   return (
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
         <View style={{ ...styles.button, ...props.style }}>
            <Text style={{ ...styles.buttonText, ...props.textStyle }}>{props.children}</Text>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   button: {
      backgroundColor: Colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 25
   },
   buttonText: {
      color: 'white'
   }
})

export default MainButton