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
                        nome='Lucas Lopes'
                        whatsapp='(19) 98451-9925'
                        instagram='@luucxzl'
                        github='@LucasLopes12'
                        linkedin='Lucas Lopes'
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};