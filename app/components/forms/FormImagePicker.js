import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleImageAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleImageRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((u) => u != uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleImageRemove}
        onAddImage={handleImageAdd}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
