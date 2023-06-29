import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import WebView from 'react-native-webview';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webview}
        source={{uri: 'http://localhost:3000/'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
