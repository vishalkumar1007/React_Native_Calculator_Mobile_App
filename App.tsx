/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
 

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Calculator from './components/Calculator';


const styles = StyleSheet.create({
  main:{
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000000',
  },
});

function App(): React.JSX.Element {

  return (
    <View style={styles.main}>
      <Calculator/>
    </View>
  );
}
export default App;
