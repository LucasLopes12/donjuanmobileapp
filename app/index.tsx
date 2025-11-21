import { Text, View, Image, Button, ScrollView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';

const renderSlides = ({ item }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={item.image}
        style={{ width: '90%', height: 250, resizeMode: 'cover' }}
      />
    </View>
  );
};

const slides = [
  {
    id: '1',
    title: 'Criança com desconto',
    image: require('../assets/CRIANÇA COM DESCONTO.png')
  },
  {
    id: '2',
    title: 'Relaxamento',
    image: require('../assets/RELAXAMENTO.png')
  },
];

const MoneyPricingCreator = ({
  price=0.0,
}: {
  price: number,
}) => {
  let pricing = [];

  for (let i = 0.5; i <= price; i+=0.5) {
    if (i % 1 !== 0) {
      pricing.push(<Image key={i} source={require('../assets/icon_firsthalfmoney.png')} style={styles.moneyPricings}></Image>)
    } else {
      pricing.push(<Image key={i} source={require('../assets/icon_secondhalfmoney.png')} style={styles.moneyPricings}></Image>)
    };
  };
  return (
    <View style={styles.moneyPricingsDiv}>
      {pricing}
    </View>
  );
};

const StarRatingsCreator = ({
  ratings=0.0,
}: {
  ratings: number,
}) => {
  let stars = [];

  for (let i = 0.5; i <= ratings; i+=0.5) {
    if (i % 1 !== 0) {
      stars.push(<Image key={i} source={require('../assets/icon_halfstar.png')} style={styles.starRatings}></Image>)
    } else {
      stars.push(<Image key={i} source={require('../assets/icon_halfstar.png')} style={styles.starRatingsReversed}></Image>)
    }
  }

  return (
    <View style={styles.starRatingsDiv}>
      {stars}
    </View>
  );
};
const imagesLogos = {
  donjuan: require('../assets/icon_donjuan.png'),
} as const;

const imagesAds = {
  desconto: require('../assets/CRIANÇA COM DESCONTO.png')
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
  );
};

const Dashboard = () => {
  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#009CFF',
        width: 30,
      }}
      showDoneButton={false}
      showNextButton={false}
    />
  );
};

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
            <View>
              <Text style={styles.contentImagesProductsTextTitle}>{name}</Text>
              <StarRatingsCreator ratings={ratings}/>
              <MoneyPricingCreator price={price}/>
            </View>
          </View>
        </View>
  );
};

export default function App() {

  return (
    <View>
      <Header></Header>
      <ScrollView>
        <View style={styles.container}>
        <Dashboard></Dashboard>
        <ContentClient name='Melhores avaliados'>
          <ClientZone name='Barbearia do Zé' ratings={4.5} price={3.5} image={'donjuan'} />
        </ContentClient>
        <ContentClient name='Menor custo'>
          <ClientZone name='Irmãos Barbers' ratings={4} price={2.0} image={'donjuan'} />
        </ContentClient>
        </View>
      </ScrollView>
    </View>
  );
};