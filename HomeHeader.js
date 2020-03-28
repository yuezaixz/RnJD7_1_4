import React, { Component } from 'react';
import { 
  View, 
  Image, 
  Text,
  TextInput, 
  StyleSheet,
  PixelRatio,
  Dimensions,
  Platform,
  NativeModules
} from 'react-native';
const { StatusBarManager } = NativeModules;

/**
 * 根据是否是iPhoneX返回不同的样式
 * @param iphoneXStyle
 * @param iosStyle
 * @param androidStyle
 * @returns {*}
 */

export function ifIphoneX(iphoneXStyle, iosStyle, androidStyle) {
  console.log(StatusBarManager.HEIGHT)
    if (StatusBarManager.HEIGHT == 44) {
        return iphoneXStyle;
    } else if (Platform.OS === 'ios') {
        return iosStyle
    } else {
        if (androidStyle) return androidStyle;
        return iosStyle
    }
}

class HomeHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchRow} >
          <View style={styles.headerBtn}>
            <Image style={styles.headerBtnImage} source={require('./images/header/JDMainPage_icon_scan.png')}/>
            <Text style={styles.headerBtnText}>扫啊扫</Text>
          </View>
          <View style={styles.searchBox}>
            <Image source={require('./images/header/icon-search.png')} style={styles.searchIcon}/>
            <TextInput
                keyboardType='web-search'
                placeholder='iPhone11系列至高减700'
                style={styles.inputText}/>
            <Image source={require('./images/header/cat_JDMainPage_icon_voiceHelper.png')} style={styles.voiceIcon}/>
          </View>
          <View style={styles.headerBtn}>
            <Image style={styles.headerBtnImage} source={require('./images/header/MenuIconMessage_White.png')}/>
            <Text style={styles.headerBtnText}>消息</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: StatusBarManager.HEIGHT,   // 处理iOS状态栏
        height: 130,   // 处理iOS状态栏
        backgroundColor: '#d74047',
        alignItems: 'center'
    },
    searchRow: {
        flexDirection: 'row',
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 24,
        width: 64,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    headerBtn: {
      height: 36,
      width: 36,
      borderRadius: 18,
      backgroundColor: '#333333aa',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headerBtnText: {
      fontSize: 8,
      color: 'white'
    },
    headerBtnImage: {
        marginTop: 3,
        height: 20,
        width: 20,
        resizeMode: 'stretch'
    },
    searchBox: {
        height: 30,
        flexDirection: 'row',
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
        borderRadius: 15,  // 设置圆角边
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12
    },
    scanIcon: {
        height: 26.7,
        width: 26.7,
        resizeMode: 'stretch'
    },
    searchIcon: {
        marginLeft: 10,
        marginRight: 12,
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch'
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 10,
        width: 22,
        height: 22,
        resizeMode: 'stretch'
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14
    }
});

export default HomeHeader;
