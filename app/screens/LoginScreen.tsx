import { ImageBackground, Linking, StyleSheet, Text, View } from 'react-native';
import InputField from '../components/shared/InputField';
import { useState } from 'react';
import AppLink from '../components/shared/AppLink';
import StoryTitle from '../components/onboarding/StoryTitle';
import CustomizableButton from '../components/shared/CustomizableButton';

var style = require('../theme/styles')
var color = require('../theme/colors')



export default function LoginScreen(props: any) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (data: string) => {
        setEmail(data)
    }

    const handlePassword = (data: string) => {
        setPassword(data)
    }

    return (
        <View style={style.loginContainer.container}>
            <ImageBackground
                source={require('../../assets/images/headerImage.jpg')}
                imageStyle={style.loginContainer.headerImage}>

                <View style={style.loginContainer.content}>
                    <StoryTitle
                        title='Hey there,'
                        description='Glad to have you back.'
                        gradient={color.currentTheme.storyTitleGradient}
                    />

                    <InputField
                        hint="email"
                        value={email}
                        onValueChange={handleEmail}
                        placeholder="Enter your email address"
                        keyboardType='email-address'
                    />

                    <InputField
                        hint="password"
                        value={password}
                        onValueChange={handlePassword}
                        placeholder="Enter your password"
                        secureTextEntry
                    />

                    <AppLink
                        title='Forgot password?'
                        url="https://google.com"
                        alignRight
                    />

                    <CustomizableButton
                        title="Sign in"
                        action={() => { }}
                        gradientColors={color.currentTheme.customizableButtonGradient}
                        gradiented />

                </View>
            </ImageBackground>
        </View>

    );
}

