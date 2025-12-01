import { View, Text, Image } from 'react-native';
import styles from '../styles.js';
import imagesLogos from '../index.js';
import { Link } from 'expo-router';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Procurar</Text>
      <Text style={styles.textHeader}>Preços</Text>
      {/* @ts-ignore */}
      <Image source={imagesLogos['donjuan']} style={styles.imageHeader} />
      <Text style={styles.textHeader}><Link href='contato'>Contato</Link></Text>
      <Text style={styles.textHeader}>Sobre</Text>
    </View>
  );
};

export default Header;