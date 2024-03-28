import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: '#1F1E25',
        color: '#',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    name: {
        color: '#fff',
        marginRight: 12,
        flex: 1,
        marginLeft: 15,
        fontSize:16

    },
    buttonText: {
        color: '#fff',
        fontSize: 24
      },
      button: {
        width: 56,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#740505',
        justifyContent: 'center',
        alignItems: 'center'
      }

})