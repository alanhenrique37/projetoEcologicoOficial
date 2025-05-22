import { View, TextInput, StyleSheet, Button, Alert, Image, Text, TouchableOpacity} from 'react-native'
import { Campo } from '@/components/Campos'
import { useState } from 'react'
import { useClienteDataBase, ClienteDataBase } from '@/database/useClienteDataBase'
import { useNavigation } from 'expo-router'

export default function Registrar(){
    const [id, setId] = useState("")
    const [dataResiduo, setDataResiduo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [peso, setPeso] = useState("")
    const [cliente, setCliente] = useState<ClienteDataBase[]>()
    const clienteDataBase = useClienteDataBase();
    const navigation = useNavigation()

    async function create(){
        try{
            const response = await clienteDataBase.create({
                dataResiduo,
                categoria,
                peso
            })

            Alert.alert("Cliente cadastrado com sucesso! ID: " + response.insertedRowId)
        }catch(error){
            console.log(error)
        }
    }//fim da create

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
            <View style={styles.verRegistros}>
            <Text style={styles.tituloReg}>  Registrar Resíduo</Text>
            <Text style={styles.nomeInput}>Data</Text>
            <View style={styles.inputs}>
            <TextInput style={styles.inputStyle} />
            </View>             
          
            <TouchableOpacity style={styles.botaoGeral} onPress={() => navigation.navigate('Consultar')}><Text style={styles.botaoVer}>Ver Todos</Text></TouchableOpacity>
          </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
        container:{
            width: '100%',
            height: '100%',
         
            backgroundColor: '#6BB848  linear-gradient(90deg,rgba(107, 184, 72, 0.4) 100%, rgba(107, 184, 72, 1) 100%)',
            alignItems: "center",
        },
        logos: {
            marginTop: 40,
            display:"flex",
            alignItems:"center"
          

        },
       
        titulo: {
            textAlign:"center",
            fontSize:30,
            fontWeight: "bold",
            color: "#6BB848",
        },
        verRegistros: {
            width:"95%",
            height:"75%",
            backgroundColor:"#6BB848",
            borderRadius: 50,
            marginTop: 10,
           
            
      
           
                        
        },
        tituloReg:{
            textAlign:"center",
            paddingTop:25,
            paddingBottom:5,
            fontSize:38,
            paddingRight: 10,
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
            display:"flex",
            justifyContent:"center",
            marginTop:20
        },
        nomeInput: {
            fontSize:25,
            color:"white",
            fontWeight:"700",
            textAlign:"left",
            paddingLeft: 20,
            paddingTop:20,

        },
        inputStyle: {
            backgroundColor:"white",
            width:"85%",
            borderRadius:10
        },
        inputs: {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginTop:8 

        }
        
    }   
);