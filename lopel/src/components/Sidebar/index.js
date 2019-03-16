import * as React from "react";

import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
} from "react-native";

import styles from "./styles";

class Sidebar extends React.Component<Props> {

	constructor(props) {
		super(props);

		this.listItems = [
			{ name: "Login", route: "Login"},
			{ name: "Home", route: "Home" },
			{ name: "QR Scanner", route: "QRScanner"},
		];
	}

	handleListItemPress = (route) => {
    this.props.navigation.navigate(route);
	}

	renderItem = ({item}) => {
		return (
      <TouchableOpacity onPress={() => this.handleListItemPress(item.route)} style={styles.listItem}>
        <View style={styles.listLeft}>
          <Text style={styles.listItemTxt}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
		);
	}

	render() {

		return (
			<View style={styles.sidebar}>
        <View style={styles.header}>
					<View style={styles.headerIconsWrapper} />
					<View style={styles.userInfo}>
            <Text style={styles.name}>Username</Text>
            <Text style={styles.email}>user@gmail.com</Text>
          </View>
        </View>

				<View style={styles.content}>
					<FlatList
            extraData={this.props}
            data={this.listItems}
						renderItem={this.renderItem}
						keyExtractor={item => item.name}
					/>
				</View>
			</View>
		);
	}
}

export default Sidebar;
