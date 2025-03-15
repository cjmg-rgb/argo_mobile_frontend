import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useAuth } from 'state/store';

const LoginForm = () => {

    const { setCredentials } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const handlePress = async () => {
        await axios.post("http://192.168.1.11:5000/api/auth/login", { email, password })
        .then(response => {
            setCredentials(response.data.data);
            router.replace("/");
        })
        .catch(error => {
            setError(error.response.data.message);
        })        
    };

    return (
        <View className='border-2 p-4 w-full h-50 gap-2 justify-center'>
            <View>
                <Text>Email</Text>
                <TextInput className='border-b-2' value={email} onChangeText={setEmail} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput className='border-b-2' value={password} onChangeText={setPassword} />
            </View>
            {error && <Text className='text-red-500'>{ error }</Text>}
            <TouchableOpacity onPress={handlePress} className='p-2 border-2 border-blue-500 self-center'>
                <Text className='font-bold'>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginForm