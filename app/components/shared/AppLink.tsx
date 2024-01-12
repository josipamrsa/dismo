import React from 'react'
import { Linking, Text, View } from 'react-native'
var style = require('../../theme/styles')


interface AppLinkProps {
    title?: string;
    url: string;
    alignRight?: boolean;
}

export default function AppLink({ 
    title, 
    url, 
    alignRight = false,
}: AppLinkProps) {
    return (
        <View style={
            alignRight ? 
                style.sharedComponents.hyperLink.viewRight :
                style.sharedComponents.hyperLink.viewLeft
        }>
            <Text
                style={style.sharedComponents.hyperLink.hyperLinkTitle}
                onPress={() => Linking.openURL(url)}>
                {title ? title : url}
            </Text>
        </View>
    )
}

