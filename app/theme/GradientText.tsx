import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Text } from 'react-native'

interface GradientTextProps {
    style: any;
    content: string;
    colors: string[]
    direction: [number, number, number, number]
}

export default function GradientText({ style, content, colors, direction }: GradientTextProps) {
    return (
        <MaskedView
            maskElement={
                <Text style={style}>{content}</Text>
            }>
            <LinearGradient
                colors={colors}
                start={{
                    x: direction[0],
                    y: direction[1]
                }}
                end={{
                    x: direction[2],
                    y: direction[3]
                }}
            >
                <Text style={
                    { ...style, opacity: 0 }
                }>{content}</Text>
            </LinearGradient>
        </MaskedView>
    )
} 
