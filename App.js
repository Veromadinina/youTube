import { StyleSheet, Text, View,Icon } from 'react-native'
import React from 'react'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Header from './components/Header'
import Tendance from './components/Tendance'
import Content from './components/Content'

const App = () => {
  return (
    <View>
     <Header/>
     <Tendance/>
     <Content/>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})