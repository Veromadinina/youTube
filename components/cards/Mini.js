import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Mini = ({item}) => {
  return (
    <View style={styles.mini}>
      <Text>{item.titre}</Text>
    </View>
  )
}

export default Mini

const styles = StyleSheet.create({

mini:{
    height:100,
    width:150,
    margin:10,
    backgroundColor:"rgba(10, 148, 255, 0.21)",
    padding:5,
    borderColor:'black',
    borderWidth:2,
    borderRadius:10




}
})