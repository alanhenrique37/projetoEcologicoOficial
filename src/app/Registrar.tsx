import { View, TextInput, StyleSheet, Button, Alert, Image, Text, TouchableOpacity} from 'react-native'
import { DropSelect } from '@/components/DropSelect'
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
            <TextInput
                style={styles.inputStyle}
                placeholder="Ex: 00/00/0000"
                value={dataResiduo}
                keyboardType="numeric"
                maxLength={10}
                onChangeText={(text) => {
                    // Remove tudo que não for número
                    const onlyNumbers = text.replace(/\D/g, '');

                    // Formata automaticamente para dd/mm/aaaa
                    let formatted = onlyNumbers;
                    if (onlyNumbers.length > 2 && onlyNumbers.length <= 4) {
                    formatted = onlyNumbers.slice(0, 2) + '/' + onlyNumbers.slice(2);
                    } else if (onlyNumbers.length > 4) {
                    formatted =
                        onlyNumbers.slice(0, 2) +
                        '/' +
                        onlyNumbers.slice(2, 4) +
                        '/' +
                        onlyNumbers.slice(4, 8);
                    }

                    setDataResiduo(formatted);
                }}
            />
            </View>
            <Text style={styles.nomeInput}>Categoria</Text>
            <View style={styles.inputs}>
                <View style={styles.viewStyles}>
            <DropSelect onChangeValue={setCategoria} value={categoria}  ></DropSelect>
            </View>
            </View>
            <Text style={styles.nomeInput}>Peso</Text>
            <View style={styles.inputs}>
            <TextInput style={styles.inputStyle} placeholder="Ex: 2kg" onChangeText={setPeso} value={peso}/>
            </View>
                         
            <View style={styles.botoes}>
            <TouchableOpacity style={styles.botaoGeral} onPress={create}><Text style={styles.botaoVer}>Registrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.botaoGeralVoltar} onPress={() => navigation.navigate('Index')}><Text style={styles.botaoVerVoltar}>Voltar</Text></TouchableOpacity>
          </View>
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
        viewStyles: {
            display:"flex",
            justifyContent:"center",

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
   
            fontWeight:"bold",
            color:"white",
        },
        botoes: {
            alignItems:"center",
            display:"flex",
            justifyContent:"center",
        },
        botaoVer: {
            fontSize:21,
            color:"white",
            fontWeight:"800",
                        
        },
        botaoGeral: {
            width:210,
            height:47,
            backgroundColor:"#4F9231",
            borderRadius:10,
            alignItems:"center",
            display:"flex",
            justifyContent:"center",
            marginTop:20,
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
        nomeInput: {
            fontSize:25,
            color:"white",
            fontWeight:"700",
            textAlign:"left",
            paddingLeft: 30,
            paddingTop:20,

        },
        inputStyle: {
            backgroundColor:"white",
            width:"85%",
            borderRadius:10,
            height:50
        },
        inputs: {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginTop:4 

        }
        
    }   
);