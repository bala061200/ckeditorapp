import React, { useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';

const RichTextEditor = () => {
  const webViewRef = useRef(null);
  let htmlContent = "html data loading";
  const handleLoadEditor = async () => {
    const htmlfile = Asset.fromModule(require('./assets/ckeditor_android.html'))
    let filePath = "";
    if (htmlfile.localUri == null) {
      await htmlfile.downloadAsync().then((response) => {
        filePath = response.uri;
      }).catch((err) => {
        console.log("Error at catch block while getting filepath", err)
      })
    }

    await fetch(filePath).then(async (response) => {
      let singleLineHTML = await response.text();
      htmlContent = singleLineHTML.replace(/\s+/g, ' ');
      console.log("htmlcontent", htmlContent)
    }).catch((Err) => {
      console.log("Error at catch blocking while the htmlcontent", Err)
    })

    const ckeditorScript = `
        const script = document.createElement('script');
        script.src = "https://cdn.ckeditor.com/ckeditor5/41.0.0/classic/ckeditor.js";
        script.onload = () => {
          ClassicEditor
            .create(document.querySelector('#editor'), {
            })
            .then(editor => {
              console.log('Editor initialized:', editor);
              editor.setData('${htmlContent}', {
                callback: function() {
                    this.checkDirty(); 
                }
              })
          })
          .catch(error => {
            console.error('Error initializing CKEditor:', error);
          });
        };
        document.body.appendChild(script);
      `;

    webViewRef.current.injectJavaScript(ckeditorScript);
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ html: '<div id="editor"></div>' }}
        onLoad={handleLoadEditor}
        javaScriptEnabled={true}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    marginRight: 20,
    marginLeft: 30
  },
});

export default RichTextEditor;
