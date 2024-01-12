import React from 'react'
import { Linking, Text, View, Image } from 'react-native'
var style = require('../../theme/styles')


interface LoginOptionsProps {
    
}

export default function LoginOptionsView({ }: LoginOptionsProps) {
    return (
        <View style={style.loginComponents.loginOptions.container}>
            <Text style={style.loginComponents.loginOptions.title}>Or connect with </Text>
            <View style={style.loginComponents.loginOptions.imageRow}>
                <Image source={require('../../../assets/icons/facebookIcon.png')}/>
                <Image source={require('../../../assets/icons/googleIcon.png')}/>
                <Image source={require('../../../assets/icons/twitterIcon.png')}/>
            </View>
        </View>
    )
}

