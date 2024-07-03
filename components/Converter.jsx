import { View, Text, StyleSheet, TouchableOpacity , ScrollView , Modal} from "react-native";
import { currencySvg, lengthSvg, speedSvg , timeSvg ,financeSvg , internetDataSvg, discountSvg, temperatureSvg, areaSvg} from "./svg";
import Area from "./Area/Area";
import {useEffect, useState} from 'react'

const Converter = () => {
    const [openComponent, setOpenComponent] = useState('close');

    useEffect(()=>{
        // console.log('step 7')
        console.log('this is component : ',openComponent)
        // console.log('step 8')
    },[openComponent])

    const openCurrentComponent = (titleSet)=>{ 
        // console.log('step 5')
        setOpenComponent(titleSet);
        // console.log('step 6')
        // console.log(titleSet)
    }

    return (
        <View style={styles.main}>
            <View style={styles.fixedMain}>
                <ScrollView style={styles.scrConverter}>
                    <View style={styles.converters}>
                        <FeatureBox svg={currencySvg} title = {'Currency'} currentComponent={(titleSet)=>openCurrentComponent(titleSet)}/>
                        <FeatureBox svg={lengthSvg} title = {'Length'} currentComponent={(titleSet)=>openCurrentComponent(titleSet)}/>
                        <FeatureBox svg={speedSvg} title = {'Speed'} currentComponent={(titleSet)=>openCurrentComponent(titleSet)}/>
                        <FeatureBox svg={timeSvg} title = {'Time'} currentComponent={(titleSet)=>openCurrentComponent(titleSet)}/>
                        <FeatureBox svg={financeSvg} title = {'Finance'} currentComponent={(titleSet)=>openCurrentComponent(titleSet)}/>
                        <FeatureBox svg={internetDataSvg} title = {'Data'} currentComponent={(titleSet)=>openCurrentComponent(titleSet)}/>
                        <FeatureBox svg={discountSvg} title = {'Discount'} currentComponent={(titleSet)=>openCurrentComponent(titleSet)}/>
                        <FeatureBox svg={temperatureSvg} title = {'Temperature'} currentComponent={(titleSet)=>openCurrentComponent(titleSet)}/>
                        <FeatureBox svg={areaSvg} title = {'Area'} currentComponent={(titleSet)=>openCurrentComponent(titleSet)}/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const FeatureBox = ({svg,title,currentComponent}) => {
    
    const UpdateThisComponent = (pageTitle)=>{
        // console.log('...............',pageTitle);
        // console.log('step 1')
        currentComponent(pageTitle);
        // console.log('step 2')
    }

    return (
        <TouchableOpacity style={styles.featureInter} onPress={()=>{UpdateThisComponent(title)}}>
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