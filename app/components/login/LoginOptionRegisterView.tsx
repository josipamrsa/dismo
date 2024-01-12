import React from 'react'
import { Linking, Text, View, Image } from 'react-native'
import AppLink from '../shared/AppLink'
var style = require('../../theme/styles')


interface LoginOptionRegisterProps {

}

export default function LoginOptionRegisterView({ }: LoginOptionRegisterProps) {
    return (
        <View style={style.loginComponents.loginOptionRegister.container}>
            <View style={style.loginComponents.loginOptionRegister.divider}></View>

            <View style={style.loginComponents.loginOptionRegister.row}>
                <Text style={style.loginComponents.loginOptionRegister.title}>Don't have an account? </Text>
                <AppLink
                    url="https://google.com"
                    title="Click here!" />
            </View>

        </View>
    )
}

