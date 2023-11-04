import { StyleSheet } from "react-native";

export const stylesHome: any = StyleSheet.create({
    Label:{
        flex:1,
        justifyContent:'center'
    },
    LabelCounter:{
        textAlign:'center',
        fontSize:38,
        position:'relative', // configuració por defecto: position: relative
        top:-15
    },
    FabLocation:{
        position:'absolute',
        bottom:25
    },
    Fab:{
        backgroundColor:'#5856D6',
        justifyContent:'center',
        width:40,
        height:40,
        borderRadius:100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

    },
    FabLeft:{
        left:25
    },
    FabRight:{
        right:28
    },
    FabText:{
        alignSelf:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:25,
    }
})