import React, { Component } from 'react';
import TextoEmMeme from '../../utils/TextoEmMeme'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image, 
} from 'react-native'; 

export default class Meme extends Component
{
    constructor(props)
    {
        super(props);

        this.state ={
            texto1: '',
            texto2: '',
        }
    }

    render()
    {
        return(
            <View>
                <View style={styles.containerTitulo}>
                    <Text style={styles.titulo}>Gerador de MiMiMi</Text>
                </View>

                <View style={styles.containerTextInput}>          
                    <TextInput 
                        placeholder='Digite seu mimimi'
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        onChangeText={
                            texto=>{
                                this.setState({
                                    texto1: texto.toUpperCase(),
                                    texto2: TextoEmMeme(texto).toUpperCase()
                                });
                            }
                        }
                    />
                </View>       

                <View style={styles.containerMeme}>
                    
                    <Text style={[styles.texto, styles.textoSuperior]}>{this.state.texto1}</Text>

                    <Image 
                        source={require('../img/mimimi.jpg')} 
                        style={styles.memeImg}
                    />

                    <Text style={[styles.texto, styles.textoInferior]}>{this.state.texto2}</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerTextInput:
    {
      alignSelf: 'stretch',
      marginBottom: 70,
    },
  
    textInput:
    {
      backgroundColor: '#fff',
    },
  
    containerTitulo:
    {
      marginTop: 30,
      marginBottom: 30,
    },
  
    titulo:
    {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold'
    },
  
    texto:
    {
      color: '#fff',
      textAlign: 'center',
      fontSize: 25,
      zIndex: 1,
    },
  
    containerMeme:
    {
      width: 300,
      height: 300,
    },
  
    memeImg:
    {
      width: 300,
      height: 300,
      marginTop: -70,
      zIndex: 0,
    },
  
    textoInferior:
    {
      marginTop: -70
    }
})