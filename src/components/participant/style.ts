//style name participant

import { StyleSheet, View } from "react-native";

export const styles = StyleSheet.create({
container: {
    width: "100%",
    backgroundColor: '#2F4F4F',
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    marginBottom:8,
    
},
name: {
    fontSize: 16,
    color: '#A9A9A9',
    padding:10,
    flex: 1,
    alignItems: "center",
},
buttonText:{
    color: '#fff',
    fontSize: 24,
  },
  button:{
    width: 56,
    height: 56,
    backgroundColor: '#DC143C',
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7,
  },

});