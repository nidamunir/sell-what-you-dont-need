import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  const [granted, setGranted] = useState(false);

  const requestCameraRollPermission = async () => {
    try {
      const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
      setGranted(granted);
      if (!granted)
        Alert.alert(
          "Permission required",
          "You need to enable permission to access this feature."
        );
    } catch (error) {
      console.log("Error while getting permission", error);
    }
  };

  const selectImage = async () => {
    if (granted) {
      const { uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      onChangeImage(uri);
    }
  };

  const handlePress = async () => {
    if (!imageUri) selectImage();
    if (imageUri) {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        {
          text: "No",
        },
      ]);
    }
  };

  useEffect(() => {
    requestCameraRollPermission();
  }, []);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons name="camera" size={50} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
