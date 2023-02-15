import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import React from "react";
// import { Icon } from "react-native-elements";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048339.png",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://cdn-icons-png.flaticon.com/512/3362/3362720.png",
    screen: "EatsScreen",
  },
  //   {
  //     id: "3",
  //     title: "Order Girl",
  //     image: "https://cdn-icons-png.flaticon.com/512/2763/2763444.png",
  //     screen: "GirlScreen",
  //   },
];

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ height: 100, width: 100, resizeMode: "contain" }}
            />
            <Text style={tw`mt-2 text-lg font-semibold `}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="#fff"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
