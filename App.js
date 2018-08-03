/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// 这叫jsx语法？
import React, {Component} from 'react';
import {AppRegistry, Dimensions, PixelRatio, StyleSheet, Text, View} from 'react-native'
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu孙悟空到此一游',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>Welcome to React Native!</Text>
//                 <Text style={styles.instructions}>To get started, edit App.js</Text>
//                 <Text style={styles.instructions}>{instructions}</Text>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });

const {
    height
    , width
// Dimensions是啥
} = Dimensions.get('window');

// PixelRatio是啥,像素密度
const pr = PixelRatio.get();

const myAppStyles = StyleSheet.create({

    container: {

        flex: 1
        , justifyContent: 'center'
        , alignItems: 'center'
        , backgroundColor: '#F5FCFF'

    },

    welcome: {
        fontSize: 20
        , textAlign: 'center'
        , margin: 10
    },

    instructions: {
        textAlign: 'center'
        , color: '#333333'
        , marginBottom: 5
    }

});

// component是啥
export default class LearnRN extends Component {

    // 这个是系统的方法
    render() {

        // 呵呵
        let aValue;
        console.log('render被executed执行了')
        console.log('height:' + height)
        console.log('aValue:' + aValue)
        console.log('aValue type：' + typeof (aValue))

        return (

            <View
                style={myAppStyles.container}>

                <Text
                    style={myAppStyles.welcome}>
                    1dp等于{pr}个实际px
                    {/*1dp等于{pr}个实际px\n 孙悟空到此一游*/}
                </Text>

                <Text
                    style={myAppStyles.instructions}>
                    手机屏幕宽度为{width}个dp
                </Text>

                <Text
                    style={myAppStyles.instructions}>
                    手机屏幕高度为{height}个dp
                </Text>

            </View>

        );

    }

}


AppRegistry.registerComponent('LearnRN', () => LearnRN)
