import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { useState } from 'react';

import { styles } from './styles'

import { Participant } from './../../components/Participant';

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');


  function handleParticipantAdd(){
    if (participants.includes(participantName)){
      return Alert.alert("Participante existente","Ja existe um participante com esse nome na lista")
    }
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('');

  }

  function handleParticipantRemove(name: string) {
    const remove = () =>{
      setParticipants(prevState => prevState.filter(participant => participant !== name));
      Alert.alert("Deletado!")
    }
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim', 
        onPress: () => remove()
      },
      {
        text: 'nao',
        style: 'cancel'
        
      }
    ])
    console.log(`Voce clicou para remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
        </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2022
        </Text>

      <View style={styles.form}>

      <TextInput 
      style={styles.input}
      placeholder="Nome do participante"
      placeholderTextColor="#6B6B6B"
      onChangeText={text => setParticipantName(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
         +
          </Text>
      </TouchableOpacity>
      </View>

    <FlatList
    data={participants}
    keyExtractor={item => item}
    renderItem={({item}) =>(
      <Participant 
        key={item} 
        name={item} 
        onRemove={() => handleParticipantRemove(item)}/>
    )}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={() => (
      <Text style={styles.listEmptyText}>
        Ninguem chegou no evento ainda? Adicione participantes a sua lista de presença.
      </Text>
    )}
    />
    </View>
  );
}