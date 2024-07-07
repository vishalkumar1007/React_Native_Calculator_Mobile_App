import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, Text, TextInput, Alert, TouchableOpacity , StyleSheet} from 'react-native';
import { Vibration } from 'react-native';
import Svg, { Path, Line, Circle } from 'react-native-svg';

const Inputs = ({colorMode,UserInputLog,CalculatedLog,disableBtnNumber}) => {
    const [inputLog, setInputLog] = useState('');
    const [userInputCalculation , setUserInputCalculation] = useState('');

    const Calculate = () => {
        let loopLimit = 1000;
        let newCopyInputLog = inputLog;
    
        while (['÷'].some(operator => newCopyInputLog.includes(operator)) && !['﹪', '+', '-', '×', '÷'].includes(newCopyInputLog[newCopyInputLog.length-1]) && loopLimit >= 0) {
            let lastValue = '';
            let divideIndex = -1;
    
            for (let i = 0; i < newCopyInputLog.length; i++) {
                if (['﹪', '+', '-', '×'].includes(newCopyInputLog[i])) {
                    lastValue = '';
                } else if ('÷' === newCopyInputLog[i]) {
                    divideIndex = i;
                    break;
                } else {
                    lastValue += newCopyInputLog[i];
                }
            }
    
            let nextValue = '';
            for (let k = divideIndex + 1; k < newCopyInputLog.length; k++) {
                if (['﹪', '+', '-', '×', '÷'].includes(newCopyInputLog[k])) {
                    break;
                } else {
                    nextValue += newCopyInputLog[k];
                }
            }
    
            const replaceStartIndex = divideIndex - lastValue.length;
            const replaceEndIndex = divideIndex + nextValue.length;
            const intLastValue = Number(lastValue);
            const intNextValue = Number(nextValue);
            const CalculateValue = String(intLastValue / intNextValue);
    
            newCopyInputLog = newCopyInputLog.substring(0, replaceStartIndex) + CalculateValue + newCopyInputLog.substring(replaceEndIndex + 1);
            loopLimit--;
        }
        
    
        while (['×'].some(operator => newCopyInputLog.includes(operator)) && !['﹪', '+', '-', '×', '÷'].includes(newCopyInputLog[newCopyInputLog.length-1]) && loopLimit >= 0) {
            let lastValue = '';
            let divideIndex = -1;
    
            for (let i = 0; i < newCopyInputLog.length; i++) {
                if (['﹪', '+', '-', '÷'].includes(newCopyInputLog[i])) {
                    lastValue = '';
                } else if ('×' === newCopyInputLog[i]) {
                    divideIndex = i;
                    break;
                } else {
                    lastValue += newCopyInputLog[i];
                }
            }
    
            let nextValue = '';
            for (let k = divideIndex + 1; k < newCopyInputLog.length; k++) {
                if (['﹪', '+', '-', '×', '÷'].includes(newCopyInputLog[k])) {
                    break;
                } else {
                    nextValue += newCopyInputLog[k];
                }
            }
    
            const replaceStartIndex = divideIndex - lastValue.length;
            const replaceEndIndex = divideIndex + nextValue.length;
            const intLastValue = Number(lastValue);
            const intNextValue = Number(nextValue);
            const CalculateValue = String(intLastValue * intNextValue);
    
            newCopyInputLog = newCopyInputLog.substring(0, replaceStartIndex) + CalculateValue + newCopyInputLog.substring(replaceEndIndex + 1);
            loopLimit--;
        }
        
        while (['﹪'].some(operator => newCopyInputLog.includes(operator)) && !['﹪', '+', '-', '×', '÷'].includes(newCopyInputLog[newCopyInputLog.length-1]) && loopLimit >= 0) {
            let lastValue = '';
            let divideIndex = -1;
    
            for (let i = 0; i < newCopyInputLog.length; i++) {
                if (['×', '+', '-', '÷'].includes(newCopyInputLog[i])) {
                    lastValue = '';
                } else if ('﹪' === newCopyInputLog[i]) {
                    divideIndex = i;
                    break;
                } else {
                    lastValue += newCopyInputLog[i];
                }
            }
    
            let nextValue = '';
            for (let k = divideIndex + 1; k < newCopyInputLog.length; k++) {
                if (['﹪', '+', '-', '×', '÷'].includes(newCopyInputLog[k])) {
                    break;
                } else {
                    nextValue += newCopyInputLog[k];
                }
            }
    
            const replaceStartIndex = divideIndex - lastValue.length;
            const replaceEndIndex = divideIndex + nextValue.length;
            const intLastValue = Number(lastValue);
            const intNextValue = Number(nextValue);
            const CalculateValue = String(intLastValue % intNextValue);
    
            newCopyInputLog = newCopyInputLog.substring(0, replaceStartIndex) + CalculateValue + newCopyInputLog.substring(replaceEndIndex + 1);
            loopLimit--;
        }
    
        
        while (['+', '-'].some(operator => newCopyInputLog.includes(operator)) && !['﹪', '+', '-', '×', '÷'].includes(newCopyInputLog[newCopyInputLog.length-1]) && loopLimit >= 0) {
            let firstOperand = '';
            let operator = '';
            let secondOperand = '';
            let operator_index = 0;
            let lastIndex = 0;
            let allow = true;
    
            for (let i = 0; i < newCopyInputLog.length; i++) {
                if (allow === true && newCopyInputLog[0] === '-') {
                    firstOperand += '-';
                    allow = false;
                } else {
                    if (newCopyInputLog[i] === '+' || newCopyInputLog[i] === '-') {
                        operator = newCopyInputLog[i];
                        operator_index = i;
                        break;
                    } else {
                        firstOperand += newCopyInputLog[i];
                    }
                }
            }
            
            for (let j = operator_index + 1; j < newCopyInputLog.length; j++) {
                if (newCopyInputLog[j] === '+' || newCopyInputLog[j] === '-' || (newCopyInputLog.length - 1) === j) {
                    if ((newCopyInputLog.length - 1) === j) {
                        secondOperand += newCopyInputLog[j];
                        lastIndex = j;
                        break;
                    } else {
                        lastIndex = j;
                        break;
                    }
                } else {
                    secondOperand += newCopyInputLog[j];
                }
            }
            
            if (operator === '' || operator_index === 0) {
                break;
            }

            let internal_finalOutput = 0;
            const output = operator === '+' ? Number(firstOperand) + Number(secondOperand) : Number(firstOperand) - Number(secondOperand);
            
            if ((newCopyInputLog.length - 1) === lastIndex) {
                internal_finalOutput = newCopyInputLog.substring(0, 0) + output + newCopyInputLog.substring(lastIndex + 1);
            } else {
                internal_finalOutput = newCopyInputLog.substring(0, 0) + output + newCopyInputLog.substring(lastIndex);
            }
            // console.log('entry 4 check 3: ', newCopyInputLog , ' : ', internal_finalOutput);
            
            newCopyInputLog = internal_finalOutput;
            loopLimit--;
            // console.log('entry 4 check 4: ', newCopyInputLog , ' : ', internal_finalOutput);
        }
    
        if (['﹪', '+', '-', '×', '÷'].includes(newCopyInputLog[newCopyInputLog.length - 1])) {
            newCopyInputLog = newCopyInputLog.substring(0, newCopyInputLog.length - 1);
        }

        setUserInputCalculation(newCopyInputLog==='NaN'?'Error':newCopyInputLog);
    };

    useEffect(()=>{
        UserInputLog(inputLog===''?'0':inputLog);
    },[inputLog]);
    
    useEffect(()=>{
        CalculatedLog(userInputCalculation===''?'0':userInputCalculation);
    },[userInputCalculation]);


    useEffect(()=>{
        Calculate();
    },[inputLog])

    const HandelMultipleDot = (str) => {
        let dotCnt = 0;
        for (let i = str.length - 1; i >= 0; i--) {
            if (['﹪', '+', '-', '÷', '×'].includes(str[i])) {
                return dotCnt >= 1 ? false : true;
            }
            if (dotCnt >= 1) {
                return false;
            } else if (str[i] === '.') {
                dotCnt++;
            }
        }
        return true;
    }

    // Handel Common Operator
    const HandelCommonInput = (value) => {
        if (['﹪', '+', '-', '÷', '×', '.'].includes(value)) {
            const pvrVal = inputLog.length > 0 ? inputLog[inputLog.length - 1] : null;
            if (['﹪', '+', '-', '÷', '×', '.'].includes(pvrVal)) {
                setInputLog(inputLog.substring(0, inputLog.length - 1) + value);

            }
            else {
                let input = inputLog;
                input += value;
                setInputLog(input);
            }

        } else {
            let input = inputLog;
            input += value;
            setInputLog(input);
        }
    }

    // Handel User Input
    const HandelOnPress = (value) => {
        Vibration.vibrate(10);
        if (value === '.') {
            if (HandelMultipleDot(inputLog)) {
                HandelCommonInput(value);
            }
        } else if (['﹪', '+', '-', '÷', '×', '.'].includes(value) && inputLog.length === 0) {
            setInputLog(`0${value}`);
        } else {
            HandelCommonInput(value);
        }
    }

    // Handel The Delete Log 
    const DeleteLog = (val) => {
        Vibration.vibrate(10);
        if (val === 'AC') {
            setInputLog('');
        } else if (val === 'X') {
            setInputLog(inputLog.substring(0, inputLog.length - 1));
        }
    }

    return (
        <View style={styles.main}>
            <SafeAreaView style={styles.calculator_main}>
                
                <View style={styles.input_view}>
                    <View style={styles.main_btn_view}>
                        {/* ........................... */}
                        <View style={styles.main_btn_view_arrange}>
                            <TouchableOpacity style={[styles.cal_btn ,colorMode==='black'?DarkStyles.cal_btn_T1:LightStyles.cal_btn_T1, (['1'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnMain:disableLightBtn.btnMain):(null))]} onPress={() => { DeleteLog('AC') }} disabled={['1'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text, styles.text_black,colorMode==='black'?DarkStyles.cal_btn_text_T1:LightStyles.cal_btn_text_T1 , (['1'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnText_T1:disableLightBtn.btnText_T1):('#ff9b00'))]}  >AC</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn , colorMode==='black'?DarkStyles.cal_btn_T1:LightStyles.cal_btn_T1, (['2'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnMain:disableLightBtn.btnMain):(null))]} onPress={() => { DeleteLog('X') }} disabled={['2'].some(operator => disableBtnNumber.includes(operator))}>
                                <View style={[styles.cal_btn_text,colorMode==='black'?DarkStyles.cal_btn_text_T1:LightStyles.cal_btn_text_T1, styles.text_black]}>

                                    <Svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={42}
                                        height={42}
                                        viewBox="1 0 24 24"
                                        fill="none"
                                        stroke={(['2'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?'#373737':'#ffd89b'):(colorMode==='black'?'black':'#ff9b00'))}
                                        strokeWidth="1.4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <Path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
                                        <Line x1="17" x2="11" y1="9" y2="15" /><Line x1="11" x2="17" y1="9" y2="15" />
                                    </Svg>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn , colorMode==='black'?DarkStyles.cal_btn_T1:LightStyles.cal_btn_T1 , (['3'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnMain:disableLightBtn.btnMain):(null))]} onPress={() => { HandelOnPress('﹪') }} disabled={['3'].some(operator => disableBtnNumber.includes(operator))}>
                                <View style={[styles.cal_btn_text,colorMode==='black'?DarkStyles.cal_btn_text_T1:LightStyles.cal_btn_text_T1, styles.text_black]} >
                                    <Svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="35.5"
                                        height="35.5"
                                        viewBox="0 -1 24 24"
                                        fill="none"
                                        stroke={(['3'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?'#373737':'#ffd89b'):(colorMode==='black'?'black':'#ff9b00'))}
                                        strokeWidth="1.6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <Line x1="19" x2="5" y1="5" y2="19" />
                                        <Circle cx="7" cy="7" r="2.6" />
                                        <Circle cx="17" cy="17" r="2.5" />
                                    </Svg>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_operation , (['4'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnMain_T2:disableLightBtn.btnMain_T2):(null)), colorMode==='black'?DarkStyles.cal_btn_T2:LightStyles.cal_btn_T2]} onPress={() => { HandelOnPress('÷') }} disabled={['4'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text, colorMode==='black'?DarkStyles.cal_btn_text_T2:LightStyles.cal_btn_text_T2 , (['4'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnText_T2:disableLightBtn.btnText_T2):(null))]} >÷</Text>
                            </TouchableOpacity>
                        </View>

                        {/* ........................................... */}
                        <View style={styles.main_btn_view_arrange}>
                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number , styles[['5'].some(operator => disableBtnNumber.includes(operator)) ? 'make_disable_c3' : ''], colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('7') }} disabled={['5'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3]} >7</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number , styles[['6'].some(operator => disableBtnNumber.includes(operator)) ? 'make_disable_c3' : ''], colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('8') }} disabled={['6'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3]}>8</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number , styles[['7'].some(operator => disableBtnNumber.includes(operator)) ? 'make_disable_c3' : ''], colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('9') }} disabled={['7'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3]}>9</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_operation , (['8'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnMain_T2:disableLightBtn.btnMain_T2):(null)), colorMode==='black'?DarkStyles.cal_btn_T2:LightStyles.cal_btn_T2]} onPress={() => { HandelOnPress('×') }} disabled={['8'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text, colorMode==='black'?DarkStyles.cal_btn_text_T2:LightStyles.cal_btn_text_T2 , (['8'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnText_T2:disableLightBtn.btnText_T2):(null))]} > × </Text>
                            </TouchableOpacity>
                        </View>

                        {/* .................................................. */}
                        <View style={styles.main_btn_view_arrange}>
                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number , styles[['9'].some(operator => disableBtnNumber.includes(operator)) ? 'make_disable_c3' : ''], colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('4') }} disabled={['9'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3]} >4</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number , styles[['10'].some(operator => disableBtnNumber.includes(operator)) ? 'make_disable_c3' : ''], colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('5') }} disabled={['10'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3]}>5</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number , styles[['11'].some(operator => disableBtnNumber.includes(operator)) ? 'make_disable_c3' : ''], colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('6') }} disabled={['11'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3]} >6</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_operation , (['12'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnMain_T2:disableLightBtn.btnMain_T2):(null)), colorMode==='black'?DarkStyles.cal_btn_T2:LightStyles.cal_btn_T2]} onPress={() => { HandelOnPress('-') }} disabled={['12'].some(operator => disableBtnNumber.includes(operator))}>
                                <View style={[styles.cal_btn_text, colorMode==='black'?DarkStyles.cal_btn_text_T2:LightStyles.cal_btn_text_T2]}>
                                    <Svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="2 1 20 20"
                                        fill="none"
                                        stroke={(['12'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?'#debb83':'#ffd38e'):('white'))}
                                        strokeWidth={2}
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
                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number , styles[['13'].some(operator => disableBtnNumber.includes(operator)) ? 'make_disable_c3' : ''], colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('1') }} disabled={['13'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3]} >1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number , styles[['14'].some(operator => disableBtnNumber.includes(operator)) ? 'make_disable_c3' : ''], colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('2') }} disabled={['14'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3]}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number , styles[['15'].some(operator => disableBtnNumber.includes(operator)) ? 'make_disable_c3' : ''], colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('3') }} disabled={['15'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3]}>3</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_operation , (['16'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnMain_T2:disableLightBtn.btnMain_T2):(null)), colorMode==='black'?DarkStyles.cal_btn_T2:LightStyles.cal_btn_T2]} onPress={() => { HandelOnPress('+') }} disabled={['16'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text, colorMode==='black'?DarkStyles.cal_btn_text_T2:LightStyles.cal_btn_text_T2 , (['16'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnText_T2:disableLightBtn.btnText_T2):(null))]}>+</Text>
                            </TouchableOpacity>
                        </View>

                        {/* ................................................................ */}
                        <View style={styles.main_btn_view_arrange}>
                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number, styles.take_two_width , styles[['17'].some(operator => disableBtnNumber.includes(operator)) ? 'make_disable_c3' : ''], colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('0') }} disabled={['17'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3]}>0</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_number , (['18'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnMain:disableLightBtn.btnMain):(null)), colorMode==='black'?DarkStyles.cal_btn_T3:LightStyles.cal_btn_T3]} onPress={() => { HandelOnPress('.') }} disabled={['18'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text , colorMode==='black'?DarkStyles.cal_btn_text_T3:LightStyles.cal_btn_text_T3 , (['18'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnText_T4_dot:disableLightBtn.btnText_T4_dot):('#ff9b00'))]}>.</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.cal_btn, styles.cal_btn_operation , (['19'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnMain_T2:disableLightBtn.btnMain_T2):(null)), colorMode==='black'?DarkStyles.cal_btn_T2:LightStyles.cal_btn_T2]} disabled={['19'].some(operator => disableBtnNumber.includes(operator))}>
                                <Text style={[styles.cal_btn_text, colorMode==='black'?DarkStyles.cal_btn_text_T2:LightStyles.cal_btn_text_T2 , (['19'].some(operator => disableBtnNumber.includes(operator))===true ? (colorMode==='black'?disableDarkBtn.btnText_T2:disableLightBtn.btnText_T2):(null))]}>=</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        // backgroundColor: '#219ebc',
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    calculator_main: {
        // backgroundColor: 'green',
        width: '88%',
        height: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignSelf: 'center',
    },
    input_view: {
        // backgroundColor:'pink',
        width: '100%',
        height: '95%',
    },
    main_btn_view: {
        // backgroundColor: 'blue',
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
        backgroundColor: '#939393',
        borderRadius: 20,
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
        backgroundColor: '#f59500',
        color: 'white',
    },
    cal_btn_number: {
        backgroundColor: '#222222',
        color: 'white',
    },
    text_black: {
        color: '#2a2a2a',
        // fontWeight: 500
    },

    make_disable_T1: {
        backgroundColor: '#5e5e5e',
    },
    make_disable_T2: {
        backgroundColor: '#a36300',
    },
    make_disable_c3: {
        backgroundColor: '#121212',
    },
    
});

const DarkStyles = StyleSheet.create({
    cal_btn_T1:{
        backgroundColor:'#939393',
    },
    cal_btn_T2:{
        // backgroundColor:'blue',
    },
    cal_btn_T3:{
        backgroundColor:'#171717',
    },
    cal_btn_text_T1:{
        color:'black'
        
    },
    cal_btn_text_T2:{
        // backgroundColor:'blue',
        
    },
    cal_btn_text_T3:{
        // color:'#101010'  // black
    
    },
});

const LightStyles = StyleSheet.create({
    cal_btn_T1:{
        backgroundColor:'white',
    },
    cal_btn_T2:{
        // backgroundColor:'blue',
    },
    cal_btn_T3:{
        backgroundColor:'white',
    },
    cal_btn_text_T1:{
        color:'#ff9b00'
        
    },
    cal_btn_text_T2:{
        // backgroundColor:'blue',
        
    },
    cal_btn_text_T3:{
        color:'#101010'  // black

    },

})

const disableDarkBtn = StyleSheet.create({
    btnMain:{
        backgroundColor:'#848484'
    },
    btnMain_T2:{
        backgroundColor:'#ff9b00c4'
    },
    btnText_T1:{
        color:'#373737'
    },
    btnText_T2:{
        color:'#debb83'
    },
    btnText_T4_dot:{
        color:'#626262'
    }
})
const disableLightBtn = StyleSheet.create({
    btnMain:{
        backgroundColor:'#fbfbfb'
    },
    btnMain_T2:{
        backgroundColor:'#f19708'
    },
    btnText_T1:{
        color:'#ffd89b'
    },
    btnText_T2:{
        color:'#ffd38e'
    },
    btnText_T4_dot:{
        color:'#c1c1c1'
    }
})

export default Inputs;