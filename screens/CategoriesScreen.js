import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
          //props.navigation.push({ routeName: "Categories" }); //to go on same screen
          //props.navigation.replace("CategoryMeals");//no back button
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
