import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView, SafeAreaView, Modal, Pressable } from 'react-native';
import { useState, useEffect, useReducer, useRef } from 'react';
import Inputs from '../Inputs/Inputs';
import Svg, { Path} from 'react-native-svg';

const Data = ({ colorMode, openComponent, closeComponentProp }) => {
    const dropValue1Ref = useRef(null);
    const dropValue2Ref = useRef(null);
    const [closeComponent, setCloseComponent] = useState('0');
    // .....................
    const [userInputLog_1, setUserInputLog_1] = useState('');
    const [inputCalculatedValue_1, setInputCalculatedValue_1] = useState('');
    const [drop1Value, setDrop1Value] = useState('Kilometer');
    const [drop1ValueUnit, setDrop1ValueUnit] = useState('km');
    const [drop1Close, setDrop1Close] = useState(false);
    const [Layout1leftWidth, setlayout1leftWidth] = useState(0);
    const [Layout1MainWidth, setlayout1MainWidth] = useState(0);
    // .....................
    const [drop2Value , setDrop2Value] = useState('Kilometer')
    const [drop2ValueUnit , setDrop2ValueUnit] = useState('km')
    const [drop2Close, setDrop2Close] = useState(false);
    const [Layout2leftWidth, setlayout2leftWidth] = useState(0);
    const [Layout2MainWidth, setlayout2MainWidth] = useState(0);
    const [userInputLog_2, setUserInputLog_2] = useState('');
    const [inputCalculatedValue_2, setInputCalculatedValue_2] = useState('');
    // ......................
    const [isActive , setIsActive] = useState(true);
    

    // useEffect(() => {
    //     console.log('..................................AREA.......')
    //     console.log('userInputLog_1 : ', userInputLog_1)
    //     console.log('inputCalculatedValue_1 : ', inputCalculatedValue_1)
    //     console.log('userInputLog_2 : ', userInputLog_2)
    //     console.log('inputCalculatedValue_2 : ', inputCalculatedValue_2)
    // }, [userInputLog_1,inputCalculatedValue_1,userInputLog_2,inputCalculatedValue_2])


    useEffect(() => {
        setCloseComponent(openComponent);
    }, [openComponent]);

    const GetInput1Log = (logData) => {
        setUserInputLog_1(logData);
    }

    const GetCalculated1Value = (calcData) => {
        setInputCalculatedValue_1(calcData);
    }

    const GetInput2Log = (logData) => {
        setUserInputLog_2(logData);
    }

    const GetCalculated2Value = (calcData) => {
        setInputCalculatedValue_2(calcData);
    }

    // useEffect(() => {
    //     console.log('Area : ', colorMode);
    // }, [colorMode])

    const SetAndCloseDrop1 = (value, valueUnit) => {
        setDrop1Value(value);
        setDrop1ValueUnit(valueUnit)
        // console.log('Value : ', value);
        // console.log('Value : ', valueUnit);
        setDrop1Close(false);
    }
    const SetAndCloseDrop2 = (value , valueUnit)=>{
        setDrop2Value(value);
        setDrop2ValueUnit(valueUnit)
        // console.log('Value : ', value);
        // console.log('Value : ', valueUnit);
        setDrop2Close(false);
    }

    // Handel Scroll Animation
    useEffect(() => {
        if (dropValue1Ref.current) {
            dropValue1Ref.current.scrollToEnd({ animated: true });
        }
    }, [userInputLog_1]);

    useEffect(() => {
        if (dropValue2Ref.current) {
            dropValue2Ref.current.scrollToEnd({ animated: true });
        }
    }, [userInputLog_2]);

    // useEffect(() => {
    //     console.log('.............')
    //     console.log('width onLayout1Main: ', Layout1MainWidth);
    //     console.log('width onLayout1left : ', Layout1leftWidth);
    // }, [Layout1leftWidth, Layout1MainWidth])

    const onLayout1left = (event) => {
        const { width } = event.nativeEvent.layout;
        setlayout1leftWidth(width);
    }
    const onLayout1Main = (event) => {
        const { width } = event.nativeEvent.layout;
        setlayout1MainWidth(width);
    }
    const onLayout2left = (event) => {
        const { width } = event.nativeEvent.layout;
        setlayout2leftWidth(width);
    }
    const onLayout2Main = (event) => {
        const { width } = event.nativeEvent.layout;
        setlayout2MainWidth(width);
    }

    const AreaData = [['Kilometer', 'km'], ['Meter', 'm'], ['Decimeter', 'dm'], ['Centimeter', 'cm'], ['Millimeter', 'mm'], ['Micrometer', 'μm'], ['Nanometer', 'nm'], ['Picometer', 'pm'], ['Nautrical mile', 'nmi'], ['Mile', 'mi'], ['Furlong', 'fur'], ['Fathom', 'ftm'], ['Yard', 'yd'], ['Foot', 'ft'], ['Inch', 'in'], ['Lunar distance', 'ld'], ['Astronomical unit', '☉'], ['Light year', 'ly']]
    const Area2Data = [['Kilometer', 'km'], ['Meter', 'm'], ['Decimeter', 'dm'], ['Centimeter', 'cm'], ['Millimeter', 'mm'], ['Micrometer', 'μm'], ['Nanometer', 'nm'], ['Picometer', 'pm'], ['Nautrical mile', 'nmi'], ['Mile', 'mi'], ['Furlong', 'fur'], ['Fathom', 'ftm'], ['Yard', 'yd'], ['Foot', 'ft'], ['Inch', 'in'], ['Lunar distance', 'ld'], ['Astronomical unit', '☉'], ['Light year', 'ly']]

    return (
        <SafeAreaView style={[styles.main, { backgroundColor: colorMode === 'black' ? 'black' : '#f0f0f0' }]}>
            <StatusBar
                backgroundColor={colorMode}
                barStyle={colorMode === '#f0f0f0' ? 'dark-content' : 'light-content'}
            />
            <View style={styles.areaTop}>
                <View style={styles.areaInputMain}>
                    <View style={styles.areaInputHead}>
                        <TouchableOpacity style={styles.InputHeadLeft} onPress={() => { closeComponentProp('close') }}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={colorMode === 'black' ? '#e8e8e8' : '#171717'}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                class="lucide lucide-move-left"
                            >
                                <Path d="M6 8L2 12L6 16" />
                                <Path d="M2 12H22" />
                            </Svg>
                        </TouchableOpacity>
                        <View style={styles.InputHeadRight}>
                            <Text style={[styles.InputHeadRightText, { color: colorMode === 'black' ? '#e8e8e8' : '#171717' }]}>{closeComponent}</Text>
                        </View>
                    </View>
                    <View style={styles.areaInputContainer}>
                        <View style={styles.areaInputTop}>
                            <View style={styles.dropDownParent} onLayout={onLayout1Main}>
                                <View style={styles.dropDownMain} onLayout={onLayout1left}>
                                    <Text style={styles.dropDownText}>{drop1Value}</Text>
                                    <Text style={styles.dropDownTextUnit}>{drop1ValueUnit}</Text>
                                    <TouchableOpacity style={styles.dropDownOpen} onPress={() => { setDrop1Close(true) }}><Text style={styles.dropDownOpenText}>&#8597;</Text></TouchableOpacity>
                                </View>
                                <View style={[styles.input1main, { maxWidth: Layout1MainWidth - Layout1leftWidth }]}>
                                    <ScrollView ref={dropValue1Ref} contentContainerStyle={styles.input1scroll} horizontal={true} >
                                        <Pressable style={styles.input1touch} onPress={()=>{setIsActive(true)}}>
                                            <View style={styles.InputSectionOneMain}>
                                                <Text style={[styles.InputSectionOneMainInput , {color: isActive==true?'#ff9400':'gray'}]}>{inputCalculatedValue_1===''?'0':inputCalculatedValue_1}</Text>
                                            </View>
                                        </Pressable>
                                    </ScrollView>
                                </View>
                            </View>
                            <Modal
                                animationType='fade'
                                transparent={true}
                                visible={drop1Close}
                                onRequestClose={() => {
                                    setDrop1Close(false);
                                }}
                            >
                                <View style={styles.topScrollDropDown} >
                                    <ScrollView style={styles.topDroDownScrollView}>
                                        <View style={styles.droDownTopPosition}>
                                            {Array.from({ length: AreaData.length }, (_, index) => (
                                                <TouchableOpacity key={index} style={[styles.dtp_btn, { backgroundColor: AreaData[index][0] === drop1Value ? '#ff990038' : '' }]} onPress={() => { SetAndCloseDrop1(AreaData[index][0], AreaData[index][1]) }}>
                                                    <Text style={[styles.droDownTopPositionText, { color: AreaData[index][0] === drop1Value ? '#ffa012' : '' }]}>{AreaData[index][0]}</Text>
                                                    <Text style={[styles.droDownTopPositionTextUnit, { color: AreaData[index][0] === drop1Value ? '#ffa012' : 'gray' }]}>{AreaData[index][1]}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </ScrollView>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.areaInputBottom}>
                            <View style={styles.dropDownParent} onLayout={onLayout2Main}>
                                <View style={styles.dropDownMain} onLayout={onLayout2left}>
                                    <Text style={styles.dropDownText}>{drop2Value}</Text>
                                    <Text style={styles.dropDownTextUnit}>{drop2ValueUnit}</Text>
                                    <TouchableOpacity style={styles.dropDownOpen} onPress={() => { setDrop2Close(true) }}><Text style={styles.dropDownOpenText}>&#8597;</Text></TouchableOpacity>
                                </View>
                                <View style={[styles.input1main, { maxWidth: Layout2MainWidth - Layout2leftWidth }]}>
                                    <ScrollView ref={dropValue2Ref} contentContainerStyle={styles.input1scroll} horizontal={true} >
                                        <Pressable style={styles.input1touch} onPress={()=>{setIsActive(false)}}>
                                            <View style={styles.InputSectionOneMain}>
                                                <Text style={[styles.InputSectionOneMainInput , {color: isActive==false?'#ff9400':'gray'}]}>{inputCalculatedValue_2===''?'0':inputCalculatedValue_2}</Text>
                                            </View>
                                        </Pressable>
                                    </ScrollView>
                                </View>
                            </View>
                            <Modal
                                animationType='fade'
                                transparent={true}
                                visible={drop2Close}
                                onRequestClose={() => {
                                    setDrop2Close(false);
                                }}
                            >
                                <View style={styles.topScrollDropDown2} >
                                    <ScrollView style={styles.topDroDownScrollView}>
                                        <View style={styles.droDownTopPosition}>
                                            {Array.from({ length: Area2Data.length }, (_, index) => (
                                                <TouchableOpacity key={index} style={[styles.dtp_btn, { backgroundColor: Area2Data[index][0] === drop2Value ? '#ff990038' : '' }]} onPress={() => { SetAndCloseDrop2(Area2Data[index][0], Area2Data[index][1]) }}>
                                                    <Text style={[styles.droDownTopPositionText, { color: Area2Data[index][0] === drop2Value ? '#ffa012' : '' }]}>{Area2Data[index][0]}</Text>
                                                    <Text style={[styles.droDownTopPositionTextUnit, { color: Area2Data[index][0] === drop2Value ? '#ffa012' : 'gray' }]}>{Area2Data[index][1]}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </ScrollView>
                                </View>
                            </Modal>

                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.areaBottom}>
                {
                    isActive?
                    <Inputs  previousValue={userInputLog_1} colorMode={colorMode} UserInputLog={GetInput1Log} CalculatedLog={GetCalculated1Value} disableBtnNumber={['3']} />
                    :
                    <Inputs previousValue={userInputLog_2} colorMode={colorMode} UserInputLog={GetInput2Log} CalculatedLog={GetCalculated2Value} disableBtnNumber={['3']} />
                    
                }
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    main: {
        // backgroundColor: '#372549',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaTop: {
        // backgroundColor:'brown',
        width: '100%',
        height: '55%',
        display: 'flex',
        justifyContent: 'top',
        alignItems: 'center',
    },
    areaBottom: {
        // backgroundColor:'purple',
        width: '100%',
        height: '45%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        color: 'white',
        fontSize: 30,
    },
    // btnClose: {
    //     backgroundColor: '#ff00001c',
    //     width: 60,
    //     height: 30,
    //     borderRadius: 10,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth: 0.6,
    //     borderColor: '#9a4040a6',
    // },
    // btnText: {
    //     color: '#ff0000db',
    // },
    areaInputMain: {
        // backgroundColor:'white',
        width: '95%',
        height: '36%',
        display: 'flex',
        justifyContent: 'flex-end',
        justifyContent: 'space-between'
    },
    areaInputHead: {
        // backgroundColor:'orange',
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    areaInputContainer: {
        // backgroundColor:'pink',
        width: '100%',
        height: '72%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    areaInputTop: {
        // backgroundColor: 'green',
        width: '100%',
        height: '40%',
        zIndex: 5
    },
    areaInputBottom: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '40%'
    },
    InputHeadLeft: {
        height: '100%',
        // backgroundColor:'gray',
        position: 'absolute',
        left: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputHeadRight: {
        height: '100%',
        // backgroundColor:'purple',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputHeadRightText: {
        fontSize: 20,
        fontWeight: `500`
    },
    // ... 
    dropDownParent: {
        // backgroundColor: 'red',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
        // alignItems:'flex-end'
    },
    dropDownMain: {
        // backgroundColor: 'black',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6,
        maxWidth: '50%'
    },
    dropDownText: {
        maxWidth: '80%',
        fontSize: 19,
        // backgroundColor:'red'
    },
    dropDownTextUnit: {
        // minWidth:30,
        // maxWidth:20,
        fontSize: 19,
        color: 'gray'
    },
    dropDownOpen: {
        width: 20,
        fontSize: 19,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'blue'

    },
    dropDownOpenText: {
        // backgroundColor:'yellow',
        fontSize: 28,
        fontWeight: `900`,
    },
    topScrollDropDown: {
        position: 'absolute',
        backgroundColor: '#202020',
        top: 120,
        left: 60,
        maxHeight: 350,
        padding: 2,
        borderRadius: 12,
        overflow:'hidden',
        elevation:10,
        shadowColor:'black'
    },
    topScrollDropDown2:{
        position: 'absolute',
        backgroundColor: '#202020',
        top: 200,
        left: 60,
        maxHeight: 350,
        padding: 2,
        borderRadius: 12,
        overflow:'hidden',
        elevation:10,
        shadowColor:'black'
    },
    topDroDownScrollView: {
        width: '100%',
        height: '100%',
        // backgroundColor: 'black'
    },
    droDownTopPosition: {
        borderRadius: 10,
        display: 'flex',
        gap: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    dtp_btn: {
        padding: 5,
        // backgroundColor: 'gray',
        display: 'flex',
        gap: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    droDownTopPositionText: {
        fontSize: 17,
    },
    droDownTopPositionTextUnit: {
        color: 'gray',
    },
    // dropDownInput:{

    // },
    input1main: {
        // backgroundColor:'red',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    input1scroll: {
        // backgroundColor: 'purple',
        // width:200,
        height: '100%',
        flexDirection: 'row',
        overflow: 'scroll',
        // display:'flex',
        // justifyContent:'flex-end',
    },
    input1touch: {
        // backgroundColor: 'blue',
    },
    InputSectionOneMain: {
        // backgroundColor: 'gray',
        height: '100%',
        // width:200,
        justifyContent: 'center',
        alignItems: 'flex-end',
        zIndex: 5,
    },
    InputSectionOneMainInput: {
        color: '#ff9400',
        fontSize: 32,
        writingDirection: 'rtl',
    }
});


export default Data;

