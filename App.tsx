import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import styles from './styles';

const imagesLogos = {
  donjuan: require('./assets/icon_donjuan.png'),
} as const;

type LogoName = keyof typeof imagesLogos;

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Procurar</Text>
      <Text style={styles.textHeader}>Preços</Text>
      <Image source={imagesLogos.donjuan} style={styles.imageHeader}/>
      <Text style={styles.textHeader}>Contato</Text>
      <Text style={styles.textHeader}>Sobre</Text>
    </View>
  )
}

const ContentClient = (
  {name='Melhores ...', children='...'}:
  {name: string, children?: React.ReactNode}
) => {
  return (
    <View style={styles.contentSessions}>
      <View style={styles.contentRatings}>
        <Text style={styles.contentText}>{name}</Text>
        {children}
      </View>
    </View>
  );
};

const ClientZone = ({
  name='Barbearia', 
  ratings=0.0,
  price=0.0, 
  image='donjuan'
}: {
  name: string,
  ratings: number,
  price: number,
  image: LogoName,
}

) => {
  return (
        <View style={styles.contentImages}>
          <View style={styles.contentImagesProducts}>
            <Image source={imagesLogos[image]} style={styles.contentImagesImage}/>
            <View style={styles.contentImagesText}>
              <Text style={styles.contentImagesProductsTextTitle}>{name}</Text>
              <Text style={styles.contentImagesProductsText}>{ratings}</Text>
              <Text style={styles.contentImagesProductsText}>{price}</Text>
            </View>
          </View>
        </View>
  );
};

const starRatingsCreator = (ratings: number) => {

}

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header></Header>
        <ContentClient name='Melhores avaliados'>
          <ClientZone name='Barbearia do Zé' ratings={4.5} price={3.5} image={'donjuan'} />
        </ContentClient>
      </View>
    </ScrollView>
  );
};