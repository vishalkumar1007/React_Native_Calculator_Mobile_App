import { View,Text,StyleSheet } from "react-native";


const styles = StyleSheet.create({
    main:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',       
    },
    bigText:{
        fontSize:25,
        color:'red',
    }
})

const Converter = ()=>{
    return(
        <View style={styles.main}>
            <Text style={styles.bigText}>Coming Soon</Text>
        </View>
    )
}
export default Converter