import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingScreen extends React.Component {
    render(){
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting!</Text>
        </View>
      );
    }
  }
  
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  
    export default SettingScreen;