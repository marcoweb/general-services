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
         fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontFamily: "Arial",
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
        // alignItems: 'center',
        // justifyContent:'center',
        // position: 'relative',
    },
    botao: {
     marginTop: 5,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 7,
        height: 30,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '',
        justifyContent: 'center',
        alignItems: 'center',
    },
     

    img:{
        marginTop: 6,
         width: '100px', //largura
        height: '100px',// altura
        marginLeft: 'auto',
        marginRight: 'auto', 
         position: 'relative',
        top: '-25px',
      //  left: '-50px',
        alignItems: 'center',
    },
     contrate:{
         fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontFamily: "sans-serif",
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