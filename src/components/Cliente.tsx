import {View, TouchableOpacity, Pressable, PressableProps, StyleSheet, Text} from 'react-native'
import { MaterialIcons } from "@expo/vector-icons"

type Props = PressableProps & {
    data:{
        id: string
        dataResiduo: string
        categoria: string
        peso: string
    }
    onDelete: () => void
    onEditar: () => void

}//fim da instancia de variaveis

export function Cliente({ data, onDelete, onEditar, ...rest}:Props){
    return (
        <View style={styles.container}>
            <Pressable style={styles.fundo} {...rest}>
                <Text style={styles.textt}>
                    {data.id} - {data.dataResiduo} - {data.categoria} - {data.peso}
                </Text>
            <View style={styles.rowIcons}>
                <TouchableOpacity onPress={onEditar}>
                    <MaterialIcons name="edit" size={28} color="#ccc"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={onDelete}>
                    <MaterialIcons name="delete" size={28} color="#ccc"/>
                </TouchableOpacity>
            </View>
            </Pressable>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 50,
    },
    rowIcons: {
        display:"flex",
        flexDirection:"row",
    },

    fundo:{
        width: "80%",
        backgroundColor: "#4F9231",
        padding: 24,
        borderRadius: 15,
        gap: 12,
        flexDirection: "column",
        
    },
    textt: {
        color:"white",
        fontSize:17,
        fontWeight:"bold"    
    }
});