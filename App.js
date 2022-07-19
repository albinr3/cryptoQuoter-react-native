
import React, {useState, useEffect} from 'react';

import {
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator
} from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import Quoter from './components/Quoter';

const App= () => {

  const [coin, setCoin] = useState("");
  const [cryptoCoin, setCryptoCoin] = useState("");
  const [quoteResult, setQuoteResult] = useState({});
  const [isQuoting, setIsquoting] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(isQuoting) {
      const quote = async () => {
        //Validation
        if([coin, cryptoCoin].includes("")) {
          Alert.alert("Error", "All the fields must be filled")
          return;
        } 
    
        const url= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`
        const response = await fetch(url)
        const result = await response.json();

        setLoading(true)
        
        //hide spinner and show result
        setTimeout( () => {
          setLoading(false)
          setQuoteResult(result.DISPLAY[cryptoCoin][coin])
          setIsquoting(false)
        }, 2000)
        
      }
      quote()
    }
  }, [isQuoting])
  

  return (
    <>
    <ScrollView>
      <Header/>
      <Image
        style={s.image}
        source={require("./assets/img/cryptomonedas.png")}
      />
      <View style={s.content}>
        <Form 
        setCoin={setCoin} 
        setCryptoCoin={setCryptoCoin} 
        setIsquoting={setIsquoting}
        />
      </View>
      <View style={{marginTop: 40}}>
        {loading ? <ActivityIndicator size={"large"} color={"#5e49e2"}/> : (
          <Quoter quoteResult={quoteResult} cryptoCoin={cryptoCoin} coin={coin}/>
        )}
      </View>
      
      </ScrollView>
    </>
  );
};

const s = StyleSheet.create({
  image:{
    width: "100%",
    height: 150
  },
  content: {
    marginHorizontal: "2.5%"
  }
});

export default App;
