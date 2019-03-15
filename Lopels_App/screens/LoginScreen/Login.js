import React, { Component } from 'react';
import { Text,Image,StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Left, Title, Body, Right,Button,Icon, Content,Item,Input} from 'native-base';
import { robotoWeights} from 'react-native-typography';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Login extends Component {
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
            <Input placeholder='Username' style={robotoWeights.thin} placeholderTextColor="#FFFFFF"
                        onChangeText={username => this.setState({username})}/>
            </Item>
            <Item rounded style={{marginTop:10}}>
            <Input placeholder='Password' placeholderTextColor="#FFFFFF" style={robotoWeights.thin}
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
            onSubmitEditing={this.login}/>
            </Item>
            </Content>
                </Row>
                <Row style={{ height: '30%' }}>
                <Content>
                <Button rounded light style={{alignSelf:'center', width:'50%'}} onPress={() => this.props.navigation.navigate("Home")}>
            <Text style={[robotoWeights.condensedBold,{marginLeft:'50%'}]}>Login</Text>
          </Button>
          </Content>
                </Row>
                </Grid>
    </LinearGradient>
    );
  }
}