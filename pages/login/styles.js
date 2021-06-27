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

    txtBV:{
         fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontFamily: "Time-New",
    },

    txtCad:{
        fontSize: 20,
        color: 'black',
        fontWeight: '',
        textAlign: 'center',
        padding: 10,
    },

     botaoCad:{
        marginTop: '',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 7,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '',
        justifyContent: 'center',
        alignItems: 'center',
     },

     txtbtCad:{
         fontSize: 14,
         color: 'black',
         fontWeight: 'bold',
         fontFamily: 'Time New'
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