import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image,BackHandler} from 'react-native';
import {Header,Container,Content, Button, Left, Right, Title, Body,Item} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from 'react-navigation';
var User = require('../../../assets/images/user.png');
var Points = require('../../../assets/images/points.png');
var Redeem= require('../../../assets/images/redeem.png');
var Send= require('../../../assets/images/send.png');

export default class Profile extends Component {
   componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

}

 componentWillUnmount = () => {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}


handleBackPress = () => {
  this.props.navigation.navigate("Main"); // works best when the goBack is async
  return true;
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
        <View style={styles.layout}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: '40%', height: 200}}>
                        <View style={styles.user}>  
                            <Image
                            source={User} style={{ width:150, height: 150}}/>
                        </View>
                </View>
                <View style={{width: '60%', height: 200,}}>
                    <View style={styles.info}>
                        <Text style={styles.name}>{this.props.navigation.state.params.NAME}</Text>
                        <Text style={styles.mobile}>+91 9538154736</Text>
                        <Text style={styles.email}>johndoe@gmail.com</Text>
                    </View> 
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width:'40%', height:130, backgroundColor:'#007991'}}>
                    <Image
                        source={Points} style={{marginLeft: '5%', marginTop:'4%', width:120, height: 120}}/>
                </View>
                <View style={{width:'60%', height:130, backgroundColor:'#007991'}}>
                    <View style={styles.infoPoints}>
                        <Text style={styles.total}>{this.props.navigation.state.params.NAME} Can Redeem</Text>
                        <Text style={styles.points}>Rs.{this.props.navigation.state.params.Local_Amount}</Text>
                    </View> 
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row',marginTop:'2%'}}>
                <View style={{width:'50%', marginLeft:'25%', height:220, alignItems:'center'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Send',{cid:this.props.navigation.state.params.CID,sid:this.props.navigation.state.params.SID})} >
                    <Image
                        source={Send} style={{ marginTop:'25%', width:100, height: 100}}/>
                    </TouchableOpacity>    
                    <Text onPress={() => this.props.navigation.navigate('Send',{cid:this.props.navigation.state.params.CID,sid:this.props.navigation.state.params.SID})} style={styles.sendRedeem}>Send Cashback</Text>
                </View>
            </View>
        </View>
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
    user:{
        flex:1,
        alignItems:'center',
        marginTop: '20%'
    },
    info:{
        alignItems:'flex-end',
        marginTop: '35%',
        marginRight:'15%',
    },
    name:{
        fontFamily: 'Actor',
        fontSize:26,
        fontWeight: '400',
    },
    mobile:{
        fontSize:14,
    },
    email:{
        fontSize:14,
    },
    layout:{
        flexDirection:'column',

    },
    infoPoints:{
        alignItems:'flex-start',
        marginTop: '17%',
        marginLeft:'5%',
    },
    total:{
        fontFamily:'Actor',
        fontSize: 20,
        color: 'white'
    },
    points:{
        fontFamily:'Arial',
        fontSize: 30,
        color: 'white',
    },
    sendRedeem:{
        fontFamily:'Actor',
        marginTop:'2%',
        color: 'black',
        fontSize:18,
    },
})