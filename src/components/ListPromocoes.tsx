import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, Dimensions} from 'react-native';

type produtoProps = {
    idPro: string;
    proDescricao: string;
    proReferencia: string;
    proSegmento: number;
    proMarca: number;
    proGrupo: number;
    proLinha: number;
    proCodBarra: string;
    proUnidade: string;
    proCodNcm: number;
    proUltCusto: number;
    proPreVenda: number;
    proTributacao: string;
    proCodCst: number;
    proStatus: string;
    proAvatar: number;
}

const ListPromocoes = ({ data }:any) => {
  
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
  //<Image source={{uri: `https://imgbox.com/cUX7JcEE`}} resizeMode="contain" className=' bg-slate-600 mt-2 w-32 h-32' />
  return (
    <TouchableOpacity onPress={handleDetalhes}>
      <View className='flex w-full items-center'>
        <View className='flex items-center bg-white w-40 h-56 rounded mt-2 ml-8'>
          <Image source={{uri: `https://thumbs2.imgbox.com/${data.proAvatar}`}} resizeMode="contain" className='mt-2 w-32 h-32' />
          <Text className='mt-2 text-black text-xs font-semibold'>{data.proDescricao}</Text>
          <Text className='mt-1 text-black text-xs font-normal'>{data.proReferencia}</Text>
          <Text className='mt-1 text-red-700 text-xl font-bold'>R$ {data.proPreVenda}</Text>
        </View>             
      </View>  
    </TouchableOpacity>
  );
};
  
export default ListPromocoes;

//<a href="https://imgbox.com/sQ3RNM2d" target="_blank"><img src="https://thumbs2.imgbox.com/48/f9/sQ3RNM2d_t.jpg" alt="image host"/></a>
//https://thumbs2.imgbox.com/46/1a/cUX7JcEE_t.jpg