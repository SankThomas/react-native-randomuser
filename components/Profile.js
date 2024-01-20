import { View, Text, Image } from "react-native";
import React from "react";
import { format } from "date-fns/format";

export default function Profile({ user }) {
  return (
    <View className="flex-row items-center gap-2 border border-stone-700 rounded p-4">
      <Image
        source={{ uri: user.picture.large }}
        className="w-20 h-20 rounded-full"
      />

      <View>
        <Text className="text-white text-lg">
          {user.name.first} {user.name.last}
        </Text>
        <Text className="text-stone-400 text-base">
          {user.dob.age} years,{" "}
          {format(new Date(user.dob.date), "do MMMM yyyy")}
        </Text>
      </View>
    </View>
  );
}
