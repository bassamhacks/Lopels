import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,Linking,BackHandler,Alert} from 'react-native';
import {Header,Container,Content, Button, Left, Right, Title, Body,Item} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
var Banner = require('../../../assets/images/Banner.png');
var QR = require('../../../assets/images/qr.png');
import { DrawerActions } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default class QRScanner extends Component {
  
  onSuccess(e) {
    // Alert.alert(JSON.stringify(e.data));
    // fetch('http://gitzberry.com/lopels/getDetails.php?CID='+this.props.navigation.state.params.ID1+'&SID='+e.data, {
    // method: 'POST',
    // headers: {
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json',
    this.props.navigation.navigate('Send', {CID:e.data, SID:this.props.navigation.state.params.ID1});
  // },
  
 
}
// Showing response message coming from server after inserting records.


    // this.props.navigation.navigate("Profile")
  
  render() {
    return (
      <QRCodeScanner
      onRead={this.onSuccess.bind(this)}
    />
  );
}
}

const styles = StyleSheet.create({
centerText: {
  flex: 1,
  fontSize: 18,
  padding: 32,
  color: '#777',
},
textBold: {
  fontWeight: '500',
  color: '#000',
},
buttonText: {
  fontSize: 21,
  color: 'rgb(0,122,255)',
},
buttonTouchable: {
  padding: 16,
},
});



