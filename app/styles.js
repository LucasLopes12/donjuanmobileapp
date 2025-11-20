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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#101010',
    borderRadius: 5,
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 15,
  },
  textHeader: {
    display: 'flex',
    fontSize: 12,
    color: '#d4d4d8',
  },
  imageHeader: {
    width: 40,
    height: 40,
  },
  dashboard: {
    paddingTop: 70,
    marginTop: 45,
    height: 270,
    borderRadius: 15,
    width: '85%',
  },
  dashboardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  contentSessions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '90%',
    marginTop: 60,
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
  contentLine: {
    marginTop: 15,
    marginLeft: 14,
    width: '90%',
    height: 1,
    backgroundColor: '#bbc5caff',
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

  },
  starRatings: {
    height: 15,
    width: 8.5,
  },
  starRatingsReversed: {
    height: 15,
    width: 8.5,
    transform: [{ scaleX: -1 }],
  },
  starRatingsDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  moneyPricingsDiv: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  moneyPricings: {
    height: 17,
    width: 8.5,
  },
});

export default styles;