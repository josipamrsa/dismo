import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

var style = require('../../theme/styles')
var color = require('../../theme/colors')


interface CustomizableButtonProps {
    buttonColor?: string;
    gradiented?: boolean;
    gradientColors?: string[];
    title: string;
    action: () => void;
}

export default function CustomizableButton({
    buttonColor = color.defaultTheme.customizableButtonBackground,
    gradiented = false,
    gradientColors = color.defaultTheme.customizableButtonGradient,
    title,
    action
}: CustomizableButtonProps) {
    return (
        <TouchableOpacity style={style.sharedComponents.customizableButton}>
            {
                gradiented ?

                    <LinearGradient
                        colors={gradientColors}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.8, y: 0.8 }}
                        style={style.sharedComponents.customizableButton.container}

                    >
                        <Text style={style.sharedComponents.customizableButton.title}>{title}</Text>
                    </LinearGradient> :

                    <View style={{ backgroundColor: buttonColor }}>
                        <Text>{title}</Text>
                    </View>
            }
        </TouchableOpacity>
    )
}

