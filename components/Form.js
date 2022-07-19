import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import ModalSelector from 'react-native-modal-selector';

const Form = ({setCryptoCoin, setCoin, setIsquoting}) => {
  //here we get the top 10 crypto from the api and the the list to the state and we use it on the picker modal
    useEffect(() => {
        const getApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
            const respose = await fetch(url);
            const result = await respose.json();
            console.log(result.Data)
            const topCrypto = result.Data.map((item) => (
              {key: item.CoinInfo.Id, label: item.CoinInfo.FullName, value: item.CoinInfo.Name}
            ) )
            setCryptoCoins(topCrypto);
        }
        getApi()
    }, [])

    const [cryptoCoins, setCryptoCoins] = useState([]);
    const [initialPicker, setInitialPicker] = useState(0);
    const [initialPicker2, setInitialPicker2] = useState(0);
  
    const pickerDataCoin = [
      {key: 0, label: '-- SELECT --', value: ''},
      {key: 1, label: 'DOLLAR USA', value: 'USD'},
      {key: 2, label: 'EURO', value: 'EUR'},
      {key: 3, label: 'DOMINICAN PESO', value: 'DOP'},
      
    ];

  return (
    <View>
      <Text style={s.label}>Coin</Text>
      <ModalSelector
            style={s.input}
            onChange={(option) => {
                setCoin(option.value)
                setInitialPicker(option.key)
              }}
            data={pickerDataCoin}
            selectedKey={initialPicker}
      />

      <Text style={s.label}>Crypto Coin</Text>
      <ModalSelector
            style={s.input}
            onChange={(option) => {
                setCryptoCoin(option.value)
                setInitialPicker2(option.key)
              }}
            data={cryptoCoins}
            selectedKey={initialPicker2}
      />

      <Pressable onPress={()=>setIsquoting(true)} style={s.btn}>
        <Text style={s.btnText}>Quote</Text>
      </Pressable>
    </View>
  )
}

export default Form

const s = StyleSheet.create({
    label: {
        fontFamily: "Lato-Black",
        fontSize: 22,
        marginVertical: 20,
        textTransform: "uppercase",
        color: "black"
    },
    btn: {
      backgroundColor: "#5e49e2",
      padding: 10,
      marginTop: 60
    },
    btnText: {
      color: "white",
      fontSize: 18,
      fontFamily: "Lato-Black",
      textTransform: "uppercase",
      textAlign: "center"
    }
})