import React from "react";
import ProfileScreen from "../pages/ProfileScreen";
import { View, Text, Image, StyleSheet } from "react-native";

function ProfileDetailScreen({ route }) {
  const { item } = route.params; // Get the member data from the navigation route

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.nim}>{item.nim}</Text>
      {/* Add more details here as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  nim: {
    fontSize: 16,
    color: "gray",
  },
  // Add styles for other details here
});

export default ProfileDetailScreen;