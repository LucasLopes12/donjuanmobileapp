import React from 'react';
import { FlatList, Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import Header from './components/Header'

export default function App() {
    return(
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.space}></View>
                    <View>
                        <Text style={styles.titleContato}>Somos uma equipe de estudantes</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}