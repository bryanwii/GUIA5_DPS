import React, { useState } from 'react'; 
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native'; 

const App = () => { 
    const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
    return ( 
        <> 
            <ScrollView>
                <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() => {alert('Modal has been closed.')}}>
                    <View style={styles.vistaModal}>
                        <View style={styles.Modal}>
                            <Text style={styles.subtitulo}>Ir a la Playa</Text>
                            <Text>El Salvador cuenta con hermosas playas a nivel Centroamerica.</Text>
                            <Button title="Cerrar" onPress={() => {setModalVisibleplaya(!modalVisibleplaya)}} />
                        </View>
                    </View>
                </Modal>
                <View style={{flexDirection: 'row'}}>
                    <Image  
                        style={styles.banner} 
                        source={require('./src/img/bg.jpg')} 
                    /> 
                </View>
                <Text style={styles.titulo}>Que hacer en El Salvador</Text>
                <ScrollView horizontal>
                 <TouchableHighlight
                  onPress={() => {setModalVisibleplaya(!modalVisibleplaya)}}>
                     <Image
                            style={styles.ciudad}
                            source={require('./img/actividad1.jpg')} />
                        
                        </TouchableHighlight>
                     <View>
                        <Image
                            style={styles.ciudad}
                            source={require('./img/actividad2.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.ciudad}
                            source={require('./img/actividad3.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.ciudad}
                            source={require('./img/actividad4.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.ciudad}
                            source={require('./img/actividad5.jpg')}
                        />
                    </View>
                </ScrollView>
                <Text style={styles.titulo}>Platillos Salvadoreños</Text>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('./img/mejores1.jpg')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('./img/mejores2.jpg')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('./img/mejores3.jpg')} />
                </View>
                <Text style={styles.titulo}>Rutas Turísticas</Text>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('./img/ruta1.jpg')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('./img/ruta2.jpg')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('./img/ruta3.jpg')} />
                </View>
                <ScrollView horizontal>
                    <View>
                        <Image
                            style={styles.ciudad}
                            source={require('./img/ruta4.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.ciudad}
                            source={require('./img/ruta5.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.ciudad}
                            source={require('./img/ruta6.jpg')}
                        />
                    </View>
                </ScrollView>
            </ScrollView>
        </> 
    ); 
}; 

const styles = StyleSheet.create({ 
    banner: { 
        height: 250, 
        flex: 1 
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    ciudad:{
        width: 250,
        height: 300,
        marginRight: 10
    },
    mejores:{
        width: '100%',
        height:200,
        marginVertical:5
    },
    vistaModal:{
        backgroundColor:'#000000aa',
        flex:1
    },
    Modal:{
        backgroundColor:'#fff',
        margin:50,
        padding:40,
        borderRadius:10,
        flex:1
    },
    subtitulo:{
        fontWeight:'bold',
        fontSize:14,
        justifyContent:'center',
        marginBottom:10
    }

}); 

export default App;