import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function JoinInput() {
  return (
    <>
        <View style={styles.container}>
            <TextInput style={styles.TextInput} />
            <Button color="green"  title='Join' style={styles.button} />
        </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
    gap:10,
    paddingBottom:"2px"
  },
  TextInput:{
      backgroundColor:'white',
      height:'50px',
      borderColor:'#e8e8e8',
      width:'250px',
      borderWidth:1,
      borderRadius: 5,
  },
  button:{
    flex:1,
    width:"100px",
    height:"220px",
    textAlign: 'center',
    display: 'inline-block',


  }
});