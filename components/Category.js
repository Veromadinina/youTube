import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "@rneui/themed";

const Category = ({item}) => {
  return (
    <View style={styles.category}>
         <Button
              title ={item.titre}
              onPress={console.log("first")}
              buttonStyle={{ backgroundColor: 'rgba(245, 5, 129, 0.8)',borderRadius:10 }}
              containerStyle={{
                height: 35,
                width: 170,
                marginHorizontal: 5,
                marginVertical: 10,
              }}
              titleStyle={{
                color: 'white',
                marginHorizontal: 20,
              }}
            />
     
     
        
        
       
    </View>
  )
}

export default Category

const styles = StyleSheet.create({

    category:{

        justifyContent:"space-between",
        marginHorizontal:20,
        borderRadius:40
        
        

    }
})