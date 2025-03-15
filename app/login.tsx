import LoginForm from 'components/LoginForm';
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'

const login = () => {

    const router = useRouter();

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View className='flex flex-1 justify-center items-center p-4'>
                <Text className='text-3xl'>Login</Text>
                <LoginForm />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default login