import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Esp32Idf from 'react-native-esp32-idf';

export default function App() {
  const [result, setResult] = React.useState<String | undefined>();

  React.useEffect(() => {
    Esp32Idf.connectWifiDevice("pop").then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
