import React, { Component } from 'react';
import { Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {material} from 'react-native-typography';
export default class Home extends Component {
  render() {
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex:1}}>
    <Text style={material.display1}>
     Sign in with Facebook
    </Text>
    </LinearGradient>
    );
  }
}