import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

const postListings = (data) => {
  console.log("data received", data);

  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("price", data.price);
  formData.append("description", data.description);
  formData.append("categoryId", data.category.value);
  data.images.map((imageUri, index) => {
    formData.append("images", {
      name: `${imageUri}${index}`,
      type: "image/jpeg",
      uri: imageUri,
    });
  });
  return client.post(endpoint, formData);
};

export default {
  getListings,
  postListings,
};
