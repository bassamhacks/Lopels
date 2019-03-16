import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, BackHandler, Alert} from 'react-native';
import {Header,Container, Left, Right, Title, Body, Button, Content, Form, Item, Input, Label} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from 'react-navigation';

export default class Send extends Component {
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      bill_no: '',
      Total_Amount: '',
      credits:''
    }
 
  }
  addMoney = () =>{
 
    
   return fetch('http://gitzberry.com/kkk/getlopels.php?cid='+this.props.navigation.state.params.CID+'&sid='+this.props.navigation.state.params.SID+'&amount='+this.state.Total_Amount)
   .then((response) => response.json())
         .then((responseJson) => {
   
           if(responseJson.status === 'success')
           { 
                Alert.alert(responseJson.status);
               //Then open Profile activity and send user email to profile activity.
              //  this.props.navigation.navigate('Main', { Name: UserName, ID: responseJson.ID });
    
           }
   // Showing response message coming from server after inserting records.
   else{
    Alert.alert(responseJson.status);
  }
    

  }).catch((error) => {
    console.error(error);
  });

}
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
              <Label>Enter Bill No.</Label>
              <Input onChangeText={bill_no => this.setState({bill_no})}/>
            </Item>
            <Item stackedLabel last>
              <Label>Enter Total Amount:</Label>
              <Input onChangeText={Total_Amount => this.setState({Total_Amount})}/>
            </Item>
          </Form>
          <Body>
        <View style={{marginTop:'5%', alignItems:'center'}}>
        <Button style={styles.button} onPress={this.addMoney}>
            <View  style={styles.btnText}>
            <Text style={styles.buttonText}>Send</Text>
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