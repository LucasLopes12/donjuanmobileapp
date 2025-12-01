import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles.js';

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

export default { Carousel };