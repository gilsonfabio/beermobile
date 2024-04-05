import React from 'react';
import { Link } from "expo-router"
import { Pressable, StatusBar, View, Text, Image} from "react-native"
import { AntDesign } from '@expo/vector-icons';

import Linhas from './Linhas';
import Promocoes from './Promocoes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Produtos() {

    return(
        <SafeAreaView className="flex-1 flex-col items-center bg-slate-900 ">
            <StatusBar animated={true} backgroundColor="#64748b" barStyle={'default'} />
            <View className="flex-row w-full h-18 items-center justify-between text-white bg-slate-500"> 
                <Link href="/" asChild >
                    <Pressable>
                        <View className='ml-3'>
                            <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
                        </View>
                    </Pressable> 
                </Link>      
                <View className=''>
                    <Text className='text-white text-2xl font-semibold'>
                        Produtos
                    </Text>
                </View>  
                <View className=''>
                </View>
                <Link href="/" asChild >
                    <Pressable>
                        <View className='flex w-5 h-5 items-center justify-center bg-red-500 rounded-full ml-3 mt-1'>
                            <Text className=' text-white text-xs'>99</Text>
                        </View>
                        <View className='mr-3'>    
                            <AntDesign name="shoppingcart" size={24} color="#FFFFFF" />
                        </View>
                    </Pressable> 
                </Link> 
            </View>
            <View className="flex-col items-center justify-center w-full h-[15%] mt-30">
                <Image className="w-full h-full" source={require('../../../assets/images/product.png')} />
            </View>
            <Linhas />
            <Promocoes /> 
            
        </SafeAreaView>
    )
}