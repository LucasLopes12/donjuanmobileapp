import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles.js';
import SliderItem from './SliderItem';

const slides = [
  {
    id: '1',
    title: 'Criança com desconto',
    image: require('../../../assets/crianca_com_desconto.png'),
  },
  {
    id: '2',
    title: 'Relaxamento',
    image: require('../../../assets/relaxamento.png'),
  },
];

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

export default Carousel;