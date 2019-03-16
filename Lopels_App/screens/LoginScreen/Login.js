import React, { Component } from 'react';
import { Text,Image,StatusBar,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Content,Item,Input} from 'native-base';
import { robotoWeights} from 'react-native-typography';
import { Row, Grid } from 'react-native-easy-grid';
import * as myConstants from '../../Constants';
export default class Login extends Component {

  state={
    mobile: null,
    pin: null,
    access: null,
  }

  login = () => {
    myConstants.mobile=this.state.mobile;
    return fetch('http://gitzberry.com/kkk/userdetails.php?mobileno='+this.state.mobile+'&pin='+this.state.pin)
      .then((response) => response.json())
      .then((response) => {
          this.setState({access: response.access});
          myConstants.id=response.id;
            this.checkAccess();
        
      })
      .catch((error) =>{
        console.error(error);
      });
  }
 checkAccess() {
     if(this.state.access=='G'){
           //myConstants.mobile=this.state.mobile;
         this.props.navigation.navigate('Home');
     }else{
        Alert.alert('Access Denied', 'Invalid Username or password');
     }
 }
  render() {
    return (
        
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={{flex:1}}>
      <StatusBar
          backgroundColor="#0f0c29"
          barStyle="light-content"
        />
    <Grid>
                <Row style={{ height: '30%'}}>
                <Content>
                <Image
                          style={{width:200,height:200, alignSelf:'center'}}
                          source={require('../../assets/logo.png')}
                        />
                        </Content>
                </Row >
                <Row style={{height: '40%' }}>
                <Content>
                <Item rounded style={{marginTop:80}}>
            <Input placeholder='Phone' style={[robotoWeights.thin,{color:'#FFFFFF'}]} placeholderTextColor="#FFFFFF"
                        onChangeText={mobile => this.setState({mobile})}/>
            </Item>
            <Item rounded style={{marginTop:10}}>
            <Input placeholder='Lopels Pin' placeholderTextColor="#FFFFFF" style={[robotoWeights.thin,{color:'#FFFFFF'}]}
            secureTextEntry={true}
            onChangeText={pin => this.setState({pin})}
            onSubmitEditing={this.login}/>
            </Item>
            </Content>
                </Row>
                <Row style={{ height: '30%' }}>
                <Content>
                <Button rounded light style={{alignSelf:'center', width:'50%'}} onPress={this.login}>
            <Text style={[robotoWeights.condensedBold,{marginLeft:'50%'}]}>Login</Text>
          </Button>
          </Content>
                </Row>
                </Grid>
    </LinearGradient>
    );
  }
}