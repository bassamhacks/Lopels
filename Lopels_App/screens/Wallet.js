import React, { Component } from "react";
import { Platform, StyleSheet, FlatList, Text, View, Alert } from "react-native";
import {material} from 'react-native-typography';
export default class HomeActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      GridListItems: null,
      globallopels: null,
      locallopels: null
    };
  }

  componentDidMount(){
    return fetch('http://gitzberry.com/kkk/wallet.php?mobileno='+'9447100043'+'&t=t')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({globallopels:responseJson.globallopels, locallopels:responseJson.locallopels});
      this.nextAPI();
    })
    .catch((error) => {
      console.error(error);
    });
    
  }

  nextAPI(){
    return fetch('http://gitzberry.com/kkk/wallet.php?mobileno='+'9447100043'+'&t=l')
    .then((response) => response.json())
    .then((response) => {
      this.setState({GridListItems:response.all});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
     return (
       <View style={styles.container}>

        <Text style={material.title}>Global Wallet Balance: Rs.{this.state.globallopels} </Text>
        <Text style={material.title}>Local Wallet Balance: Rs.{this.state.locallopels} </Text>
         <FlatList
            data={ this.state.GridListItems }
            keyExtractor={(item)  => item.sid}
            renderItem={ ({item}) =>
              <View style={styles.GridViewContainer}>
               <Text style={styles.GridViewTextLayout} > {item.shopname} </Text>
               <Text style={material.body2White} > Rs.{item.locallopels} </Text>
              </View> }
            numColumns={2}
         />
       </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   height: 100,
   margin: 5,
   backgroundColor: '#302b63'
},
GridViewTextLayout: {
   fontSize: 20,
   fontWeight: 'bold',
   justifyContent: 'center',
   color: '#fff',
   padding: 10,
 }
});