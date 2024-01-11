import MaskedView from '@react-native-masked-view/masked-view';
import GradientText from '../../theme/GradientText';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Text, View } from 'react-native'

var style = require('../../theme/styles')
var color = require('../../theme/colors')
var helper = require('../../utils/Functions')


interface StoryTitleProps {
    title: string;
    description: string;
    gradient?: [string, string]
}

export default function StoryTitle({ 
    title, 
    description, 
    gradient = color.defaultTheme.storyTitleGradient 
}: StoryTitleProps) {

    
    return (
        <View style={style.onboardingComponents.storyTitle}>
            <GradientText
                style={style.onboardingComponents.storyTitle.primary}
                content={title}
                colors={gradient}
                direction={[0,0,0.5,0.5]}
            />

            <GradientText
                style={style.onboardingComponents.storyTitle.secondary}
                content={description}
                colors={helper.copyAndReverseArray(gradient)}
                direction={[0,0,1,1]}
            />

        </View>
    )
}
