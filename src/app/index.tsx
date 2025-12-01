import React from 'react';
import { FlatList, Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import Header from './components/Header'
import ClientZone from './components/ClientZone';
import Carousel from './components/Carousel';
import ContentClient from './components/ContentClient';
import { Link } from 'expo-router';

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
