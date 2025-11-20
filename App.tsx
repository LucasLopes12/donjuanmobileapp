import { Text, View, Image, Button, FlatList, ScrollView } from 'react-native';
import styles from './styles';

const imagesLogos = {
  donjuan: require('./assets/icon_donjuan.png'),
} as const;

const imagesAds = {
  desconto: require('./assets/CRIANÇA COM DESCONTO.png')
} as const;

type LogoName = keyof typeof imagesLogos;
type AdName = keyof typeof imagesAds;

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

const Dashboard = ({
  image='desconto'
}: {
  image: AdName
}) => {
  return (
    <View style={styles.dashboard}>
      <Image style={styles.dashboardImage} source={imagesAds[image]}></Image>
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
      <View style={styles.contentLine}></View>
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

const starRatingsCreator = ({
  ratings=0.4,
}: {
  ratings: Number,
}) => {
  return (
    <View></View>
  );
}

export default function App() {
  return (
    <View>
      <Header></Header>
      <ScrollView>
        <View style={styles.container}>
        <Dashboard image='desconto'></Dashboard>
        <ContentClient name='Melhores avaliados'>
          <ClientZone name='Barbearia do Zé' ratings={4.5} price={3.5} image={'donjuan'} />
        </ContentClient>
        <ContentClient name='Menor custo'>
          <ClientZone name='Irmãos Barbers' ratings={4.5} price={2.0} image={'donjuan'} />
        </ContentClient>
        </View>
      </ScrollView>
    </View>
  );
};