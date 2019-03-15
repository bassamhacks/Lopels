import React, { Component } from "react";
import { Platform, StyleSheet, FlatList, Text, View, Alert } from "react-native";
import {material} from 'react-native-typography';
export default class HomeActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      GridListItems: [
        { key: "Skptricks" },
        { key: "Sumit" },
        { key: "Amit" },
        { key: "React" },
        { key: "React Native" },
        { key: "Java" },
        { key: "Javascript" },
        { key: "PHP" },
        { key: "AJAX" },
        { key: "Android" },
        { key: "Selenium" },
        { key: "HTML" },
        { key: "Database" },
        { key: "MYSQL" },
        { key: "SQLLite" },
        { key: "Web Technology" },
        { key: "CSS" },
        { key: "Python" },
        { key: "Linux" },
        { key: "Kotlin" },
      ]
    };
  }

  GetGridViewItem(item) {
    Alert.alert(item);
  }

  render() {
     return (
       <View style={styles.container}>

        <Text style={material.title}>Global Wallet Balance: Rs.1500 </Text>
        <Text style={material.title}>Local Wallet Balances: </Text>
         <FlatList
            data={ this.state.GridListItems }
            renderItem={ ({item}) =>
              <View style={styles.GridViewContainer}>
               <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
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