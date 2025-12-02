import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles';

const DevsContato = ({
    nome='Don Juan User',
    whatsapp='19999999999',
    instagram='@donjuanuser',
    github='@donjuanuser',
    linkedin='@donjuanuser'
}: {
    nome: string;
    whatsapp: string;
    instagram: string;
    github: string;
    linkedin: string;
}) => {
    return(
        <View style={styles.devsContato}>
            <View style={styles.devsContatoInfo}>
                <Text style={styles.devsContatoName}>{nome}</Text>
                <View style={styles.devsContatoSessions}>
                    <Image source={require('../../../assets/whatsapp-icon.png')} style={styles.devsPicsSocialMedia}></Image>
                    <Text>{whatsapp}</Text>
                </View>
                <View style={styles.devsContatoSessions}>
                    <Image source={require('../../../assets/instagram-icon.png')} style={styles.devsPicsSocialMedia}></Image>
                    <Text>{instagram}</Text>
                </View>
                <View style={styles.devsContatoSessions}>
                    <Image source={require('../../../assets/github-icon.png')} style={styles.devsPicsSocialMedia}></Image>
                    <Text>{github}</Text>
                </View>
                <View style={styles.devsContatoSessions}>
                    <Image source={require('../../../assets/linkedin-icon.png')} style={styles.devsPicsSocialMedia}></Image>
                    <Text>{linkedin}</Text>
                </View>
            </View>
            <Image source={require('../../../assets/icon_donjuan.png')} style={styles.devsPicsContato} />
        </View>
    );
};

export default DevsContato;