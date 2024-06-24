
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Calculator from './components/Calculator';
import Converter from './components/Converter';
import { useState } from 'react';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  option: {
    width: '100%',
    height: '4%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 25
  },
  option_text: {
    fontSize: 20,
    fontWeight: '500',
    color:'gray'
  },
  output: {
    width: '100%',
    height: '96%'
  },
  active:{
    color:'white',
  }
});

function App(): React.JSX.Element {
  const [activeElement, setActiveElement] = useState('cal');

  function Active(value: string){
    if(value !== activeElement){
      setActiveElement(value);
    }
  }



  return (
    <View style={styles.main}>
      <View style={styles.option}>
        <TouchableOpacity onPress={() => Active('cal')} disabled={activeElement === 'cal'}>
          <Text style={[styles.option_text, { color: activeElement==='cal'?'white':'gray' }]}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Active('con')} disabled={activeElement === 'con'}>
          <Text style={[styles.option_text, { color: activeElement==='con'?'white':'gray' }]}>Converter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.output}>
        {
          activeElement==='cal'?<Calculator />:<Converter/>
        }
      </View>
    </View>
  );
}
export default App;
