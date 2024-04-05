import { Link } from "expo-router"
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native"

export default function Home() {
    return (
        <View className="flex-1 items-center bg-slate-900 ">
            <View className="flex-col w-full h-1/3 items-center mt-6">
                <View className="flex-col items-center justify-center h-[33%] mt-10">
                    <Image className="w-48 h-48 mt-10" source={require('../../../assets/images/logo.png')} />
                </View>
                <View className="flex items-center w-[90%] h-[33%]">
                    <Text className="text-white font-semibold text-2xl ">A melhor rede social, ainda é uma rodada de cerveja com os amigos!</Text>
                </View>
                <Link href="/screens/Login" asChild>
                    <TouchableOpacity>
                        <View className="flex items-center justify-center p-2 bg-yellow-400 w-[50%] h-12 rounded-3xl">
                            <Text className="text-black font-bold text-md">Vamos bebemorar hoje!</Text>
                        </View>
                    </TouchableOpacity>
                </Link>
            </View>
            <ImageBackground className='w-full h-2/3'
                source={require('../../../assets/images/Welcome.png')}  
            />
        </View>
    )
}
