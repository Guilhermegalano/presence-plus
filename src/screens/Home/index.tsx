import { useState } from 'react';  //  O useState é uma função que retorna um par de valores: a variável de estado atual e uma função para atualizá-la. Ao chamar a função de atualização, o React renderiza novamente o componente, refletindo as alterações no estado.
import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert} from "react-native"
import { styles } from "./styles";
import { Participant } from '../../components/participant';


export  function Home (){
const [participants, setParticipants] = useState<string[]>([]); // add participante
const [particiapanteName, setParticipantName] = useState ('')    // salva os participantes




function handleParticipantAdd(){
  if(participants.includes(particiapanteName)){     // verificação se a participantes com mesmo nome.
    return Alert.alert("Participante existe", "particiapante ja exite na lista de presença");
  }
  setParticipants(prevState => [...prevState, particiapanteName]);

  setParticipantName('');
}


function handleParticipantRemove (name: string){
       Alert.alert("remover", `remover participante ${name}?`,  // Alerta para remoção de participante
       [

        // remoção do participando filtrando todos participantes menos participante x
       {
        text: 'sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
       },

       {
        text: 'não',
        style: 'cancel'
      },
    ]);

       console.log(`voce removel participante ${name}`)
}


return (
          <View style={styles.container}>
                <Text style={styles.eventName}>Cohab 
                </Text>
                
                
                   <Text
                        style={styles.eventDate}
                        >07 De junho de 2023
                    </Text>
                  <View style={styles.form}>
                     
                     
                     <TextInput 
                            style={styles.input}
                            placeholder="Seu nome é Sobrenome" 
                            placeholderTextColor="#6b6b6b6"
                            onChangeText={text => setParticipantName(text)}  // propriedade dispara um evento toda vez que o conteudo muda
                            value={particiapanteName}   // limpa o input quando adiciona participante
                     />

                     <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                      <Text style={styles.buttonText}>
                        +
                      </Text>
                     </TouchableOpacity>
                  </View>

                  <ScrollView>
                  {
                    participants.map(participant => (
                      <Participant 
                      key={participant}
                      name={participant}
                      onRemove={() => handleParticipantRemove(participant)}/>
          
                    ))
                  }
                  </ScrollView>
                  

                 
          </View>  
      );
    }  



// function upadateColorMap (colorMap) {colorMap.reght = 'blue'; }  //A função 'upadateColorMap' acessa o objeto 'colorMap' e troca o atributi 'reight' por 'blue' ou pela cor que desejar.
    