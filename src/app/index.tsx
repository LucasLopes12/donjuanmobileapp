import React from 'react';
import { FlatList, Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';

const slides = [
  {
    id: '1',
    title: 'Criança com desconto',
    image: require('../../assets/crianca_com_desconto.png'),
  },
  {
    id: '2',
    title: 'Relaxamento',
    image: require('../../assets/relaxamento.png'),
  },
];

const SliderItem = ({ item }: { item: { id: string; title: string; image: any } }) => {
  return (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.slideImage} />
    </View>
  );
};

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <SliderItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const MoneyPricingCreator = ({ price = 0.0 }: { price: number }) => {
  let pricing: React.ReactNode[] = [];

  for (let i = 0.5; i <= price; i += 0.5) {
    if (i % 1 !== 0) {
      pricing.push(
        <Image
          key={i}
          source={require('../../assets/icon_firsthalfmoney.png')}
          style={styles.moneyPricings}
        />
      );
    } else {
      pricing.push(
        <Image
          key={i}
          source={require('../../assets/icon_secondhalfmoney.png')}
          style={styles.moneyPricings}
        />
      );
    }
  }

  return <View style={styles.moneyPricingsDiv}>{pricing}</View>;
};

const StarRatingsCreator = ({ ratings = 0.0 }: { ratings: number }) => {
  let stars: React.ReactNode[] = [];

  for (let i = 0.5; i <= ratings; i += 0.5) {
    if (i % 1 !== 0) {
      stars.push(
        <Image
          key={i}
          source={require('../../assets/icon_halfstar.png')}
          style={styles.starRatings}
        />
      );
    } else {
      stars.push(
        <Image
          key={i}
          source={require('../../assets/icon_halfstar.png')}
          style={styles.starRatingsReversed}
        />
      );
    }
  }

  return <View style={styles.starRatingsDiv}>{stars}</View>;
};

const imagesLogos = {
  donjuan: require('../../assets/icon_donjuan.png'),
} as const;

type LogoName = keyof typeof imagesLogos;

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Procurar</Text>
      <Text style={styles.textHeader}>Preços</Text>
      <Image source={imagesLogos.donjuan} style={styles.imageHeader} />
      <Text style={styles.textHeader}>Contato</Text>
      <Text style={styles.textHeader}>Sobre</Text>
    </View>
  );
};

const ContentClient = ({
  name = 'Melhores ...',
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) => {
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
  name = 'Barbearia',
  ratings = 0.0,
  price = 0.0,
  image = 'donjuan',
}: {
  name: string;
  ratings: number;
  price: number;
  image: LogoName;
}) => {
  return (
    <View style={styles.contentImages}>
      <View style={styles.contentImagesProducts}>
        <Image source={imagesLogos[image]} style={styles.contentImagesImage} />
        <View>
          <Text style={styles.contentImagesProductsTextTitle}>{name}</Text>
          <StarRatingsCreator ratings={ratings} />
          <MoneyPricingCreator price={price} />
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <Carousel />
          <ContentClient name="Melhores avaliados">
            <FlatList
              data={[
                { id: '1', name: "Barbearia do Zé", ratings: 4.5, price: 3.5, image: "donjuan" },
                { id: '2', name: "Barbearia Fênix", ratings: 5, price: 4, image: "donjuan" },
                { id: '3', name: "Rei da Navalha", ratings: 4.5, price: 3, image: "donjuan" },
              ]}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ClientZone
                  name={item.name}
                  ratings={item.ratings}
                  price={item.price}
                  image={"donjuan"}
                />
              )}
            />
          </ContentClient>
          <ContentClient name="Menor custo">
            <FlatList
              data={[
                { id: '1', name: "Irmãos Barbers", ratings: 4, price: 2.0, image: "donjuan" },
                { id: '2', name: "Corte Mil Grau", ratings: 3.5, price: 1.5, image: "donjuan" },
                { id: '3', name: "Barba & Cabelo", ratings: 4, price: 2.0, image: "donjuan" },
              ]}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ClientZone
                  name={item.name}
                  ratings={item.ratings}
                  price={item.price}
                  image={"donjuan"}
                />
              )}
            />
          </ContentClient>
        </View>
      </ScrollView>
    </View>
  );
};
