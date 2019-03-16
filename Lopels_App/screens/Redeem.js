import React, { Component } from 'react';
import { Text, View, StatusBar, Image, Alert} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, Content} from 'native-base';
import * as myConstants from '../Constants';
import {material,robotoWeights} from 'react-native-typography';
export default class Redeem extends Component {

    state={redeem: null,
    shop: null,
    lopels: null}

    componentDidMount(){
        return fetch('http://gitzberry.com/kkk/redeem.php?sid='+myConstants.sid)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({shop:responseJson.shopname,lopels:responseJson.tlopels});
        })
        .catch((error) => {
          console.error(error);
        });
      }

      redeem_lopel = () =>{
        return fetch('http://gitzberry.com/kkk/uselopels.php?sid='+myConstants.sid+'&lopels='+this.state.redeem)
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson=='successful'){
                Alert.alert("Redeem successful");
                this.props.navigation.navigate('Home');
          }
          else{
              Alert.alert("Transaction Failed. Please try again");
              this.props.naviagtion.navigate('Home');
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }
  render() {
    return (
        <Container >
         <Header  style={{backgroundColor:'#0f0c29'}} >
    <StatusBar
          backgroundColor="#0f0c29"
          barStyle="light-content"
        />
        <Left><Button transparent onPress={()=>this.props.navigation.navigate('Home')}>
              <Icon name='arrow-back' />
            </Button></Left>
      <Body>
        
      <Image style={{width:110,height:110, alignSelf:'center'}}
                          source={require('../assets/logo.png')}
                        />
      </Body>
      <Right></Right>
      </Header>
      <Content>
      <Text style={[material.subheading,{textAlign:'center'}]}>You can redeem </Text>
      <Text style={[material.title,{textAlign:'center'}]}>Rs.{this.state.lopels}</Text> 
      <Text style={[material.subheading,{textAlign:'center'}]}>at</Text> 
      <Text style={[material.title,{textAlign:'center'}]}>{this.state.shop}</Text>
      <Text style={[material.subheading,{textAlign:'center'}]}>How much do you want to redeem?</Text>
      <Item rounded style={{marginTop:30}}>
            <Input placeholder='Enter the amount you want to redeem' style={robotoWeights.thin} 
                        onChangeText={redeem => this.setState({redeem})}/>
            </Item>
            <Button rounded light style={{alignSelf:'center', width:'50%',marginTop:30}} onPress={this.redeem_lopel}>
            <Text style={[robotoWeights.condensedBold,{marginLeft:'50%'}]}>Redeem</Text>
          </Button>
          </Content>
      </Container>
    );
  }
}
