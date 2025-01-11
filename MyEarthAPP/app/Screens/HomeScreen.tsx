import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509485!2d144.95592831531698!3d-37.81621897975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0c0b1d9%3A0x5045675218ce6e0!2zTWVsYm91cm5lLCBBdXN0cmFsaWE!5e0!3m2!1str!2str!4v1673558452489!5m2!1str!2str',
        }}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default HomeScreen;
