import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function JoinInput() {
  return (
    <>
        <View style={styles.container}>
            <TextInput style={styles.TextInput} />

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
  });
