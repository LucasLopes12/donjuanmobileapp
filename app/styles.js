import { StyleSheet} from 'react-native';

const blackColor = '#000';
const grayColor = '#bfbfceff';

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial',
  },
  container: {
    backgroundColor: grayColor,
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
    backgroundColor: grayColor,
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
    color: blackColor,
  },
  imageHeader: {
    width: 40,
    height: 40,
    backgroundColor: blackColor,
    borderRadius: 20,
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
    marginTop: 42,
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
    color: blackColor,
  },
  contentLine: {
    marginTop: 15,
    marginLeft: 14,
    width: '90%',
    height: 1,
    backgroundColor: blackColor,
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
    backgroundColor: '#1c2336ff',
    borderRadius: 10,
    paddingTop: 7
  },
    contentImagesImage: {
    width: 130,
    height: 130,
  },
  contentImagesProductsTextTitle: {
    fontSize: 18,
    color: grayColor,
    marginTop: 5,
    fontWeight: '400',
    marginBottom: 6,
  },
  contentImagesProductsText: {
    fontSize: 16,
    color: blackColor,
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
  slide: {

  },
  slideImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',  
  }
});

export default styles;