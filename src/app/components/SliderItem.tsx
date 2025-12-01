import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles.js';

const SliderItem = ({ item }: { item: { id: string; title: string; image: any } }) => {
  return (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.slideImage} />
    </View>
  );
};

export default SliderItem;