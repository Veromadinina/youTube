import { StyleSheet, Text, View,Icon } from 'react-native'
import React from 'react'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Header from './Header'
import Tendance from './Tendance'
import Content from './Content'
import Detail from './Detail'


const Home = ({navigation}) => {
  return (
    <View>

     <Header navigation={navigation}/>
     <Tendance/>
     <Content navigation={navigation}/>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})