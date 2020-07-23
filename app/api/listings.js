import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

const addListing = (listing) => {
  const formData = new FormData();
  formData.append("title", listing.title);
  formData.append("price", listing.price);
  formData.append("description", listing.description);
  formData.append("categoryId", listing.category.value);
  listing.images.map((imageUri, index) => {
    formData.append("images", {
      name: `${imageUri}${index}`,
      type: "image/jpeg",
      uri: imageUri,
    });
  });

  if (listing.location)
    formData.append("location", JSON.stringify(listing.location));
  return client.post(endpoint, formData, {
    onUploadProgress: (progress) => console.log("Progress", progress),
  });
};

export default {
  getListings,
  addListing,
};
