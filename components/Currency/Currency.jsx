import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {useState,useEffect} from 'react';

const Currency = ({openComponent,closeComponentProp})=>{
    const [closeComponent , setCloseComponent] = useState('')
        
    useEffect(()=>{
        console.log('Area : ',openComponent);
        setCloseComponent(openComponent)
    },[openComponent])

    return(
        <View style={styles.main}>
            <Text style={styles.modalText}>{closeComponent}</Text>    
            <TouchableOpacity style={styles.btnClose} onPress={()=>{closeComponentProp('close')}}>
                    <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'blue',
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    modalText:{
        color:'white',
        fontSize:30,
    },
    btnClose:{
        backgroundColor: '#ff00001c',
        width:60,
        height:30,
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.6,
        borderColor:'#9a4040a6',
    },
    btnText:{
        color:'#ff0000db',
    },
})
export default Currency;