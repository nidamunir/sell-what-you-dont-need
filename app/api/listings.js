import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

const postListings = (data) => {
  console.log("data recied", data);
  console.log("endpoint", endpoint);
  client.post(endpoint, data);
};

export default {
  getListings,
  postListings,
};
