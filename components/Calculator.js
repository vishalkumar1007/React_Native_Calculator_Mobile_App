
import { SafeAreaView, View, Text, Button, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    calculator_main: {
        // backgroundColor: 'black',
        width: '94%',
        height: '96%',
        display:'flex',
        rowGap: 20,
    },
    output_view: {
        // backgroundColor: 'orange',
        width: '100%',
        height: '39%'
    },
    input_view: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '60%',
        
    },
    main_btn_view:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        width:'100%',
        height:'100%',
        justifyContent:'space-between',
        rowGap:25,
    },
    cal_btn: {
        width: 90,
        height: 90,
        backgroundColor: '#a5a5a5',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cal_btn_text: {
        fontSize: 40,
        color: 'white'
    },
    cal_btn_operation: {
        backgroundColor:'#ff9f0a',
        color:'white',
    },
    cal_btn_number: {
        backgroundColor:'#333333',
        color:'white',
    },
    take_two_width:{
        width:200,
        height:100,
    },
    text_black:{
        color:'#161616',
    },
    final_output:{
        // backgroundColor:'red',
        width:'100%',
        height:'87%',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        paddingRight:10,
    },
    final_output_text:{
        // backgroundColor:'black',
        fontSize:60,
        color:'white',
        
    },
    input_record:{
        // backgroundColor:'green',
        width:'100%',
        height:'13%',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        paddingRight:10,
    },
    input_record_text:{
        fontSize:35,
        color:'#eeeeee',
    }
})

function Calculator() {
    return (
        <SafeAreaView style={styles.calculator_main}>
            <View style={styles.output_view}>
                <View style={styles.final_output}>
                    <Text style={styles.final_output_text}>10+10</Text>
                </View>
                <View style={styles.input_record}>
                    <Text style={styles.input_record_text}>= 20</Text>
                </View>
            </View>
            <View style={styles.input_view}>
                <View style={styles.main_btn_view}>
                    <View style={styles.cal_btn}>
                        <Text style={[styles.cal_btn_text, styles.text_black]}>AC</Text>
                    </View>
                    <View style={styles.cal_btn}>
                        <Text style={[styles.cal_btn_text, styles.text_black]}>+/-</Text>
                    </View>
                    <View style={styles.cal_btn}>
                        <Text style={[styles.cal_btn_text, styles.text_black]}>%</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_operation]}>
                        <Text style={styles.cal_btn_text}>÷</Text>
                    </View>

                    <View style={[styles.cal_btn, styles.cal_btn_number]}>
                        <Text style={styles.cal_btn_text}>7</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_number]}>
                        <Text style={styles.cal_btn_text}>8</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_number]}>
                        <Text style={styles.cal_btn_text}>9</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_operation]}>
                        <Text style={styles.cal_btn_text}>×</Text>
                    </View>

                    <View style={[styles.cal_btn, styles.cal_btn_number]}>
                        <Text style={styles.cal_btn_text}>4</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_number]}>
                        <Text style={styles.cal_btn_text}>5</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_number]}>
                        <Text style={styles.cal_btn_text}>6</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_operation]}>
                        <Text style={styles.cal_btn_text}>-</Text>
                    </View>

                    <View style={[styles.cal_btn, styles.cal_btn_number]}>
                        <Text style={styles.cal_btn_text}>1</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_number]}>
                        <Text style={styles.cal_btn_text}>2</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_number]}>
                        <Text style={styles.cal_btn_text}>3</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_operation]}>
                        <Text style={styles.cal_btn_text}>+</Text>
                    </View>

                    <View style={[styles.cal_btn, styles.cal_btn_number,styles.take_two_width]}>
                        <Text style={styles.cal_btn_text}>0</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_number]}>
                        <Text style={styles.cal_btn_text}>.</Text>
                    </View>
                    <View style={[styles.cal_btn, styles.cal_btn_operation]}>
                        <Text style={styles.cal_btn_text}>=</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Calculator;