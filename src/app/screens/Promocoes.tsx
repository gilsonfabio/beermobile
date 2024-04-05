import React, { useState, useEffect } from 'react';
import { Link } from "expo-router"
import {Pressable, StatusBar, View, Text, Image, FlatList, SafeAreaView} from "react-native"
import { AntDesign } from '@expo/vector-icons';

import api from '../Services/api';
import ListPromocoes from '@/components/ListPromocoes';

type produtoProps = {
    idProd: string;
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

export default function Promocoes() {
    const [promocoes, setPromocoes] = useState<Array<produtoProps>>([]);

    useEffect(() => {

        api({
            method: 'get',    
            url: `produtos`,                 
        }).then(function(resp) {
            setPromocoes(resp.data)
        }).catch(function(error) {
            alert(`Falha no acesso as produtos! Tente novamente.`);
        })
                          
    }, []);

    return(
        <View className="flex w-full items-center bg-slate-900 ">            
            <View>
                <Text className="text-md font-semibold text-yellow-500 ">Destaques</Text>
            </View>
            <View className='w-full '>
                <FlatList
                    data={promocoes}
                    className='ml-5'
                    horizontal={false}
                    numColumns={2}
                    renderItem={({ item }) => <ListPromocoes data={item} />}
                    keyExtractor={(item) => item.idProd}
                />
            </View>
        </View>
    )
}