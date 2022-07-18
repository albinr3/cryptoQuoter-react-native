import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import ModalSelector from 'react-native-modal-selector';

const Form = () => {

    useEffect(() => {
        const getApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
            const respose = await fetch(url);
            const result = await respose.json();
            console.log(result.Data)
        }
        getApi()
    }, [])

    const [coin, setCoin] = useState("");
    const [cryptoCoin, setCryptoCoin] = useState("");
    const [cryptoCoinS, setCryptoCoinS] = useState([]);
    const [initialPicker, setInitialPicker] = useState(0);
    const [initialPicker2, setInitialPicker2] = useState(0);
  
    const pickerDataCoin = [
      {key: 0, label: '-- SELECT --', value: ''},
      {key: 1, label: 'DOLLAR USA', value: 'USD'},
      {key: 2, label: 'EURO', value: 'EUR'},
      {key: 3, label: 'DOMINICAN PESO', value: 'DOP'},
      
    ];

    const pickerDataCryptoCoin = [
        {key: 0, label: '-- SELECT --', value: ''},
        {key: 1, label: 'BITCOIN', value: 'BTC'},
        {key: 2, label: 'ETHEREUM', value: 'ETH'},
        {key: 3, label: 'BINANCE BNB', value: 'BNB'},
        
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
            data={pickerDataCryptoCoin}
            selectedKey={initialPicker2}
      />
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
    }
})