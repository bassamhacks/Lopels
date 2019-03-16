import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header,Container,Content, Button, Left, Right, Title, Body,Item} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
var Banner = require('../../../assets/images/Banner.png');
var QR = require('../../../assets/images/qr.png');
import { DrawerActions } from 'react-navigation';
import styles from './style.js';
var Points = require('../../../assets/images/points.png');
var Kalyan = require('../../../assets/images/kalyan.png');
import QRCode from 'react-native-qrcode';



export default class Main extends Component {
  render() {
    return (
        <Container>
        <Header style={styles.header }
          androidStatusBarColor="#007991">
          <Left style={{flex:1}}>
          <TouchableOpacity  onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} >
          <Icon name="md-menu" size={30} color="white"/>
          </TouchableOpacity>
          </Left> 
          <Body style={{flex:1}}>
            <Title style={styles.navTitle}>Lopels</Title>
          </Body>
          <Right style={{flex:1}}>
          </Right>
        </Header> 
        <Content>
        <Item>
        <Image
          source={Kalyan} style={{ width:390, height: 200}}
        />
        </Item> 
        <View>
            <Text style={styles.title}>{this.props.navigation.state.params.shopName}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row',paddingBottom:'4%'}}>
                <View style={{width:'40%', height:100,}}>
                    <Image
                        source={Points} style={{marginLeft: '5%',  width:120, height: 120}}/>
                </View>
                <View style={{width:'60%',height:100}}>
                    <View style={styles.infoPoints}>
                        <Text style={styles.total}>Lopels Wallet:</Text>
                        <Text style={styles.points}>Rs.{this.props.navigation.state.params.Wallet}</Text>
                    </View> 
                </View>
          </View>
          <View style={{alignItems:'center'}}>
          <QRCode
          value={this.props.navigation.state.params.ID}
          size={150}
          bgColor='black'
          fgColor='white'/>
          </View>
        
        <Body>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('QRScanner',{ID1:this.props.navigation.state.params.ID})}>
            <View  style={styles.btnText}>
            <Text style={styles.buttonText}>Scan QR Code</Text>
            </View>
        </Button>
        </Body>
        <Body>
            <Text style={styles.tag}>Scan QR code to send and redeem points</Text>
        </Body>    
        </Content>
        </Container>    
    );
  }
}



