import React from 'react';
import { FlatList, Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import { Link } from 'expo-router';

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

const imagesLogos = {
  donjuan: require('../../assets/icon_donjuan.png'),
} as const;

type LogoName = keyof typeof imagesLogos;


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
