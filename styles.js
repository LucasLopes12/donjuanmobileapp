import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial',
  },
  container: {
    backgroundColor: '#101010',
    alignItems: 'center',
    alignContent: 'center'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textHeader: {
    fontSize: 12,
    color: '#d4d4d8',
  },
  imageHeader: {
    width: 40,
    height: 40,
  },
  contentSessions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
    marginTop: 300,
  },
  contentRatings: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: 200,
  },
  contentText: {
    fontSize: 20,
    fontWeight: '100',
    color: '#d4d4d8',
  },
  contentImages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingTop: 20
  },
  contentImagesProducts: {
    display: 'flex',
    flexDirection: 'row',
    width: 270,
    height: 145,
    backgroundColor: '#1e3a8a',
    borderRadius: 10,
    paddingTop: 7
  },
    contentImagesImage: {
    width: 130,
    height: 130,
  },
  contentImagesText: {
  },
  contentImagesProductsTextTitle: {
    fontSize: 18,
    color: '#d4d4d8',
    marginTop: 5,
    fontWeight: '400',
    marginBottom: 20
  },
  contentImagesProductsText: {
    fontSize: 16,
    color: '#d4d4d8',
    fontWeight: '200',

  }
});

export default styles;