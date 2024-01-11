import React, { useState } from 'react'
import { TextInput, Text, View, KeyboardTypeOptions, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

var style = require('../../theme/styles')
var color = require('../../theme/colors')


interface InputFieldProps {
    hint: string;
    value: string;
    onValueChange: (data: string) => void;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
}

export default function InputField({
    hint,
    value,
    onValueChange,
    placeholder,
    keyboardType,
    secureTextEntry = false
}: InputFieldProps) {
    const [isPasswordShown, setIsPasswordShown] = useState(secureTextEntry)

    const handleIsPasswordShown = () =>
        setIsPasswordShown(!isPasswordShown)

    return (
        <View style={style.sharedComponents.inputField}>
            <Text
                style={style.sharedComponents.inputField.hint}>{hint}</Text>

            <View style={style.sharedComponents.inputField.row}>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onValueChange}
                    style={style.sharedComponents.inputField.value}
                    keyboardType={keyboardType}
                    secureTextEntry={isPasswordShown}
                    placeholderTextColor={color.currentTheme.secondaryTextColor}
                />

                {
                    secureTextEntry &&

                    <TouchableOpacity onPress={handleIsPasswordShown}>
                        <Feather name={isPasswordShown ? 'eye-off' : 'eye'} color={color.currentTheme.primaryBorderColor} size={18} />
                    </TouchableOpacity>
                }
            </View>

        </View>
    )
}

