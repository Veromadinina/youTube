import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import Icono from 'react-native-vector-icons/AntDesign'
import Iconi from 'react-native-vector-icons/AntDesign'
import { Card } from "@rneui/themed"
import Iconcoeur from 'react-native-vector-icons/Entypo'



const Detail = ({navigation,route}) => {

   /* 2. Recevoir le  param */
   const { item } = route.params;
   
  return (
      <View>   
           
           <View style={styles.detail}>

                <Icono name='left' size={35} color='white' 
                    onPress={() => navigation.navigate('Home')}
                />
                
                <Iconi name='right' size={35} color='white'/>
              
        
            </View>
          
                
            <ImageBackground
            style={styles.imageBg}
            source={item.image}>
            </ImageBackground>

            <View style={styles.texteTitre}>

            <Text style={styles.title}>{item.titre}</Text>
            <Iconcoeur name='heart'/>
            </View>
  
            </View>  

            

            
  )
}

export default Detail

const styles = StyleSheet.create({

  detail:{
    flexDirection:'row',
    height:90,
    backgroundColor:'rgba(245, 5, 129, 0.8)',
    justifyContent:'space-between',
    padding:20,
    
    },

  imageBg:{

height:300





  },

  texteTitre:{
    backgroundColor:'white',
    height:100,
    bottom:35,
    borderTopStartRadius:35,
    borderTopEndRadius:35




  },

  title:{
    color:'black',
    flex:1,
    fontSize:40,
    fontWeight:'bold',
    margin:20



  }


})