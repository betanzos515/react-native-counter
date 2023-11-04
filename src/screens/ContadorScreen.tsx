import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { stylesHome } from './Styles/styles';
import { FloatingActionButton } from '../components/FloatingActionButton';

export const ContadorScreen = () => {
  const [counter, setCounter] = useState(10);
  const handleAdd = (): void => {
    setCounter(counter + 1);
  };

  const handlerSubstract = ()=>{
    if(counter > 0){
        setCounter(counter - 1);

    }else{
        console.log('Hemos llegado a nuestro limite');
    }
  }
 
  return (
    <View style={ stylesHome.Label }>
      
      <Text style={ stylesHome.LabelCounter }> Contador : { counter }</Text>

      <FloatingActionButton
        handleAcction={ handleAdd }
        position='buttonRight'
        label='+'
        />
      
      <FloatingActionButton
        handleAcction={ handlerSubstract }
        position='buttonLeft'
        label='-'
      />

    </View>
  );
};
