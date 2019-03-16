import React from "react";

import {Dimensions} from "react-native";

//	third party components
import { createStackNavigator, createAppContainer} from "react-navigation";
//	container components
import Login from "./components/Login";
import Home from "./components/Home";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Send from "./components/Send";
import Redeem from "./components/Redeem";
import QRScanner from "./components/QR";

const deviceWidth = Dimensions.get("window").width;

// const Drawer = createDrawerNavigator(
// 	{
	
// 	Main: {screen: Main},
// 	Profile: {screen: Profile},
// 	Send: {screen: Send},
// 	Redeem:{screen: Redeem},
// 	QRScanner:{screen: QRScanner},
    
//     },
// 	{
// 		drawerWidth: deviceWidth * 0.85,
// 		initialRouteName: "Main",
// 		contentComponent: props => <Sidebar {...props} />,
// 		}
// );
const RootStack = createStackNavigator(
	{
		Main: {screen: Main},
		Profile: {screen: Profile},
		Send: {screen: Send},
		Redeem:{screen: Redeem},
		QRScanner:{screen: QRScanner},
		//Drawer: { screen: Drawer },
		Home: {screen: Home},
		Login: { screen: Login }
	},
	{
		initialRouteName: "Home",
		headerMode: "none",
	}
);

const App = createAppContainer(RootStack);

export default () => (
  <App />
);
