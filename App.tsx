
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, BackHandler, Button, Alert, Image, Pressable } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Calculator from './components/Calculator';
import Converter from './components/Converter';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
// import bg from './bg.avif'

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
    color: 'gray'
  },
  output: {
    width: '100%',
    height: '96%'
  },
  active: {
    color: 'white',
  },
  captureAll: {
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  makeBlur: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  alertBox: {
    // backgroundColor: 'green',
    width: '74%',
    height: 250,
    zIndex: 10,
  },
  alertTop:{
    // backgroundColor:'gray',
    width:'100%',
    height:'40%',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  alertTopArrange:{
    // backgroundColor:'red',
    width:'85%',
    height:'85%',
  },
  alertBottom:{
    
    width:'100%',
    height:'60%',
    display:'flex',
    borderRadius:10,
    overflow:'hidden',
  },
  heading: {
    // backgroundColor: 'black',
    width: '100%',
    height: '34%',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  headingText:{
    color:'white',
    fontSize:18,
  },
  alertButtons: {
    // backgroundColor: 'blue',
    width: '100%',
    height: '66%',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row'
  },
  exitBtn:{
    backgroundColor:'#3f317f',
    width:90,
    height:35,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12
  },
  stayBtn:{
    backgroundColor:'#f5f5f5',
    width:90,
    height:35,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12
  },
  btnText:{
    color:'white',
    fontSize:17,
    fontWeight:`500`
  },
  btnText2:{
    color:'#514199',
    fontSize:17,
    fontWeight:`500`
  },
  exitImg: {
    width: '100%',
    height: '100%',
    objectFit:'contain'
  }
});

function App(): React.JSX.Element {
  const [activeElement, setActiveElement] = useState('cal');
  const [showAlert, setShowAlert] = useState(false);

  function Active(value: string) {
    if (value !== activeElement) {
      setActiveElement(value);
    }
  }

  useEffect(() => {
    const backAction = () => {
      setShowAlert(true);
      return true; 
    }

    const handleOnBack = BackHandler.addEventListener(
      'hardwareBackPress', backAction
    );

    return () => handleOnBack.remove();
  }, []);

  return (
    <View style={styles.main}>
      {showAlert && (
        <View style={styles.captureAll}>
          <BlurView
            style={styles.makeBlur}
            blurAmount={15}
          />
          <View style={styles.alertBox}>
            <View style={styles.alertTop}>
              <View style={styles.alertTopArrange}>
                <Image style={styles.exitImg} source={require('./img/DoExit.png')}></Image>
              </View>
            </View>
            <LinearGradient colors={['#36296e','#41337e','#58489f','#6a5ca3']} style={styles.alertBottom}>
              <View style={styles.heading}>
                <Text style={styles.headingText}>Are You Sure You Want To Exit</Text>
              </View>
              <View style={styles.alertButtons}>
                <TouchableOpacity style={styles.exitBtn} onPress={() => BackHandler.exitApp()} >
                  <Text style={styles.btnText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stayBtn} onPress={() => setShowAlert(false)} >
                  <Text style={styles.btnText2}>No</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient >
          </View>
        </View>
      )}
      <View style={styles.option}>
        <TouchableOpacity onPress={() => Active('cal')} disabled={activeElement === 'cal'}>
          <Text style={[styles.option_text, { color: activeElement === 'cal' ? 'white' : 'gray' }]}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Active('con')} disabled={activeElement === 'con'}>
          <Text style={[styles.option_text, { color: activeElement === 'con' ? 'white' : 'gray' }]}>Converter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.output}>
        {activeElement === 'cal' ? <Calculator /> : <Converter />}
      </View>
    </View>
  );
}
export default App;
