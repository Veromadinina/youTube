import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import { videos } from '../../constantes/videos'

const Maxi = ({item}) => {
  return (
    
        <ImageBackground style={styles.maxi} imageStyle= {{borderRadius:5}} source={item.image}>
            <View style={styles.texVideo}>
    <Text style={styles.texMaxi}>{item.titre}</Text>
            </View>
        </ImageBackground>

  )
}

export default Maxi

const styles = StyleSheet.create({

    maxi:{
    height:170,
    margin:20,
    marginTop:15,
    
    justifyContent: 'flex-end',
    
    Top:5,
    },

    texVideo:{

        backgroundColor:'black',
        height:30,
        paddingHorizontal:20,
    
    },

    texMaxi:{

        color:'white'

    }

   




})