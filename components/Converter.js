import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import Svg, { Path, Line, Circle } from 'react-native-svg';
import { currencySvg } from "./svg";



const styles = StyleSheet.create({
    main: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    converters: {
        backgroundColor: 'green',
        width: '95%',
        height: '97.5%',
    },
    featureBox: {
        backgroundColor: 'gray',
        width: '30%',
        height: '15%'
    },
    featureInter: {
        backgroundColor: 'pink',
        width: 120,
        height: 120
    },
    svgBox:{
        backgroundColor:'blue'
    },
    titleBox:{

    },
    titleText:{

    }

})

const Converter = () => {
    

    return (
        <View style={styles.main}>
            <View style={styles.converters}>
                <FeatureBox svg={currencySvg} title = {'Currency'}/>
            </View>
        </View>
    )
}

const FeatureBox = ({svg,title}) => {

    return (
        <View style={styles.featureInter}>
            <View style = {styles.svgBox}>
                {svg}
            </View>
            <View style={styles.titleBox}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </View>
    )
}
export default Converter;