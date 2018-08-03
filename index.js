/** @format */

import React, {Component} from 'react'
// 孙悟空到此一游
// API
// 组件
// 小心4.4真机上那个root管理不让装
import {AppRegistry, Dimensions, StyleSheet, Text, TextInput, View} from 'react-native'

let wMargin = Dimensions.get('window').width * 0.05;
// let widthOfMargin = Dimensions.get('window').width * 0.15;
// let widthOfMargin = Dimensions.get('window').width * 0.45;

// 自定义的4种样式
let myIndexStyles = StyleSheet.create({

    indexVG: {
            // 宽高自动扩展
        // 这玩意就是弹性盒子布局？好牛逼的样子
        // 还尼玛自动热更新，好他么牛逼
            flex: 1
            , backgroundColor: 'white'
        },

    inStyle: {
        margin: wMargin
        , backgroundColor: 'red'
            , fontSize: 20
        },

    outStyle: {
        margin: wMargin
        , backgroundColor: 'green'
        , fontSize: 30
        },

    bigStyle: {
        margin: wMargin
            , backgroundColor: 'gray'
            , color: 'white'
            , textAlign: 'center'
        , fontSize: 40
        }

    }
);

// 每个组件负责屏幕上的一块区域
export default class LearnRN extends Component {

    // 哟哟，所谓的状态机
    constructor(props) {
        super(props);

        // 这就叫状态机变量
        this.state = {
            num: ''
            , password: ''
        };

        // 完全理解不了，尼玛。。。。
        // this.updateNum = this.updateNum.bind(this);
        this.updatePW = this.updatePW.bind(this);

    }

    updateNum(s) {
        // this.setState(() => {
        this.setState((state) => {
                return {
                    num: s
                }
            }
        )
    }

    updatePW(s) {
        this.setState(() => {
                // this.setState((state) => {
                return {
                    password: s
                }
            }
        );
    }


    render() {

        return (

            // 大小写也能有坑？
            <View
                style={myIndexStyles.indexVG}>

                <TextInput
                    style={myIndexStyles.inStyle}
                    // 未输入时候的字符
                    placeholder={'输入手机号'}
                    onChangeText={(s) => this.updateNum(s)}>

                </TextInput>

                <Text
                    style={myIndexStyles.outStyle}>
                    已输入的手机号:
                    {this.state.num}
                </Text>

                <TextInput
                    style={myIndexStyles.inStyle}
                    placeholder={'输入密码'}
                    secureTextEntry={true}
                    // 补事件监听
                    // 箭头函数的简写方式，相当于new onClickListener

                    // 这里也能有坑？？？？
                    // 关键还不报错
                    // onChangeText={this.updatePW()}>
                    onChangeText={this.updatePW}>
                </TextInput>

                <Text
                    style={myIndexStyles.bigStyle}>
                    确定
                </Text>

            </View>

            // 标识render函数的return语句的结束
        );
        // 标识render函数定义的结束
    }

    // 标识LearnRN类定义的结束
}

// 注册组件
// 该踩的坑，一个也绕不过去
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('Test001', () => LearnRN);
