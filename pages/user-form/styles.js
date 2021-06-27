import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
        borda:{
        backgroundColor: 'white', //cor de fundo
        width: '70%', //largura
        height: '90%',// altura
        borderRadius: 20, // deixar as pontas redondas
    },
    borda2:{
         backgroundColor: '#48D1CC', //cor de fundo
        width: '100%', //largura
        height: '10%',// altura
        borderRadius: 10, // deixar as pontas redondas
        marginTop: '50',
    },
     titulo:{
         fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        height: '20%',
    },
    formArea: {
       //position: 'relative',
        left:'40%',
        top:'-10%',
         width:'60px',
      // height:'20px',
      alignItems:'center', 
      //justifyContent:'center'
    },
    formulario:{
     position: 'relative',
        display: 'block',
        justifyContent: 'center'
     },
    formInput : {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'gray',
        margin: 2
    },
    botaoEnviar:{
        //marginTop: 5, 
        marginBottom: 10,
        marginLeft: 80, //margem esquerda
        marginRight: 20, //margem direita
        borderRadius: 5, //lados da borda
        height: 30,     // altura
        borderWidth: 2, //largura da borda
        borderColor: '#48D1CC', //cor da borda
        backgroundColor: '', //cor de fundo do botão
        justifyContent: 'center', // colocar o conteudo (botao) no centro
        alignItems: 'center',
    },
    txtbt:{
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Arial'
    },
    txtOpcao:{
            fontSize: 11,
        color: 'black',
        //fontWeight: '',
        textAlign: 'center',
        padding: 10,
        height: '20%',
        color: 'red',
    },
    
})

export default Styles