// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
// backgroundColor: '#fff',
// alignItems: 'center',
// justifyContent: 'center',
//   },
// });





import React from 'react';
import { SafeAreaView } from 'react-native';
import CKEditorComponent from './CKEditorComponent';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white',
      paddingLeft:'40px'
      // marginLeft:'auto'
      // alignItems: 'center',
      // justifyContent: 'center',
    }}>
      <CKEditorComponent />
    </SafeAreaView>
  );
};


