import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import styles from '../styles';


const imagesLogos = {
  donjuan: require('../../../assets/icon_donjuan.png'),
  lucaslopes: require('../../../assets/icon-lucaslopes.jpeg'),
  lucasdeanddrade: require('../../../assets/icon-lucasdeanddrade.jpeg'),
  nicolasbonfim: require('../../../assets/icon-nicolasbonfim.jpeg'),
  gabrielcardoso: require('../../../assets/icon-gabrielcardoso.jpg'),
  otavioprata: require('../../../assets/icon-otavioprata.jpg'),
} as const;

type LogoName = keyof typeof imagesLogos;

const DevsContato = ({
    id=0,
    nome='Don Juan User',
    image='donjuan',
    whatsapp='19999999999',
    instagram='@donjuanuser',
    github='@donjuanuser',
    linkedin='@donjuanuser'
}: {
    id: number;
    nome: string;
    image: LogoName;
    whatsapp: string;
    instagram: string;
    github: string;
    linkedin: string;
}) => {

    let styleBody;

    if (id % 2 == 0) {
        styleBody = StyleSheet.create({
            devsContato: {
                flexDirection: 'row',
                marginBottom: 100,
                marginLeft: '5%',
                display: 'flex',
                justifyContent: 'flex-start',
            }
        });
    } else {
        styleBody = StyleSheet.create({
            devsContato: {
                flexDirection: 'row-reverse',
                marginBottom: 100,
                marginLeft: '5%',
                display: 'flex',
                justifyContent: 'flex-end',
            }
        });
    }

    const body = (
        <View style={styleBody.devsContato}>
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
            <Image source={imagesLogos[image]} style={styles.devsPicsContato} />
        </View>
    );

    return body;
};

export default DevsContato;