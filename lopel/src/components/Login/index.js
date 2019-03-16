import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Text, Alert, View,AsyncStorage} from 'react-native';
import { Container, Form, Item, Input, Label, Button, Body,Header, Content} from 'native-base';
import styles from "./styles";

export default class Login extends Component {
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserName: '',
      UserPassword: ''
 
    }
 
  }
 
  UserLoginFunction = () =>{
 
 
 
 
 
return fetch('http://www.gitzberry.com/kkk/shoplogin.php?username='+this.state.UserName+'&password='+this.state.UserPassword)
  
 
.then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.access === 'G')
        { 
             // Alert.alert(responseJson.ID)
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Main', {ID: responseJson.sid,Wallet: responseJson.wallet,shopName: responseJson.shopname});
 
        }
// Showing response message coming from server after inserting records.
else{
        Alert.alert(responseJson.access);
      }

      }).catch((error) => {
        console.error(error);
      });
 
 
  }
  render() {
    return (
      <Container>
      <LinearGradient colors={['#007991','#78ffd6']} style={styles.linearGradient}>
      <Content>
        <Text style={styles.logoText}>
          Lopels
        </Text>
        <Text style={styles.tagText}>
          The Complete Loyalty Platform
        </Text>
        <Form style={styles.form}>
            <Item floatingLabel>
              <Label style={styles.usrname}>Username</Label>
              <Input  onChangeText={UserName => this.setState({UserName})}/>
            </Item>
            <Item floatingLabel>
              <Label style={styles.password}>Password</Label>
              <Input onChangeText={UserPassword => this.setState({UserPassword})} secureTextEntry={true} />
            </Item>
        </Form> 
        <Body>
        <Button style={styles.button} onPress={this.UserLoginFunction}>
            <View  style={styles.btnText}>
            <Text style={styles.buttonText}>LOGIN</Text>
            </View>
        </Button>
        </Body>
        </Content>
      </LinearGradient>
      </Container>
    );
  }
}


