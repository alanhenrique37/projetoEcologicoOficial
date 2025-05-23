import { View, StyleSheet, Button, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { Campo } from '@/components/Campos'
import { useState, useEffect } from 'react'
import { useClienteDataBase, ClienteDataBase } from '@/database/useClienteDataBase'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Cliente } from '@/components/Cliente'

export default function Index(){
    const navigation = useNavigation()
    const route = useRoute()

    // Pega o parâmetro categoriaSelecionada do route params
    const categoriaSelecionada = route.params?.categoriaSelecionada || ""

    const [busca, setBusca] = useState(categoriaSelecionada)
    const [cliente, setCliente] = useState<ClienteDataBase[]>()
    const clienteDataBase = useClienteDataBase()

    async function list(){
        try{
            const response = await clienteDataBase.consultar(busca)
            setCliente(response)
        }catch(error){
            console.log(error)
        }
    }

    async function remove(id:number){
        try{
            await clienteDataBase.remove(id)
            await list()
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        list()
    }, [busca])

    useEffect(() => {
        setBusca(categoriaSelecionada)
    }, [categoriaSelecionada])

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
            <Campo
            style={styles.campoStyle}
            placeholder="Pesquisar"
            onChangeText={setBusca}
            value={busca}
            maxLength={20}
            />

            <View style={styles.flat}>
                <FlatList style={styles.flatStyle}
                    data={cliente}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                      <Cliente 
                        data={item} 
                        onDelete={() => remove(item.id)} 
                        onEditar={() => navigation.navigate('Atualizar', {item}) }
                      />
                    )}
                    contentContainerStyle={{gap:16}}
                />
            </View>
            <TouchableOpacity style={styles.botaoGeralVoltar} onPress={() => navigation.navigate('Index')}><Text style={styles.botaoVerVoltar}>Voltar</Text></TouchableOpacity>

           
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
   
        backgroundColor: '#6BB848  linear-gradient(90deg,rgba(107, 184, 72, 0.38) 100%, rgba(107, 184, 72, 0) 0%)',
        alignItems: "center",
        marginTop: 25,
    },
    flat:{
        width: "100%",
        height: "50%",
        padding: 10,
                
   
    },
    botaoVerVoltar: {
        fontSize:21,
        color:"#4F9231",
        fontWeight:"800",                    
    },
    botaoGeralVoltar: {
        width:210,
        height:47,
        backgroundColor:"white",
        borderRadius:10,
        alignItems:"center",
        display:"flex",
        justifyContent:"center",
        marginTop:20,
    },
 
    contentContainerStyle: {
        backgroundColor:"#6BB848",
        margin:100
    },
    flatStyle: {
        width:"110%",
        
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
    campoStyle: {
        width:300,
        height:50,
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        marginTop:20,
        marginBottom:20,

        fontSize:16,
    }
})
