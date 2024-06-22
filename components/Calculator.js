
import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Vibration } from 'react-native';
import Svg, { Path, Line, Circle } from 'react-native-svg';


function Calculator() {
    const scrollViewRef = useRef();
    const [inputLog, setInputLog] = useState('');
    const [finalOutput, setFinalOutput] = useState(0);
    const [lastInt, setLastInt] = useState('');

    // const calculate = ()=>{
    //     inputLog.forEach(n => {
    //         let evaluate = null;
    //         if(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(n)){
    //             let intValue = Number(n);
    //             let strValue = intValue.toString();

    //             if(strValue.length!==0){

    //             }
    //         }
    //         switch (n) {
    //             case '+':
    //                 evaluate++;
    //                 break;
    //             case '-':
    //                 evaluate--;
    //                 break;
    //             case '/':
    //                 evaluate/=evaluate;
    //                 break;
    //             case '*':
    //                 evaluate*=evaluate;
    //                 break;
    //             case '%':
    //                 evaluate%=evaluate;
    //                 break;     
    //         }
    //     });
    // }

    const findDuplicate = (str) => {
        // console.log(str);
        let cnt = 0;
        for (const element of str) {
            if (cnt === 1) {
                return false;
            } else if (element === '.') {
                cnt++;
            }
        }
        return true;
    }

    // const 

    useEffect(() => {
        console.log('input Log', inputLog);
        console.log('lastInt', lastInt);

    }, [inputLog])

    const HandelOnPress = (value) => {
        Vibration.vibrate(10);
        switch (value) {
            case '.':
                if (findDuplicate(lastInt)) {
                    if (['%', '+', '-', '÷', 'x', '.'].includes(value)) {
                        const pvrVal = inputLog.length > 0 ? inputLog[inputLog.length - 1] : null;
                        if (['%', '+', '-', '÷', 'x', '.'].includes(pvrVal)) {
                            setInputLog(inputLog.substr(0, inputLog.length - 1) + value)
                        } else {
                            let input = inputLog;
                            input += value;
                            setInputLog(input);
                        }
    
                    } else {
    
                        let input = inputLog;
                        input += value;
                        setInputLog(input);
                    }
    
                    // ...............................
    
    
                    if (['%', '+', '-', '÷', 'x'].includes(value)) {
                        setLastInt('');
                    } else if (value === '.') {
                        const isPvrDot = lastInt.length > 0 ? lastInt[lastInt.length - 1] : null;
                        if (isPvrDot === '.') {
                            setLastInt(lastInt.substr(0, lastInt.length - 1) + value);
                        } else {
                            let onlyInt = lastInt;
                            onlyInt += value;
                            setLastInt(onlyInt);
                        }
                    } else {
                        let onlyInt = lastInt;
                        onlyInt += value;
                        setLastInt(onlyInt);
                    }
                }
                break;

            default:
                if (['%', '+', '-', '÷', 'x', '.'].includes(value)) {
                    const pvrVal = inputLog.length > 0 ? inputLog[inputLog.length - 1] : null;
                    if (['%', '+', '-', '÷', 'x', '.'].includes(pvrVal)) {
                        setInputLog(inputLog.substr(0, inputLog.length - 1) + value)
                    } else {
                        let input = inputLog;
                        input += value;
                        setInputLog(input);
                    }

                } else {

                    let input = inputLog;
                    input += value;
                    setInputLog(input);
                }

                // ...............................


                if (['%', '+', '-', '÷', 'x'].includes(value)) {
                    setLastInt('');
                } else if (value === '.') {
                    const isPvrDot = lastInt.length > 0 ? lastInt[lastInt.length - 1] : null;
                    if (isPvrDot === '.') {
                        setLastInt(lastInt.substr(0, lastInt.length - 1) + value);
                    } else {
                        let onlyInt = lastInt;
                        onlyInt += value;
                        setLastInt(onlyInt);
                    }
                } else {
                    let onlyInt = lastInt;
                    onlyInt += value;
                    setLastInt(onlyInt);
                }

                break;
        }
    }

    const DeleteLog = (val) => {
        Vibration.vibrate(10);
        if (val === 'AC') {
            setInputLog('');
            setLastInt('');
        } else if (val === 'X') {
            setInputLog(inputLog.substr(0, inputLog.length - 1))
            setLastInt(lastInt.substr(0, lastInt.length - 1))
        }
    }

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [inputLog]);



    return (
        <SafeAreaView style={styles.calculator_main}>
            <View style={styles.output_view}>
                <View style={styles.final_output_container}>
                    <ScrollView
                        contentContainerStyle={styles.final_output}
                        ref={scrollViewRef}
                    >
                        <Text style={styles.final_output_text}>{inputLog}</Text>
                    </ScrollView>
                </View>
                <View style={styles.input_record}>
                    <Text style={styles.input_record_text}>{finalOutput}</Text>
                </View>
            </View>
            <View style={styles.input_view}>
                <View style={styles.main_btn_view}>
                    {/* ........................... */}
                    <View style={styles.main_btn_view_arrange}>
                        <TouchableOpacity style={styles.cal_btn} onPress={() => { DeleteLog('AC') }}>
                            <Text style={[styles.cal_btn_text, styles.text_black]}  >AC</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cal_btn} onPress={() => { DeleteLog('X') }}>
                            <View style={[styles.cal_btn_text, styles.text_black]}>

                                <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={42}
                                    height={42}
                                    viewBox="1 -1 24 24"
                                    fill="none"
                                    stroke="#2a2a2a"
                                    strokeWidth="1.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <Path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
                                    <Line x1="17" x2="11" y1="9" y2="15" /><Line x1="11" x2="17" y1="9" y2="15" />
                                </Svg>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cal_btn} onPress={() => { HandelOnPress('%') }}>
                            <View style={[styles.cal_btn_text, styles.text_black]}>
                                <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="33"
                                    height="33"
                                    viewBox="0 -1 24 24"
                                    fill="none"
                                    stroke="#2a2a2a"
                                    strokeWidth="1.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <Line x1="19" x2="5" y1="5" y2="19" />
                                    <Circle cx="7" cy="7" r="2.6" />
                                    <Circle cx="17" cy="17" r="2.5" />
                                </Svg>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_operation]} onPress={() => { HandelOnPress('÷') }}>
                            <Text style={styles.cal_btn_text} >÷</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ........................................... */}
                    <View style={styles.main_btn_view_arrange}>
                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number]} onPress={() => { HandelOnPress('7') }}>
                            <Text style={styles.cal_btn_text} >7</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number]} onPress={() => { HandelOnPress('8') }}>
                            <Text style={styles.cal_btn_text}>8</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number]} onPress={() => { HandelOnPress('9') }}>
                            <Text style={styles.cal_btn_text}>9</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_operation]} onPress={() => { HandelOnPress('x') }}>
                            <Text style={styles.cal_btn_text} >×</Text>
                        </TouchableOpacity>
                    </View>

                    {/* .................................................. */}
                    <View style={styles.main_btn_view_arrange}>
                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number]} onPress={() => { HandelOnPress('4') }}>
                            <Text style={styles.cal_btn_text} >4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number]} onPress={() => { HandelOnPress('5') }}>
                            <Text style={styles.cal_btn_text}>5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number]} onPress={() => { HandelOnPress('6') }}>
                            <Text style={styles.cal_btn_text} >6</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_operation]} onPress={() => { HandelOnPress('-') }}>
                            <View style={styles.cal_btn_text}>
                                <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="2 1 20 20"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth={2.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <Path d="M5 12h14" />
                                </Svg>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* ........................................................ */}
                    <View style={styles.main_btn_view_arrange}>
                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number]} onPress={() => { HandelOnPress('1') }}>
                            <Text style={styles.cal_btn_text} >1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number]} onPress={() => { HandelOnPress('2') }}>
                            <Text style={styles.cal_btn_text}>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number]} onPress={() => { HandelOnPress('3') }}>
                            <Text style={styles.cal_btn_text}>3</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_operation]} onPress={() => { HandelOnPress('+') }}>
                            <Text style={styles.cal_btn_text}>+</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ................................................................ */}
                    <View style={styles.main_btn_view_arrange}>
                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number, styles.take_two_width]} onPress={() => { HandelOnPress('0') }}>
                            <Text style={styles.cal_btn_text}>0</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number]} onPress={() => { HandelOnPress('.') }}>
                            <Text style={styles.cal_btn_text}>.</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_operation]} >
                            <Text style={styles.cal_btn_text}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    calculator_main: {
        width: '88%',
        height: '95%',
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'center',

    },
    output_view: {
        width: '100%',
        height: '47%'
    },
    input_view: {
        width: '100%',
        height: '52%',

    },
    main_btn_view: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        rowGap: 1,
    },
    main_btn_view_arrange: {
        width: '100%',
        height: '18%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cal_btn: {
        width: '23%',
        height: '100%',
        backgroundColor: '#a5a5a5',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    take_two_width: {
        width: '48%',
        height: '100%',
    },
    cal_btn_text: {
        fontSize: 30,
        color: 'white'
    },
    cal_btn_operation: {
        backgroundColor: '#ff9f0a',
        color: 'white',
    },
    cal_btn_number: {
        backgroundColor: '#333333',
        color: 'white',
    },
    text_black: {
        color: '#2a2a2a',
    },
    final_output_container: {
        height: '85%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    input_record: {
        width: '100%',
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10,
        overflow: 'scroll',
    },
    final_output: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 10,


    },
    final_output_text: {
        fontSize: 45,
        color: 'white',
        textAlign: 'left'
    },
    input_record_text: {
        fontSize: 30,
        color: '#eeeeee',
    }
})
export default Calculator;