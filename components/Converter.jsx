import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from "react-native";
import { CurrencySvg, LengthSvg, SpeedSvg, TimeSvg, FinanceSvg, InternetDataSvg, DiscountSvg, TemperatureSvg, AreaSvg } from "./svg";
import { useEffect, useState } from 'react';
import Area from "./Area/Area";
import Currency from "./Currency/Currency";
import Data from "./Data/Data";
import Discount from "./Discount/Discount";
import Finance from "./Finance/Finance";
import Length from "./Length/Length";
import Speed from "./Speed/Speed";
import Temperature from "./Temperature/Temperature";
import Time from "./Time/Time";
import Inputs from "./Inputs/Inputs";
// import { BlurView } from '@react-native-community/blur';

const Converter = (colorMode) => {
    const [openComponent, setOpenComponent] = useState('close');


    useEffect(() => {
        console.log('this is component : ', colorMode.ScreenColorMode)
    }, [colorMode])

    const openCurrentComponent = (titleSet) => {
        setOpenComponent(titleSet);
    }

    const handelOpenComponent = (value) => {
        setOpenComponent(value);
    }

    const renderComponent = () => {
         {switch (openComponent) {
            case 'Area':
                return <Area colorMode={colorMode.ScreenColorMode} openComponent={openComponent} closeComponentProp={handelOpenComponent}/>
            case 'Date':
                return <Date colorMode={colorMode.ScreenColorMode} openComponent={openComponent} closeComponentProp={handelOpenComponent}/>
            case 'Discount':
                return <Discount colorMode={colorMode.ScreenColorMode} openComponent={openComponent} closeComponentProp={handelOpenComponent}/>
            case 'Currency':
                return <Currency colorMode={colorMode.ScreenColorMode} openComponent={openComponent} closeComponentProp={handelOpenComponent}/>
            case 'Finance':
                return <Finance colorMode={colorMode.ScreenColorMode} openComponent={openComponent} closeComponentProp={handelOpenComponent}/>
            case 'Length':
                return <Length colorMode={colorMode.ScreenColorMode} openComponent={openComponent} closeComponentProp={handelOpenComponent}/>
            case 'Speed':
                return <Speed colorMode={colorMode.ScreenColorMode} openComponent={openComponent} closeComponentProp={handelOpenComponent}/>
            case 'Temperature':
                return <Temperature colorMode={colorMode.ScreenColorMode} openComponent={openComponent} closeComponentProp={handelOpenComponent}/>
            case 'Time':
                return <Time colorMode={colorMode.ScreenColorMode} openComponent={openComponent} closeComponentProp={handelOpenComponent}/>
            case 'Data':
                return <Data colorMode={colorMode.ScreenColorMode} openComponent={openComponent} closeComponentProp={handelOpenComponent}/>
            default:
                return <View colorMode={colorMode.ScreenColorMode} openComponent={'error'} closeComponentProp={handelOpenComponent}/>    
        }}
    }

    return (
        <View style={styles.main}>
            <View style={styles.fixedMain}>
                <ScrollView style={styles.scrConverter}>
                    <View style={styles.converters}>
                        <FeatureBox colorMode={colorMode.ScreenColorMode} svg={<AreaSvg strokeColor={colorMode.ScreenColorMode==='black'?'white':'black'}/>} title={'Area'} currentComponent={(titleSet) => openCurrentComponent(titleSet)} />
                        <FeatureBox colorMode={colorMode.ScreenColorMode} svg={<CurrencySvg strokeColor={colorMode.ScreenColorMode==='black'?'white':'black'}/>} title={'Currency'} currentComponent={(titleSet) => openCurrentComponent(titleSet)} />
                        <FeatureBox colorMode={colorMode.ScreenColorMode} svg={<InternetDataSvg strokeColor={colorMode.ScreenColorMode==='black'?'white':'black'}/>} title={'Data'} currentComponent={(titleSet) => openCurrentComponent(titleSet)} />
                        <FeatureBox colorMode={colorMode.ScreenColorMode} svg={<DiscountSvg strokeColor={colorMode.ScreenColorMode==='black'?'white':'black'}/>} title={'Discount'} currentComponent={(titleSet) => openCurrentComponent(titleSet)} />
                        <FeatureBox colorMode={colorMode.ScreenColorMode} svg={<FinanceSvg strokeColor={colorMode.ScreenColorMode==='black'?'white':'black'}/>} title={'Finance'} currentComponent={(titleSet) => openCurrentComponent(titleSet)} />
                        <FeatureBox colorMode={colorMode.ScreenColorMode} svg={<LengthSvg strokeColor={colorMode.ScreenColorMode==='black'?'white':'black'}/>} title={'Length'} currentComponent={(titleSet) => openCurrentComponent(titleSet)} />
                        <FeatureBox colorMode={colorMode.ScreenColorMode} svg={<SpeedSvg strokeColor={colorMode.ScreenColorMode==='black'?'white':'black'}/>} title={'Speed'} currentComponent={(titleSet) => openCurrentComponent(titleSet)} />
                        <FeatureBox colorMode={colorMode.ScreenColorMode} svg={<TemperatureSvg strokeColor={colorMode.ScreenColorMode==='black'?'white':'black'}/>} title={'Temperature'} currentComponent={(titleSet) => openCurrentComponent(titleSet)} />
                        <FeatureBox colorMode={colorMode.ScreenColorMode} svg={<TimeSvg strokeColor={colorMode.ScreenColorMode==='black'?'white':'black'}/>} title={'Time'} currentComponent={(titleSet) => openCurrentComponent(titleSet)} />
                    </View>
                </ScrollView>
            </View>
            <Modal
                animationType="none"
                transparent={true}
                visible={openComponent === 'close' ? false : true}
                style={styles.modalMain}
                onRequestClose={() => {
                    setOpenComponent('close');
                }}
            >
                <View style={styles.modalViewFirst}>
                    <View style={styles.modalView}>
                        {renderComponent()}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const FeatureBox = ({colorMode, svg, title, currentComponent }) => {

    const UpdateThisComponent = (pageTitle) => {
        currentComponent(pageTitle);
    }

    return (
        <TouchableOpacity style={[styles.featureInter , {backgroundColor: colorMode==='#f0f0f0'?'white':'#151515'}]} onPress={() => { UpdateThisComponent(title) }}>
            <View style={styles.svgBox}>
                {svg}
            </View>
            <View style={styles.titleBox}>
                <Text style={[styles.titleText , {color:colorMode==='#f0f0f0'?'black':'white'}, {fontWeight:colorMode==='#f0f0f0'?'450':'100'} ]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    modalMain: {
        // backgroundColor:'red',
        width: '100%',
        height: '100%',
    },
    modalViewFirst: {
        // backgroundColor:'gary',
        width: '100%',
        height: '100%',
    },
    modalView: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        gap: 15
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

    //  ########## main is start from here ##########

    main: {
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    fixedMain: {
        // backgroundColor:'purple',
        width: '100%',
        height: '95%',
        // justifyContent:'center',
        alignItems: 'center',
    },
    scrConverter: {
        // backgroundColor: 'green',
        width: '100%',
        height: '100%',

    },
    converters: {
        // backgroundColor:'red',
        display: 'flex',
        rowGap: 25,
        columnGap: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    featureBox: {
        backgroundColor: 'gray',
        width: '30%',
        height: '15%'
    },
    featureInter: {
        width: 135,
        height: 120,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        borderRadius: 10
    },
    titleText: {
        fontSize: 18,
        color: '#e6e6e6',
        fontWeight: `100`
    }
});


export default Converter;