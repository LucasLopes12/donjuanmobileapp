
import { View, Text, Image } from 'react-native';
import styles from '../styles.js';


const MoneyPricingCreator = ({ price = 0.0 }: { price: number }) => {
  let pricing: React.ReactNode[] = [];

  for (let i = 0.5; i <= price; i += 0.5) {
    if (i % 1 !== 0) {
      pricing.push(
        <Image
          key={i}
          source={require('../../../assets/icon_firsthalfmoney.png')}
          style={styles.moneyPricings}
        />
      );
    } else {
      pricing.push(
        <Image
          key={i}
          source={require('../../../assets/icon_secondhalfmoney.png')}
          style={styles.moneyPricings}
        />
      );
    }
  }

  return <View style={styles.moneyPricingsDiv}>{pricing}</View>;
};

export default MoneyPricingCreator;