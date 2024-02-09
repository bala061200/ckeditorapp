import React from 'react';
import { SafeAreaView } from 'react-native';
import CKEditorComponent from './CKEditorComponent';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white',
      paddingLeft: '40px'
    }}>
      <CKEditorComponent />
    </SafeAreaView>
  );
};


