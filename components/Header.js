import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icone from 'react-native-vector-icons/Entypo'
import Icona from 'react-native-vector-icons/Fontisto'


const Index = () => {
  return (
    
            <View style={styles.header}>

                <Icone name='menu' size={50} color='white' />
                <Icona name='search' size={35} color='white'/>

            </View>
       
       
  )
}

export default Index

const styles = StyleSheet.create({

header:{
flexDirection:'row',
height:90,
backgroundColor:'rgba(245, 5, 129, 0.8)',
justifyContent:'space-between',
padding:20,

}


})