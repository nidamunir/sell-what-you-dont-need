import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
function ListingsScreen({ navigation }) {
  const { loading, request: loadListings, data, error } = useApi(
    listingsApi.getListings
  );
  useEffect(() => {
    loadListings();
  }, []);

  console.log(loading, error);

  return error ? (
    <>
      <AppText>Couldn't retrieve the listings. </AppText>
      <Button title={"Try again"} onPress={loadListings} />
    </>
  ) : (
    <Screen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      <FlatList
        data={data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    // margin: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
