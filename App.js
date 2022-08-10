import { View, Text, StatusBar, StyleSheet, Button } from 'react-native'
import React, {useState} from 'react'
import {customeStyle} from './src/assets/css/style'
import { TextInput } from 'react-native-paper';


export default function App() {

  const [counter, setcounter] = useState(0);
  const [text, settext] = useState("");

  const incremant = () =>{
    // console.log('increment')
    setcounter(counter + 1)
  }

  const decrement = () =>{
    // console.log('decrement')
    if(counter > 0 ){
      setcounter(counter - 1)
    }
   
  }

  return (
    <View style={{flex:1 }}>
      <StatusBar  backgroundColor={'#E9DAC1'} />
      <View style={customeStyle.mainContainer}>
        <Text style={customeStyle.text}>Pradeep Bhosle</Text>
        </View>
      <View style={customeStyle.viewSecound}>
        <Text style={customeStyle.text}>Ashwat Bhosle</Text>
        <Button  title={'-'}  onPress={() => decrement()}  />
        <Text style={customeStyle.text}>{counter}</Text>
        <Button  title={'+'} onPress={()=>incremant()} />
      </View>
      <View style={{flex:1}}>
        
          <TextInput label="Email" value={text} onChange={text => settext(text)} autoComplete="birthdate-day"  />
        
      </View>
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#f1f1f1'}}>
        <Text>Kevu Bhosle</Text>
      </View>
    </View>
  )
}

