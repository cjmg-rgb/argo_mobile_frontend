import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { useAuth } from 'state/store';

const index = () => {

  const { auth, removeCredentials } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!auth) {
      router.replace("/login");
    }
  }, [auth]);

  const handlePress = () => {
    removeCredentials();
  }

  return (
    <View className='flex flex-1 justify-center items-center'>
      <View className='flex flex-col gap-5'>
        <View>
          <Text>Account Profile</Text>
          <Text>ID: { auth?.id }</Text>
        </View>
        <View className="flex flex-col gap-y-3">
            <View className="flex flex-col">
              <Text className="font-medium">{auth?.name}</Text>
              <Text className="text-xs">Name</Text>
            </View>
            <View className="flex flex-col">
              <Text className="font-medium">{auth?.email}</Text>
              <Text className="text-xs">Email Address</Text>
            </View>
            <View className="flex flex-col">
              <Text className="font-medium capitalize">{auth?.role}</Text>
              <Text className="text-xs">Role</Text>
            </View>
            <View className="flex flex-col">
              <Text className="font-medium">{auth?.department.name}</Text>
              <Text className="text-xs">Department</Text>
            </View>
            <View className="flex flex-col">
              <Text className="font-medium">{auth?.credits}</Text>
              <Text className="text-xs">Credits</Text>
            </View>
          </View>
        <TouchableOpacity onPress={handlePress}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index