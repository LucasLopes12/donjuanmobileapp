import React from 'react';
import { FlatList, Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import Header from './components/Header';
import DevsContato from './components/DevsContato';

export default function App() {
    return(
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.space}></View>
                    <View>
                        <Text style={styles.titleContato}>Contate-nos através de nossas mídias sociais.</Text>

                        <DevsContato 
                        id={0}
                        nome='Lucas Lopes'
                        image='lucaslopes'
                        whatsapp='(19) 98451-9925'
                        instagram='@luucxzl'
                        github='@LucasLopes12'
                        linkedin='Lucas Lopes'
                        />
                        <DevsContato 
                        id={1}
                        nome='Lucas de Anddrade'
                        image='lucasdeanddrade'
                        whatsapp='(19) 99236-6858'
                        instagram='@l.anddrade'
                        github='@Landdradee'
                        linkedin='X'
                        />
                        <DevsContato
                        id={2} 
                        nome='Nicolas Bonfim'
                        image='nicolasbonfim'
                        whatsapp='(11) 96662-1559'
                        instagram='@moratozl'
                        github='@moratozk'
                        linkedin='Nicolas B. Morato'
                        />
                        <DevsContato
                        id={3} 
                        nome='Gabriel Cardoso'
                        image='gabrielcardoso'
                        whatsapp='(19) 99359-0499'
                        instagram='@gabcardoso08'
                        github='@gabrielcangelino'
                        linkedin='X'
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};