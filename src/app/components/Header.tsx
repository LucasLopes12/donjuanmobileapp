import { View, Text, Image } from 'react-native';
import styles from '../styles.js';
import { Link } from 'expo-router';

const imagesLogos = {
  donjuan: require('../../../assets/icon_donjuan.png'),
} as const;

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Procurar</Text>
      <Text style={styles.textHeader}>Preços</Text>
      <Link href='index'>
        <Image source={imagesLogos['donjuan']} style={styles.imageHeader} />
      </Link>
      <Text style={styles.textHeader}><Link href='contato'>Contato</Link></Text>
      <Text style={styles.textHeader}>Sobre</Text>
    </View>
  );
};

export default Header;