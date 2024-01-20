import { View, Text } from "react-native";
import React from "react";

export default function PersonalDetails({ user, format }) {
  return (
    <View className="border border-stone-700 rounded p-4">
      <Text className="text-white font-bold text-2xl mb-4">
        Personal Details
      </Text>

      <View className="space-y-2">
        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Full Name: </Text>
          {user.name.title}. {user.name.first} {user.name.last}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Age: </Text>
          {user.dob.age} years
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Date of Birth: </Text>
          {format(new Date(user.dob.date), "do MMMM yyyy")}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Country: </Text>
          {user.location.country}, {user.nat}
        </Text>

        <Text className="text-stone-400 text-base">
          <Text className="text-white font-bold">Email: </Text>
          {user.email}
        </Text>
      </View>
    </View>
  );
}
