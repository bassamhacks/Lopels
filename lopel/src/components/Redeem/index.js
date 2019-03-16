import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, BackHandler} from 'react-native';
import {Header,Container, Left, Right, Title, Body, Button, Content, Form, Item, Input, Label} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from 'react-navigation';

export default class Send extends Component {
  render() {
    return (
        <Container>
        <Header style={styles.header }
          androidStatusBarColor="#007991">
          <Left style={{flex:1}}>
          <TouchableOpacity  onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} >
          <Icon name="md-arrow-back" size={25} color="white"/>
          </TouchableOpacity>
          </Left> 
          <Body style={{flex:1}}>
            <Title style={styles.navTitle}>Lopels</Title>
          </Body>
          <Right style={{flex:1}}>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Enter Points to Redeem</Label>
              <Input />
            </Item>
          </Form>
          <Body>
        <View style={{marginTop:'5%', alignItems:'center'}}>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate("Profile")}>
            <View  style={styles.btnText}>
            <Text style={styles.buttonText}>Redeem</Text>
            </View>
        </Button>
        </View>
        </Body>
        </Content>
        </Container>
    );
  }
}


const styles = StyleSheet.create({
    header:{
        backgroundColor: "#007991",
    },
    navTitle:{
        fontFamily: 'Graceland',
        alignItems:'center',
    },
    button:{
        justifyContent: "center",
        marginTop: '2%',
        width:200,
        borderRadius: 10,
        backgroundColor:'#007991',
        borderColor: "transparent",
      },
      buttonText:{
        fontFamily: 'Actor',
        color: 'white',
        fontSize: 18,
      },
      btnText:{
        flexDirection: "row",
        justifyContent: "center",  
      },
})