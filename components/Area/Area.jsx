import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView , SafeAreaView} from 'react-native';
import { useState, useEffect } from 'react';
import Inputs from '../Inputs/Inputs';
import Svg, { Path, Line, Circle, PolyLine } from 'react-native-svg';




const Area = ({ colorMode, openComponent, closeComponentProp }) => {
    const [closeComponent, setCloseComponent] = useState('');
    const [userInputLog, setUserInputLog] = useState('');
    const [inputCalculatedValue, setInputCalculatedValue] = useState('');


    useEffect(() => {
        setCloseComponent(openComponent)
    }, [openComponent]);

    const GetInputLog = (logData) => {
        setUserInputLog(logData);
    }

    const GetCalculatedValue = (calcData) => {
        setInputCalculatedValue(calcData);
    }

    useEffect(() => {
        console.log('Area : ', colorMode);
    }, [colorMode])

    return (
        <View style={[styles.main, { backgroundColor: colorMode === 'black' ? 'black' : '#f0f0f0' }]}>
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
                            <View style={styles.dropDownParent}>
                                <View style={styles.dropDownMain}>
                                    <Text style={styles.dropDownText}>Meter</Text>
                                    <TouchableOpacity style={styles.dropDownOpen}><Text style={styles.dropDownOpenText}>&#8597;</Text></TouchableOpacity>
                                </View>
                                <View style={styles.InputSectionOneMain}>
                                    <Text>Vishal</Text>
                                </View>
                            </View>
                            <View style={styles.topScrollDropDown}>
                                <ScrollView style={styles.topDroDownScrollView}>
                                    <View style={styles.droDownTopPosition}>
                                        {Array.from({ length: 15 }, (_, index) => (
                                            <TouchableOpacity key={index} style={styles.dtp_btn}>
                                                <Text style={styles.droDownTopPositionText}>Vishal kumar</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.areaInputBottom}>
                            

                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.areaBottom}>
                <Inputs colorMode={colorMode} UserInputLog={GetInputLog} CalculatedLog={GetCalculatedValue} disableBtnNumber={['3']} />
            </View>
        </View>
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
        backgroundColor: 'green',
        width: '100%',
        height: '40%',
        zIndex: 5
    },
    areaInputBottom: {
        backgroundColor: 'blue',
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
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropDownMain: {
        backgroundColor: 'black',
        height: '100%',
        display: 'flex',
        // justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    dropDownText: {
        fontSize: 19,
        // backgroundColor:'red'
    },
    dropDownOpen: {
        fontSize: 19,
        // backgroundColor:'blue'

    },
    dropDownOpenText: {
        // backgroundColor:'yellow',
        fontSize: 28,
        fontWeight: `900`,
    },
    topScrollDropDown: {
        position: 'absolute',
        backgroundColor: 'brown',
        top: '110%',
        left: '10%',
        maxHeight: 300,
        padding: 2,
    },
    topDroDownScrollView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    droDownTopPosition: {
        borderRadius: 10,
        display: 'flex',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    dtp_btn: {
        padding: 5,
        backgroundColor: 'gray',
        display:'flex',
        gap:10
    },
    droDownTopPositionText: {
        fontSize: 17,
    },
    InputSectionOneMain: {
        backgroundColor: 'gray',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 5,
    }
});


export default Area;

