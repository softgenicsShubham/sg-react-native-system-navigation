import { StyleSheet, View, Text } from 'react-native';
import {
  multiply,
  setHidden,
  setNavigationBarColor,
} from '@sg/react-native-system-navigation';
import { useEffect } from 'react';

const result = multiply(3, 7);

export default function App() {
  useEffect(() => {
    setNavigationBarColor('red');
    setHidden(true);
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
