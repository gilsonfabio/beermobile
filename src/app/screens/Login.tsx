import React, { useState } from 'react';
import { Link } from "expo-router"
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput} from "react-native"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View className="flex-1 items-center bg-slate-900 ">
            <View className="flex-col w-full h-1/3 items-center mt-6">
                <View className="flex-col items-center justify-center h-[33%] mt-10">
                    <Image className="w-48 h-48 mt-10" source={require('../../../assets/images/logo.png')} />
                </View>
                <View className="flex items-center mt-12">
                    <Text className='text-yellow-400 text-3xl font-bold'>
                        LOGIN
                    </Text>
                </View>                
            </View>
            <View className="flex-col w-full h-2/3 items-center justify-center text-white"> 
                <TextInput className="border border-spacing-1 border-yellow-300 bg-slate-50 text-black w-[90%] h-14 mb-6 rounded-md p-2" placeholder="Informe seu email" onChangeText={setEmail} value={email} />
                <TextInput className="border border-spacing-1 border-yellow-300 bg-slate-50 text-black w-[90%] h-14 mb-6 rounded-md p-2" secureTextEntry placeholder="Informe sua Senha" onChangeText={setPassword} value={password} />
                <View className='flex items-center w-full p-10 '>
                    <Link href="/screens/Produtos" asChild>
                        <TouchableOpacity className='w-full h-20 '>
                            <View className="flex items-center justify-center bg-yellow-400 w-96 h-12 rounded-md">
                                <Text className="text-black font-bold text-md">Entrar</Text>
                            </View>
                        </TouchableOpacity>
                    </Link>    
                </View>    
            </View>
        </View>
    )
}