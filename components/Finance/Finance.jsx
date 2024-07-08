import {View,Text,StyleSheet,TouchableOpacity,StatusBar} from 'react-native';
import {useState,useEffect} from 'react';
import Inputs from '../Inputs/Inputs';
import Svg, { Path, Line, Circle, PolyLine } from 'react-native-svg';
// import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Finance = ({colorMode, openComponent, closeComponentProp }) => {
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

    useEffect(()=>{
        console.log('Finance : ',colorMode);
    },[colorMode])
    

    return (
        <View style={[styles.main ,  {backgroundColor: colorMode==='black'?'black':'#f0f0f0'}]}>
            <StatusBar 
                backgroundColor={colorMode}
                barStyle={colorMode==='#f0f0f0'?'dark-content':'light-content'}
            />
            <View style={styles.FinanceTop}>
                <View style={styles.FinanceInputMain}>
                    <View style={styles.FinanceInputHead}>
                        <TouchableOpacity style={styles.InputHeadLeft} onPress={() => { closeComponentProp('close') }}>
                            <Svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke={colorMode==='black'?'#e8e8e8':'#171717'} 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                class="lucide lucide-move-left"
                            >
                                <Path d="M6 8L2 12L6 16"/>
                                <Path d="M2 12H22"/>
                            </Svg>
                        </TouchableOpacity>
                        <View style={styles.InputHeadRight}>
                            <Text style={[styles.InputHeadRightText , {color:colorMode==='black'?'#e8e8e8':'#171717'}] }>{closeComponent}</Text>
                        </View>
                    </View>
                    <View style={styles.FinanceInputContainer}>
                        <View style={styles.FinanceInputTop}>
                        {/* <Select name="selectedFruit">
                            <Option value="apple">Apple</Option>
                            <Option value="banana">Banana</Option>
                            <Option value="orange">Orange</Option>
                        </Select> */}
                        </View>
                        <View style = {styles.FinanceInputBottom}></View>
                    </View>
                </View>
            </View>
            <View style={styles.FinanceBottom}>
                <Inputs colorMode={colorMode} UserInputLog={GetInputLog} CalculatedLog={GetCalculatedValue} disableBtnNumber={['3']}/>
            </View>
        </View>
    
        // <Text style={[styles.modalText, {color: colorMode==='black'?'#f0f0f0':'black'}]}>{closeComponent}</Text>
        // <TouchableOpacity style={styles.btnClose} onPress={() => { closeComponentProp('close') }}>
        // <Text style={[styles.btnText ]}>Back</Text>
        // </TouchableOpacity>
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
    FinanceTop:{
        // backgroundColor:'brown',
        width:'100%',
        height:'55%',
        display:'flex',
        justifyContent:'top',
        alignItems:'center',    
    },
    FinanceBottom:{
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
    FinanceInputMain:{
        // backgroundColor:'white',
        width:'95%',
        height:'36%',
        display:'flex',
        justifyContent:'flex-end',
        justifyContent:'space-between'
    },
    FinanceInputHead:{
        // backgroundColor:'orange',
        width:'100%',
        height:'25%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    FinanceInputContainer:{
        // backgroundColor:'pink',
        width:'100%',
        height:'72%',
        display:'flex',
        justifyContent:'space-between'
    },
    FinanceInputTop:{
        // backgroundColor:'green',
        width:'100%',
        height:'40%'
    },
    FinanceInputBottom:{
        // backgroundColor:'blue',
        width:'100%',
        height:'40%'
    },
    InputHeadLeft:{
        height:'100%',
        // backgroundColor:'gray',
        position:'absolute',
        left:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    InputHeadLeftText:{
        fontSize:15
    },
    InputHeadRight:{
        height:'100%',
        // backgroundColor:'purple',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    InputHeadRightText:{
        fontSize:20,
        fontWeight:`500`
    }
})
export default Finance;