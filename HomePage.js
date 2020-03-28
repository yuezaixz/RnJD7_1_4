import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    Colors 
} from 'react-native';

import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import TabNavigator from 'react-native-tab-navigator';

const HomePage: () => React$Node = () => {
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
            <HomeHeader/>
            <HomeMain/>
        </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
});

export default HomePage;
