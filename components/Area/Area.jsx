import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import Inputs from '../Inputs/Inputs';

const Area = ({ openComponent, closeComponentProp }) => {
    const [closeComponent, setCloseComponent] = useState('');
    const [userInputLog, setUserInputLog] = useState('');
    const [inputCalculatedValue, setInputCalculatedValue] = useState('');

    useEffect(() => {
        // console.log('Area : ',openComponent);
        setCloseComponent(openComponent)
    }, [openComponent]);

    const GetInputLog = (logData) => {
        setUserInputLog(logData);
    }

    const GetCalculatedValue = (calcData) => {
        setInputCalculatedValue(calcData);
    }

    // useEffect(() => {
    //     console.log('Log : ', userInputLog);
    //     console.log('calc : ', inputCalculatedValue);
    // }, [userInputLog, inputCalculatedValue])

    return (
        <View style={styles.main}>

            <View style={styles.areaTop}>
                <Text style={styles.modalText}>{closeComponent}</Text>
                <TouchableOpacity style={styles.btnClose} onPress={() => { closeComponentProp('close') }}>
                    <Text style={styles.btnText}>Back</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.areaBottom}>
                <Inputs UserInputLog={GetInputLog} CalculatedLog={GetCalculatedValue} disableBtnNumber={['3']}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#372549',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaTop:{
        // backgroundColor:'brown',
        width:'100%',
        height:'55%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',    
    },
    areaBottom:{
        // backgroundColor:'purple',
        width:'100%',
        height:'45%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',        
    },
    modalText: {
        color: 'white',
        fontSize: 30,
    },
    btnClose: {
        backgroundColor: '#ff00001c',
        width: 60,
        height: 30,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.6,
        borderColor: '#9a4040a6',
    },
    btnText: {
        color: '#ff0000db',
    },
})
export default Area;