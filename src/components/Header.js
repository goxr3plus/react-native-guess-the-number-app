import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
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
      backgroundColor: Platform.OS == 'android' ? Colors.primary : Colors.primary,
      justifyContent: 'center',
      alignContent: 'center',
      borderBottomColor: Platform.OS == 'ios' ? '#ccc' : 'transparent',
      borderBottomWidth: Platform.OS == 'ios' ? 1 : 0,
   },
   headerTitle: {
      fontSize: 18,
      color: Platform.OS == 'android' ? Colors.primary : 'white',
   },
})

export default Header
