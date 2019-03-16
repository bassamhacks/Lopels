import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Text, Alert, View} from 'react-native';
import { Container, Header, Content, Button} from 'native-base';

//  styles
import styles from "./styles";
export default class App extends Component {
  	render() {
    return (
      <Container>
      <LinearGradient colors={['#007991', '#78ffd6']} style={styles.linearGradient}>
        <Text style={styles.logoText}>
          Lopels
        </Text>
        <Text style={styles.tagText}>
          The Complete Loyalty Platform
        </Text>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={styles.buttonText}>Get Started</Text>
        </Button>
      </LinearGradient>
      </Container>
    );
  }
}
