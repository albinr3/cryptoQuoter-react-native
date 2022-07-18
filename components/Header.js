import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={s.header}>CRYPTO COINS</Text>
    </SafeAreaView>
  )
}

export default Header

const s = StyleSheet.create({
    header: {
        fontFamily: "Lato-Black",
        color: "black",
        backgroundColor: "#5e49e2",
        padding: 15,
        textAlign: "center",
        fontSize: 20,
        color: "#FFF",
        marginBottom: 30,
        
    }
})