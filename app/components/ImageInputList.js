import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        horizontal
      >
        <View style={styles.container}>
          {imageUris.map((uri) => {
            return (
              <View key={uri} style={styles.image}>
                <ImageInput
                  imageUri={uri}
                  onChangeImage={() => {
                    onRemoveImage(uri);
                  }}
                />
              </View>
            );
          })}
          <ImageInput
            imageUri={null}
            onChangeImage={(uri) => {
              onAddImage(uri);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
