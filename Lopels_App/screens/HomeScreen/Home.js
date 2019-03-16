import React, { Component } from 'react';
import { Text,StatusBar,Image} from 'react-native';
import { Container, Header, Left,Tab, Tabs, TabHeading, Body, Right,Button,Icon} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import {robotoWeights} from 'react-native-typography';
import Carousel from 'react-native-smart-carousel';
import kv from '../../assets/Keventers1.jpg';
import manjeri from '../../assets/manjeri.jpg';
import naturals from '../../assets/naturals.jpg';
import seematti from '../../assets/seematti.jpg';
import Shops from '../Shops';
import Wallet from '../Wallet';
import MyQR from '../MyQR';
import QRScanner from '../QRScanner';
import MyConstants from '../../Constants';
const datacarousel = [
  {
      "id": 339964,
      "imagePath": kv
  },
  {
    "id": 3377458,
    "imagePath": seematti
  },
  {
    "id": 337885,
    "imagePath": naturals
},
{
  "id": 339403,
  "imagePath": manjeri
}
];

export default class Home extends Component {

  
  render() {
    
    return (
      <Container>
    
    <Header  style={{backgroundColor:'#0f0c29'}} hasTabs>
    <StatusBar
          backgroundColor="#0f0c29"
          barStyle="light-content"
        />
        <Left><Button transparent>
              <Icon name='menu' />
            </Button></Left>
      <Body>
        
      <Image style={{width:110,height:110, alignSelf:'center'}}
                          source={require('../../assets/logo.png')}
                        />
      </Body>
      <Right></Right>
      </Header>

      <Grid>
            <Row style={{ height: '38%' }}>
                        <Carousel data={datacarousel} autoPlay={true} playTime={3000} navigation={true} navigationColor="#0f0c29"/>
            </Row>
            <Row style={{ height: '62%' }}>
            <Tabs >
          <Tab heading={ <TabHeading style={{backgroundColor: '#0f0c29'}}><Text style={[robotoWeights.thin,{color:'#FFFFFF'}]}>Shops</Text><Icon name="cart" /></TabHeading>} >
            <Shops />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#0f0c29'}}><Text style={[robotoWeights.thin,{color:'#FFFFFF'}]}>My Wallet </Text><Icon name="folder-open" /></TabHeading>}>
            <Wallet />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#0f0c29'}}><Text style={[robotoWeights.thin,{color:'#FFFFFF'}]}>My QR </Text><Icon name="contract" /></TabHeading>}>
            <MyQR />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#0f0c29'}}><Text style={[robotoWeights.thin,{color:'#FFFFFF'}]}>Scan QR</Text><Icon name="qr-scanner" /></TabHeading>}>
            <QRScanner />
          </Tab>
        </Tabs>
            </Row>
      </Grid>

      </Container>
    );
  }
}