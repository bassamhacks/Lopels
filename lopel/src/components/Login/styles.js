import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  logoText: {
    fontSize: 50,
    fontFamily: 'Graceland',
    textAlign: 'center',
    marginTop: 120,
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
  form: {
    paddingTop: 30,
  },
  usrname:{
    color: '#f2f2f2',
  },
  password:{
    color: '#f2f2f2',
  },
  button:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop: '10%',
    width:200,
    borderRadius: 10,
    backgroundColor:'#ffffff',
    borderColor: "transparent",
  },
  buttonText:{
    fontFamily: 'Actor',
    paddingBottom: '7%',
    color: '#282828',
    fontSize: 18,
  },
  btnText:{
    flexDirection: "row",
    justifyContent: "center",  
  }
});

export default styles;
