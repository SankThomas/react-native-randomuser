import { View, Text } from "react-native";
import React from "react";

export default function Address({ user }) {
  return (
    <View className="border border-stone-700 rounded p-4">
      <Text className="text-white font-bold text-2xl mb-4">
        Address and City
      </Text>

      <View className="space-y-2">
        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Address: </Text>
          {user.location.street.number}, {user.location.street.name},{" "}
          {user.location.city}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">State: </Text>
          {user.location.state}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Cell: </Text>
          {user.cell}
        </Text>
      </View>
    </View>
  );
}
