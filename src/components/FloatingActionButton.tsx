import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
} from 'react-native';
import {stylesHome} from '../screens/Styles/styles';

interface FloatingActionButtonProps {
  handleAcction: () => void; // Tipamos handleAcction como una función que no recibe argumentos y no devuelve nada
  label: string; // Tipamos label como una cadena de texto
  position: string;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  handleAcction,
  label,
  position,
}) => {
  const IOS = () => {
    return (
      <View
        style={[
          stylesHome.FabLocation,
          position === 'buttonLeft' ? stylesHome.FabLeft : stylesHome.FabRight,
        ]}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAcction}>
          <View style={stylesHome.Fab}>
            <Text style={stylesHome.FabText}>{label}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          stylesHome.FabLocation,
          position === 'buttonLeft' ? stylesHome.FabLeft : stylesHome.FabRight,
        ]}>
        <TouchableNativeFeedback
          onPress={handleAcction}
          background={TouchableNativeFeedback.Ripple('#5264E1', true, 23)}>
          <View style={stylesHome.Fab}>
            <Text style={stylesHome.FabText}>{label}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? IOS() : android();
};
