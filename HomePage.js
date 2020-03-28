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

const HomePage: () => React$Node = () => {
    state = {
        selectedTab: HOME
    }

    var _renderTabItem = function(img, selectedImg, tag, childView) {
        return (
            <TouchableOpacity  onPress={() => state.selectedTab = tag}  activeOpacity={0.2} focusedOpacity={0.5}>
                <Image
                    source={state.selectedTab === tag?selectedImg:img}>
                </Image>
            </TouchableOpacity>
        );
    }
    
    var _createChildView = function(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    return (
        <>
        <StatusBar barStyle="dark-content" />
        <HomeHeader/>
        <ScrollView>
            <HomeMain/>
        </ScrollView>
        <View style={styles.tab}>
            {_renderTabItem(HOME_NORMAL, HOME_SELECTED, HOME, _createChildView(HOME))}
            {_renderTabItem(CATEGORY_NORMAL, CATEGORY_SELECTED, CATEGORY, _createChildView(CATEGORY))}
            {_renderTabItem(ME_NORMAL, ME_SELECTED, ME, _createChildView(ME))}
            {_renderTabItem(CART_NORMAL, CART_SELECTED, CART, _createChildView(CART))}
            {_renderTabItem(MYJD_NORMAL, MYJD_SELECTED, MYJD, _createChildView(MYJD))}
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    tab: {
        height: 52,
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
