import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Maxi = ({item}) => {
  return (
    <View style={styles.maxi}>
    <Text>{item.titre}</Text>
  </View>
  )
}

export default Maxi

const styles = StyleSheet.create({

    maxi:{
    height:150,
    top:20,
    width:300,
    margin:10,
    backgroundColor:"rgba(10, 148, 255, 0.21)",
    padding:5,
    borderColor:'black',
    borderWidth:2,
   alignItems:'center'





    }




})