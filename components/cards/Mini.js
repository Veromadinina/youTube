import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const Mini = ({item}) => {
  return (
    <ImageBackground style={styles.mini}  imageStyle= {{borderRadius:10}} source={item.image}>
      <View style={styles.contentText}>
        <Text style={styles.textMini}>{item.titre}</Text>
      </View>
    </ImageBackground>
  );
};

export default Mini;

const styles = StyleSheet.create({
  mini: {
    height: 100,
    width: 150,
    margin: 10,
    marginTop:15,
    marginBottom:10,
    backgroundColor: 'rgba(245, 5, 129, 0.10)',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },

  contentText: {
    backgroundColor: 'black',


  },
  textMini: {
    color: 'white',
    fontSize:13,
    padding:6,
  },
});
