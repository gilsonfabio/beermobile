import React, { useState, useEffect } from 'react';
import { Link } from "expo-router"
import { View, Text, FlatList, SafeAreaView} from "react-native"

import api from '../Services/api';
import ListLinhas from '@/components/ListLinhas';

type linhaProps = {
    lnhId: string;
    lnhDescricao: string;
}

export default function Linhas() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [linhas, setLinhas] = useState<Array<linhaProps>>([]);

    useEffect(() => {
        
        api({
            method: 'get',    
            url: `linhas`,                 
        }).then(function(response) {
            setLinhas(response.data)
        }).catch(function(error) {
            alert(`Falha no acesso as categorias! Tente novamente.`);
        })
                                  
    }, []);

    return(
        <View className="flex flex-col items-center bg-slate-900 ">
            <View>
                <Text className="text-md font-semibold text-yellow-500 ">Categorias</Text>
            </View>
            <FlatList
                data={linhas}
                className='ml-5'
                horizontal={true}
                renderItem={({ item }) => <ListLinhas data={item} />}
                keyExtractor={(item) => item.lnhId}
            />     
        </View>
    )
}