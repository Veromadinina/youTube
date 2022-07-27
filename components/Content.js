import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { categories } from '../constantes/categories'
import Category from './Category'
import { videos } from '../constantes/videos'
import Maxi from './cards/Maxi'

const Content = () => {
  return (
    <View>
      <Text style={styles.texto} >Catégories</Text>
      <FlatList
        data={categories}
        renderItem={({item})=><Category item={item}/>}
        keyExtractor={(item) => item.id}
        horizontal
      />

      <Text style={styles.textvid}  >Vidéos</Text>
      <FlatList
        data={videos}
        renderItem={({item})=><Maxi item={item}/>}
        keyExtractor={(item) => item.id}
        
      />

    </View>
  )
}

export default Content

const styles = StyleSheet.create({

texto:{
    fontSize:20,
    paddingHorizontal:20,
    top:-30,
    
},

textvid:{

    fontSize:20,
    paddingHorizontal:20,
    top:20,  



}


})