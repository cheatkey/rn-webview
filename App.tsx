import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const App = (): JSX.Element => {
  const webViewRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        style={styles.webview}
        source={{uri: 'http://localhost:3000/'}}
        onLoadEnd={syntheticEvent => {
          console.log('로딩 끗');
        }}
        onMessage={event => {
          alert(event.nativeEvent.data);
          webViewRef.current?.postMessage('안녕');
        }}
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
