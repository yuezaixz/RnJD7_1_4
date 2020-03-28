import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    Colors,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';

import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';

const HOME = 'home';
const HOME_NORMAL = require('./images/tabs/tabBar_home_normal.png');
const HOME_SELECTED = require('./images/tabs/tabBar_home_press.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('./images/tabs/tabBar_category_normal.png');
const CATEGORY_SELECTED = require('./images/tabs/tabBar_category_press.png');
const ME = 'me';
const ME_NORMAL = require('./images/tabs/tabBar_me_normal.png');
const ME_SELECTED = require('./images/tabs/tabBar_me_press.png');
const CART = 'cart';
const CART_NORMAL = require('./images/tabs/tabBar_cart_normal.png');
const CART_SELECTED = require('./images/tabs/tabBar_cart_press.png');
const MYJD = 'myjd';
const MYJD_NORMAL = require('./images/tabs/tabBar_myJD_normal.png');
const MYJD_SELECTED = require('./images/tabs/tabBar_myJD_press.png');


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TouchableOpacity  onPress={() => this.setState({selectedTab: tag})}  activeOpacity={0.2} focusedOpacity={0.5}>
                <Image
                    source={this.state.selectedTab === tag?selectedImg:img}>
                </Image>
            </TouchableOpacity>
        );
    }
    
    _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }
    _handleScroll(e) {
        this.setState({offset:e.nativeEvent.contentOffset.y})
    }
    render() {
        return (
            <View style={styles.container} >
                <StatusBar barStyle="dark-content" />
                <ScrollView 
                    style={styles.main}
                    scrollEventThrottle={100}
                    onScroll={this._handleScroll.bind(this)}>
                    
                    <HomeMain/>
                </ScrollView>
                <HomeHeader 
                    style={styles.header} 
                    offset={this.state.offset ?? 0}
                     />
                <View style={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_SELECTED, HOME, this._createChildView(HOME))}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_SELECTED, CATEGORY, this._createChildView(CATEGORY))}
                    {this._renderTabItem(ME_NORMAL, ME_SELECTED, ME, this._createChildView(ME))}
                    {this._renderTabItem(CART_NORMAL, CART_SELECTED, CART, this._createChildView(CART))}
                    {this._renderTabItem(MYJD_NORMAL, MYJD_SELECTED, MYJD, this._createChildView(MYJD))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    header: {
        position: 'absolute',
        left: 0, top: 0, right: 0
    },
    main: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    tab: {
        position: 'absolute',
        height: 52,
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 4,
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 10
    }
});

export default HomePage;
