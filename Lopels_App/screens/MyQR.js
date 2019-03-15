import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
 
import {StyleSheet,View,Text} from 'react-native';
import {material} from 'react-native-typography'; 
export default class MyQR extends Component {
  state = {
    text: 'http://facebook.github.io/react-native/',
  };
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={material.caption}>Scan your QR to collect cashbacks.</Text>
        <QRCode
          value={this.state.text}
          size={200}
          fgColor='white'/>
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
});