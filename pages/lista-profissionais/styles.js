import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

     borda1:{
        backgroundColor: 'white', //cor de fundo
        width: '70%', //largura
        height: '90%',// altura
        borderRadius: 20, // deixar as pontas redondas
        
    },

    borda2:{  //barra azul
        backgroundColor: '#48D1CC', //cor de fundo
        width: '100%', //largura
        height: '10%',// altura
        borderRadius: 10, // deixar as pontas redondas
        marginTop: '50',
    }, 

    txt:{
        marginTop: 30,
         fontSize: 10,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontFamily: "sans-serif",
        backgroundColor: '#E0FFFF',
        borderRadius: 6,
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto', 
        borderColor: "black",
        // alignItems: 'center',
        // justifyContent:'center',
        // position: 'relative',
    },
    rodape: {
	backgroundColor: '#48D1CC', //cor de fundo
        width: '100%', //largura
        height: '10%',// altura
        borderRadius: 10, // deixar as pontas redondas
        //position: 'absolute',
        //marginBottom: '0'
    }
})
export default Styles;