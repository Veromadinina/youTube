import { StyleSheet, Text, View,SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import { videos } from '../constantes/videos'
import Mini from '../components/cards/Mini'

const Tendance = () => {
  return (
    <View style={styles.tendance}>

        <Text style={styles.texte}>Tendances</Text>

        <FlatList
        data={videos.filter(item=>item.tendance == 1)}
        renderItem={({item})=><Mini item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
     
    </View>
  )
}

export default Tendance

const styles = StyleSheet.create({

tendance:{

   
    height:180,
    
    justifyContent:'space-between',
    paddingHorizontal:20,


},

texte:{
    fontSize:20,
    marginTop:2,




}



})