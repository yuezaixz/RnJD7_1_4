import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
const BANNER_IMGS = [
  require('./images/banner/bankList_whiteCard_bg.png'),
  require('./images/banner/couponcenter_category_bg.png'),
  require('./images/banner/bankList_whiteCard_bg.png'),
  require('./images/banner/couponcenter_category_bg.png'),
];

class HomeMain extends Component {
  constructor(props) {
    super(props);
  }

  _renderPage(data) {
    return (
      <Image source={data} style={styles.page}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          horizontal={true} 
          pagingEnabled={true}
          // bounces={false}
          style={styles.viewPager}  >
          {this._renderPage(BANNER_IMGS[0])}
          {this._renderPage(BANNER_IMGS[1])}
          {this._renderPage(BANNER_IMGS[2])}
          {this._renderPage(BANNER_IMGS[3])}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:1200,
    width:'100%',
    backgroundColor:'black'
  },
  viewPager: {
    height: 130,
    width: '100%',
    flexDirection: 'column',
  },
  pagerContent: {
    
  },
  page: {
    width: '100%',
    height: 130,
    resizeMode: 'cover'
  }
});

export default HomeMain;
