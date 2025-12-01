import { View, Text, Image } from 'react-native';
import styles from '../styles.js';
import StarRatingsCreator from './StarRatingsCreator';
import MoneyPricingCreator from './MoneyPricingCreator';

const imagesLogos = {
  donjuan: require('../../../assets/icon_donjuan.png'),
} as const;

type LogoName = keyof typeof imagesLogos;

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

export default ClientZone;