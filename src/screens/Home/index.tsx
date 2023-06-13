import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

    export function Home () {

        function handleParticipantAdd () {
            console.log("voce clicou em adicionar")
        }
 
        return (
            <View style={styles.container}>
                <Text style={styles.EventName}>
                    NOME DO EVENTO
                </Text>
        
                <Text style={styles.EventDate}>
                    24 DE NOVEMBRO DE 1999
                </Text>
            <View style={styles.form}>
            <TextInput 
                       style={styles.input}
                       placeholder="nome do participante"
                       placeholderTextColor="6b6b6b"
                       />
                       <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                                <Text style={styles.buttonText}>
                                 +
                                </Text>
                       </TouchableOpacity>
            </View>
             


                       
            </View>
        )
    }