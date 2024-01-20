import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import { format } from "date-fns/format";
import PersonalDetails from "./components/PersonalDetails";
import Address from "./components/Address";
import Profile from "./components/Profile";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getUser() {
    try {
      setIsLoading(true);

      const res = await fetch("https://randomuser.me/api");
      const data = await res.json();
      setUsers(data.results);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ScrollView className="bg-stone-800">
      <StatusBar style="light" />

      {isLoading ? (
        <View className="flex-1 h-screen items-center justify-center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        users.map((user) => (
          <View key={user.login.uuid} className="py-20 px-6 space-y-4">
            <Text className="text-center text-white font-bold text-3xl mb-8">
              Get random users for your application
            </Text>

            <View>
              <Profile user={user} />
            </View>

            <View>
              <PersonalDetails user={user} format={format} />
            </View>

            <View>
              <Address user={user} />
            </View>

            <TouchableOpacity className="items-start" onPress={getUser}>
              <Text className="py-2 px-4 rounded bg-orange-400 text-stone-900 font-bold text-base">
                Get another random user
              </Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
}
