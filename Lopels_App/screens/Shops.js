import React, { Component } from 'react';
import { Text,Image,FlatList } from 'react-native';
import { Container, Card, CardItem,Content, Body, Left, Icon} from 'native-base';
import {material} from 'react-native-typography';
import * as myConstants from '../Constants';


export default class Shops extends Component {

  state={
    shops:null
  }

  componentDidMount(){
    return fetch('http://gitzberry.com/kkk/homeshop.php?mobileno='+myConstants.mobile)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({shops:responseJson.all});
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
        <Container>
        <Content>
        <FlatList 
          data = {this.state.shops}
          keyExtractor={(item)  => item.sid}
          renderItem = {({item}) =>
          <Card>
            <CardItem>
                <Left >
                    <Image
                    style={{width:150,height:110, alignSelf:'auto'}}
                    source={{uri:'http://gitzberry.com/kkk/images/'+item.image}}/>
                </Left>
              <Body >
              <Text style={material.headline}>{item.shopname}</Text>
                <Text style={material.button}>Shop for above {item.spent} and get {item.persentage}% cashback.</Text>
                <Text style={material.body1}>Local Lopels: Rs.{item.locallopels}</Text>
                <Text style={material.button}>{"\n"}Get Direction <Icon name='compass'></Icon></Text>
            </Body>
            </CardItem>
         </Card>}/>
        </Content>
      </Container>
    );
  }
}