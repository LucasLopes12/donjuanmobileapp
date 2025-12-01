import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles';

const DevsContato = ({
    nome='Don Juan User',
    image='/',
    whatsapp='19999999999',
    instagram='@donjuanuser',
    github='@donjuanuser',
    linkedin='@donjuanuser'
}: {
    nome: string;
    image: string;
    whatsapp: string;
    instagram: string;
    github: string;
    linkedin: string;
}) => {
    return(
        <View style={styles.devsContato}>
            <Text>Lucas Lopes</Text>
            <Image source={require('../../assets/icon_donjuan.png')} style={styles.devsPicsContato} />
        </View>
    );
};

export default DevsContato;