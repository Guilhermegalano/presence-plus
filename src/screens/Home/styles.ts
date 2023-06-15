import { StyleSheet, ImageBackground } from "react-native"


export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // ou 'stretch' para esticar a imagem
    },
    eventName:{
      color: '#fdfcfe',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
      },
    eventDate:{
      fontSize: 16,
      color: '#6b6b6b',
      
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#2F4F4F',
      color: '#A9A9A9',
      padding: 10,
      fontSize: 16,
      borderRadius: 7,
      marginRight: 7,
    },
    buttonText:{
      color: '#fff',
      fontSize: 24,
    },
    button:{
      width: 56,
      height: 56,
      backgroundColor: '#32CD32',
      borderRadius: 7,
      alignItems: "center",
      justifyContent: "center",
    
    },
    form: {
      width: '100%',
      flexDirection: "row",
      marginTop: 15,
      marginBottom: 46,
    },
    listEmptyText:{
      color: '#f1f1f1',
      fontSize: 14,
      alignItems:"center",
    }
  })