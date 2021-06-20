import { StyleSheet } from "react-native";

export const textPrimary = "#E6FF2E";
export const textSecondary = "#9200FA";
export const textTertiary = "#FFF";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#220338",
    alignItems: "center",


  },
  logoApp: {

    width: 200,
    resizeMode: 'contain',

  },
  menuCircle: {
    borderRadius: 100,
    backgroundColor: '#B900FA',
    width: 200,
    height: 200,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },

  menuItem: {
    fontFamily: "Montserrat-Black",
    color: '#fff',
    
  },
  background: {
    backgroundColor: "#220338",
  },
  gameContainer:{
    width:200,
    
  },
  person: {
    padding: 10,
    
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  planet: {
    padding: 10,
    backgroundColor: "#fcc",
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: "Montserrat-Black",
    position: "absolute",
    bottom:10,
    left:2,
    color:'#E6FF2E'
  },
  label: {
    color: "#666",
  },
  image: {
    height: 300,
    width: 300,
  },
  bgImage: {
    height: 200,
    width: 200,
    borderRadius: 30,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  game:{
    backgroundColor: "rgba(146,0,250,0.25)",
    position: 'absolute',
    height:200,
    width:200,
    borderRadius:30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  score:{
    fontFamily: "Montserrat-Black",
    color:'#fff'
  },
  genres:{
    fontFamily: "Montserrat-Black",
    color:'#fff',
    
  },
  platforms:{
    fontFamily: "Montserrat-Black",
    color:'#E6FF2E'
  },
  date:{
    fontFamily: "Montserrat-Regular",
    color:'#fff'
  },
});
