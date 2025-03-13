import { useRouter } from 'expo-router';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';

const index = () => {

    const router = useRouter();

  return (
    <View className='flex flex-1 justify-center items-center'>
      <Text className='text-3xl'>index</Text>
      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index