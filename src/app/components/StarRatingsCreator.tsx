import { View, Text, Image } from 'react-native';
import styles from '../styles.js';

const StarRatingsCreator = ({ ratings = 0.0 }: { ratings: number }) => {
  let stars: React.ReactNode[] = [];

  for (let i = 0.5; i <= ratings; i += 0.5) {
    if (i % 1 !== 0) {
      stars.push(
        <Image
          key={i}
          source={require('../../../assets/icon_halfstar.png')}
          style={styles.starRatings}
        />
      );
    } else {
      stars.push(
        <Image
          key={i}
          source={require('../../../assets/icon_halfstar.png')}
          style={styles.starRatingsReversed}
        />
      );
    }
  }

  return <View style={styles.starRatingsDiv}>{stars}</View>;
};

export default StarRatingsCreator;