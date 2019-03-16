import { StyleSheet, Dimensions, Platform } from "react-native";

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
		height: Platform.OS === "ios" ? deviceHeight : deviceHeight - 20,
  },
	header: {
    flex: 0.27,
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 24,
    backgroundColor: "#000",
  },
  headerIconsWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerIcon: {
		width: 30,
		resizeMode: "contain",
  },
  userInfo: {
    width: "100%",
  },
  name: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 24,
  },
  email: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 12,
  },
  content: {
    flex: 0.58,
  },
  listItem: {
    paddingHorizontal: 20,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listItemIcon: {
    color: "#FFF",
    fontSize: 30,
  },
  listItemTxt: {
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 14,
  },
});
export default styles;
