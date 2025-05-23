import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from 'expo-router'

export default function Index(){
    const navigation = useNavigation()

    const categorias = ['Reciclável', 'Não Reciclável', 'Óleo', 'Tampinhas', 'Lacres', 'Tecidos', 'Meias', 'Material', 'Esponjas', 'Eletrônicos']

    return (
        <View style={styles.container}>
          <View style={styles.logos}>
            <Image
                style={{width: 100, height: 100}}
                source={require('../../assets/images/logo.png')}
            />
          </View>
          <View>
            <Text style={styles.titulo}>Gestão de Resíduos</Text>
          </View>

          <View style={styles.geral}>
            <View style={styles.verRegistros}>
                <Text style={styles.tituloReg}>Registros</Text>
                {categorias.map((cat) => (
                  <TouchableOpacity 
                    key={cat} 
                    style={styles.categorias} 
                    onPress={() => navigation.navigate('Consultar', { categoriaSelecionada: cat })}
                  >
                    <Text style={styles.estiloCat}>{cat}</Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity 
                  style={styles.botaoGeral} 
                  onPress={() => navigation.navigate('Consultar')}
                >
                  <Text style={styles.botaoVer}>Ver Todos</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.geral2}>
              <View style={styles.registrar}>
                <Text style={styles.tituloRegistrar}> Registrar novo Resíduo</Text>
                <TouchableOpacity style={styles.botaoRegistrar} onPress={() => navigation.navigate('Registrar')}>
                  <Text style={styles.textoRegistrar}>Registrar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sincronizar}>
                <Text style={styles.tituloSincronizar}> Sincronizar com Planilha</Text>
                <TouchableOpacity style={styles.botaoSincronizar}>
                  <Text style={styles.textoSincronizar}>Sincronizar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#6BB848  linear-gradient(90deg,rgba(107, 184, 72, 0.38) 100%, rgba(107, 184, 72, 0) 0%)',
    },
    logos: {
        marginTop: 40,
        alignItems:"center"
    },
    titulo: {
        textAlign:"center",
        fontSize:30,
        fontWeight: "bold",
        color: "#6BB848",
    },
    verRegistros: {
        width:"45%",
        height:"63%",
        backgroundColor:"#6BB848",
        borderRadius: 50,
        marginTop: 30,
        alignItems:"center",
        marginLeft:10,
    },
    tituloReg:{
        textAlign:"center",
        paddingTop:15,
        paddingBottom:5,
        fontSize:22,
        fontWeight:"bold",
        color:"white",
    },
    botaoVer: {
        fontSize:14,
        color:"white",
        fontWeight:"800",
    },
    botaoGeral: {
        width:100,
        height:35,
        backgroundColor:"#4F9231",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    categorias: {
        width: 140,
        height: 35,
        backgroundColor:"#6BB848",
        borderColor:'white',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 10,
        justifyContent:"center",
        alignItems:"center"
    },
    estiloCat: {
        fontSize:16,
        color:"white",
        fontWeight:"600",
    },
    geral: {
        flexDirection:"row",
        width:"100%",
        height:"100%",
    },
    geral2: {
        flexDirection:"column",
        width:"100%",
        height:"100%",
    }, 
    registrar: {
        width:"45%",
        height:"30%",
        backgroundColor:"#6BB848",
        borderRadius: 50,
        marginTop: 30,
        marginLeft: 15,
        alignItems:"center",
    },
    tituloRegistrar:{
        textAlign:"center",
        paddingTop:60,
        fontSize:20,
        fontWeight:"bold",
        color:"white",
    },
    textoRegistrar: {
        fontSize:18,
        color:"white",
        fontWeight:"700",
    },
    botaoRegistrar: {
        width:160,
        height:35,
        backgroundColor:"#4F9231",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        textAlign:"center",
    },
    sincronizar: {
        width:"45%",
        height:"30%",
        backgroundColor:"#6BB848",
        borderRadius: 50,
        marginTop: 24,
        marginLeft: 15,
        alignItems:"center",
    },
    tituloSincronizar:{
        textAlign:"center",
        paddingTop:60,
        fontSize:20,
        fontWeight:"bold",
        color:"white",
    },
    textoSincronizar: {
        fontSize:18,
        color:"white",
        fontWeight:"700",
    },
    botaoSincronizar: {
        width:160,
        height:35,
        backgroundColor:"#4F9231",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        textAlign:"center",
    },
})
