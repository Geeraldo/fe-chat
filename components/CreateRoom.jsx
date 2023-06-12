import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CreateInput from './input/CreateInput';
import JoinInput from './input/JoinInput';


export default function CreateRoom() {
  return (
    <>
    <View style={styles.container}>
        <Text>Create Room</Text>
        <CreateInput />
        <Text>Or Join Room</Text>
        <JoinInput />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical:30,
        marginHorizontal:30,
        paddingBottom:20
    },
  });
