import { View, Text, StyleSheet, TouchableOpacity , ScrollView } from "react-native";
// import Svg, { Path, Line, Circle } from 'react-native-svg';
import { currencySvg, lengthSvg, speedSvg , timeSvg ,financeSvg , internetDataSvg, discountSvg, temperatureSvg, areaSvg} from "./svg";



const Converter = () => {

    return (
        <View style={styles.main}>
            <View style={styles.fixedMain}>
                <ScrollView style={styles.scrConverter}>
                    <View style={styles.converters}>
                        <FeatureBox svg={currencySvg} title = {'Currency'}/>
                        <FeatureBox svg={lengthSvg} title = {'Length'}/>
                        <FeatureBox svg={speedSvg} title = {'Speed'}/>
                        <FeatureBox svg={timeSvg} title = {'Time'}/>
                        <FeatureBox svg={financeSvg} title = {'Finance'}/>
                        <FeatureBox svg={internetDataSvg} title = {'Data'}/>
                        <FeatureBox svg={discountSvg} title = {'Discount'}/>
                        <FeatureBox svg={temperatureSvg} title = {'Temperature'}/>
                        <FeatureBox svg={areaSvg} title = {'Area'}/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const FeatureBox = ({svg,title}) => {
    
    return (
        <TouchableOpacity style={styles.featureInter}>
            <View style = {styles.svgBox}>
                {svg}
            </View>
            <View style={styles.titleBox}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    main: {
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    fixedMain:{
        // backgroundColor:'purple',
        width:'100%',
        height:'95%',
        // justifyContent:'center',
        alignItems:'center',
    },
    scrConverter:{
        // backgroundColor: 'green',
        width: '100%',
        height: '100%',

    },
    converters: {
        // backgroundColor:'red',
        display:'flex',
        rowGap: 25,
        columnGap:15,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-around'
    },
    featureBox: {
        backgroundColor: 'gray',
        width: '30%',
        height: '15%'
    },
    featureInter: {
        backgroundColor: '#080808db',
        width: 135,
        height: 120,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:5,
        borderRadius:10
    },
    svgBox:{
        // backgroundColor:'blue',
        // width:'100%',
        // height:'70%',
    },
    titleBox:{
        // backgroundColor:'brown',

    },
    titleText:{
        fontSize:18,
        color:'#e6e6e6',
        fontWeight:`100`
    }
});


export default Converter;