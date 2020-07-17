import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  const [granted, setGranted] = useState(false);

  const requestCameraRollPermission = async () => {
    console.log("requesting");
    try {
      const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
      console.log("g", granted);
      setGranted(granted);
    } catch (error) {
      console.log("Error while getting permission", error);
    }
  };

  const handleClick = async () => {
    console.log("clicked", granted);
    if (granted) {
      const { uri } = await ImagePicker.launchImageLibraryAsync();
      onChangeImage(uri);
    }
  };

  useEffect(() => {
    requestCameraRollPermission();
  }, []);

  return (
    <TouchableOpacity onPress={handleClick}>
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
