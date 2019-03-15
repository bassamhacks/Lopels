import React, { Component } from 'react';
import { Text, View,Image,TouchableHighlight } from 'react-native';
import { Container, Header, Card, CardItem,Content, Body, Left,Right, Button, Icon} from 'native-base';
import {material} from 'react-native-typography';
export default class Shops extends Component {
  render() {
    return (
        <Container>
        <Content>
          <Card>
            <CardItem>
                <Left >
                    <Image
                    style={{width:150,height:110, alignSelf:'auto'}}
                    source={require('../assets/seematti.jpg')}/>
                </Left>
              <Body >
              <Text style={material.headline}>Seematti</Text>
                <Text style={material.button}>Shop for above Rs.1000 and get 5% cashback.</Text>
                <Text style={material.body1}>Local Lopels: Rs.500</Text>
                <Text style={material.button}>{"\n"}Get Direction <Icon name='compass'></Icon></Text>
            </Body>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}