import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'

const login = () => {

    const router = useRouter();

    return (
        <View className='flex flex-1 justify-center items-center'>
            <Text className='text-3xl'>Login</Text>
            <TouchableOpacity onPress={() => router.replace("/")}>
                <Text>HOME</Text>
            </TouchableOpacity>
        </View>
    )
}

export default login