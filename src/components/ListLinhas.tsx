import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Nav = {
    navigate: (value: string) => void;
}

type linhasProps = {
  lnhId: number;
  lnhDescricao: string;
}

const ListLinhas = ({ data }:any) => {
  const navigation = useNavigation<linhasProps>();
  
  function handleDetalhes(){
    setTimeout(() => {
      handleGetToken()
    }, 1000)        
  }
  
  const handleGetToken = async () => {
    //const token = await AsyncStorage.getItem('auth.token');
    
    //if (!token) {
    //    navigation.navigate('SignIn')
    //}else {
    //    navigation.navigate(data.srvLink)
    //}        
  }
  
  return (
    <TouchableOpacity onPress={handleDetalhes}>
      <View className=''>
        <View className='flex items-center bg-slate-500 w-24 h-24 rounded mt-2 ml-1'>
          <Image source={require('../../assets/images/cerveja.png')} resizeMode="contain" className='mt-2 w-14 h-14' />
          <Text className='mt-3 text-white text-xs font-semibold'>{data.lnhDescricao}</Text>
        </View>             
      </View>  
    </TouchableOpacity>
  );
};
  
export default ListLinhas;