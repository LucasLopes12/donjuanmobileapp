import { StyleSheet } from 'react-native';

const blackColor = '#000';
const grayColor = '#bfbfceff';

const styles = StyleSheet.create({
  container: {
    backgroundColor: grayColor,
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    zIndex: 10,
    width: '100%',
    backgroundColor: grayColor,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 30,
    borderRadius: 5
  },

  textHeader: {
    fontSize: 12,
    fontWeight: '400',
    color: blackColor,
  },

  imageHeader: {
    width: 40,
    height: 40,
    backgroundColor: blackColor,
    borderRadius: 20,
  },

  contentSessions: {
    width: '90%',
    marginTop: 42,
  },

  contentRatings: {
    flexDirection: 'column',
    width: '100%',
  },

  contentText: {
    fontSize: 20,
    fontWeight: '400',
    color: blackColor,
  },

  contentLine: {
    marginTop: 15,
    width: '90%',
    height: 1,
    backgroundColor: blackColor,
    alignSelf: 'center',
  },

  contentImages: {
    flexDirection: 'row',
    width: 300,
    paddingTop: 20,
    marginRight: -12
  },


  contentImagesProducts: {
    flexDirection: 'row',
    width: 270,
    height: 145,
    backgroundColor: '#1c2336ff',
    borderRadius: 10,
    paddingTop: 7,
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
    flexDirection: 'row',
  },

  moneyPricingsDiv: {
    marginTop: 5,
    flexDirection: 'row',
  },

  moneyPricings: {
    height: 17,
    width: 8.5,
  },

  slideImage: {
    width: 250,
    height: 160,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  slide: {
    width: 300,
    height: 180,
    borderRadius: 10,
    marginRight: 12,
    overflow: 'hidden',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  slideTitle: {
    position: 'absolute',
    bottom: 10,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  carouselContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 140,
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContato: {
    fontWeight: '400',
    marginBottom: 80,
    fontSize: 20,
    fontFamily: 'monospace',
    margin: 10,
    marginLeft: '5%',
  },
  devsPicsContato: {
    borderRadius: 90,
    width: 180,
    height: 180,
    backgroundColor: blackColor
  },
  space: {
    marginTop: 100
  },
  devsContato: {
    marginBottom: 100,
    marginLeft: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  devsContatoName: {
    marginBottom: 14,
    fontSize: 22,
    fontWeight: 'bold',
  },
  devsContatoInfo: {
    width: 155,
  },
  devsPicsSocialMedia: {
    width: 17,
    height: 17,
    marginRight: 4
  },
  devsContatoSessions: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5
  }

});

export default styles;
