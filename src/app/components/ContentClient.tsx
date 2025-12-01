import { View, Text } from 'react-native';
import styles from '../styles.js';

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

export default ContentClient;