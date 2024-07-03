import {View,Text,StyleSheet} from 'react-native';

const Area = ()=>{
    return(
        <View style={styles.main}>
            <Text>This is Area</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'gray',
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItem:'center'
    }
})
export default Area;