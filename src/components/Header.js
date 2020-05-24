import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

const Header = (props) => {
   return (
      <View style={styles.header}>
         <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   header: {
      paddingTop: 45,
      width: '100%',
      height: 90,
      flexDirection: 'row',
      backgroundColor: Colors.accent,
      justifyContent: 'center',
      alignContent: 'center'
   },
   headerTitle: {
      fontSize: 18
   }
})

export default Header
