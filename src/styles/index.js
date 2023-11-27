import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    logo:{
        marginTop:'-40%',
        width: 300, 
        height: 300,
        resizeMode: 'contain',
        borderRadius: 10,
    }, 
    title:{
        color: '#fff',
        fontSize: 20,
    },
    bottonForm:{
        alignItems: 'center',
        justifyContent: 'center',
        width:200,
        height:30,
        marginTop: 15,
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
    },
    textBottonForm:{
        fontSize: 15,
        fontWeight:'500',
    },
    
})