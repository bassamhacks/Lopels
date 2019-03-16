import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingRight: 5,
  },
  logoText: {
    fontSize: 50,
    fontFamily: 'Graceland',
    textAlign: 'center',
    marginTop: 170,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  tagText:{
    fontSize:15,
    letterSpacing: 3,
    fontFamily:'Actor',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'transparent',
  },
  button:{
    marginLeft: '15%',
    marginTop: '8%',
    width:250,
    borderRadius: 10,
    backgroundColor:'#ffffff',
    borderColor: "transparent",
  },
  buttonText:{
    marginTop: '8%',
    marginLeft: '35%',
    fontFamily: 'Actor',
    color: '#282828',
    fontSize: 18,
  }
});
export default styles;
