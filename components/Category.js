import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = ({item}) => {
  return (
    <View style={styles.category}>
      <Text>{item.titre}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({

    category:{

        flexDirection:'row',
        paddingHorizontal:20,
        borderRadius:10,
        width:150,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        backgroundColor:'rgba(194, 204, 211, 0.46)',
    }
})