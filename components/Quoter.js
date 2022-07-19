import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Quoter = ({quoteResult, cryptoCoin, coin}) => {

    if(Object.keys(quoteResult).length == 0) return null;
    
  return (
    <View style={s.result}>
      <Text style={s.text}>
        <Text style={[s.span, s.price]}>{quoteResult.PRICE}</Text>
      </Text>

      <Text style={s.text}>
        Highest price of the day is: {"\n"}
        <Text style={s.span}>{quoteResult.HIGHDAY}</Text>
      </Text>

      <Text style={s.text}>
        Lowest price of the day is: {"\n"}
        <Text style={s.span}>{quoteResult.LOWDAY}</Text>
      </Text>

      <Text style={s.text}>
        24h Change: {" "}
        <Text style={s.span}>{quoteResult.CHANGEPCT24HOUR}%</Text>
      </Text>

      <Text style={s.text}>
        Last update: {" "}
        <Text style={s.span}>{quoteResult.LASTUPDATE}</Text>
      </Text>

    </View>
  )
}

export default Quoter

const s = StyleSheet.create({
  result: {
    backgroundColor: "#5e49e2",
    padding: 20,
  },
  text: {
    color: "white",
    fontFamily: "Lato-Regular",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center"
  },
  price: {
      fontSize: 38,
      textAlign: "center"
  },
  span: {
    fontFamily: "Lato-Black"
  }
})