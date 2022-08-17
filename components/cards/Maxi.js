import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import { videos } from '../../constantes/videos'
import IconVideo from 'react-native-vector-icons/AntDesign'

const Maxi = ({item, navigation}) => {
  return (
    
        <ImageBackground style={styles.maxi} 
                        imageStyle= {{borderRadius:5}} 
                        source={item.image}

            
                         >
         <IconVideo 
                name='play' 
                size={45}
                color='rgba(247, 223, 235, 0.7)'
                onPress={() => {
                    /* 1. Naviguer vers la page detail avec params */
                    navigation.navigate('Detail', {
                      item: item,
                      
                    });
                }}
            
                />
            
    <Text style={styles.texMaxi}
          onPress={() => navigation.navigate('Detail')}
          >{item.titre}</Text>
           
        </ImageBackground>

  )
}

export default Maxi

const styles = StyleSheet.create({

    maxi:{
    flex:1,
    height:170,
    margin:20,
    marginTop:15,
    alignItems:'center',
    
    justifyContent: 'center',
    
    Top:5,
    },

    texVideo:{
        
        backgroundColor:'black',
        paddingHorizontal:20,
        justifyContent:'flex-end'
    
    },

    texMaxi:{
    
        backgroundColor:'black',
        color:'white',
        top:62,
        width:372

    }

   




})