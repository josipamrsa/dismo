interface Color {
    [key: string]: string
}

interface Gradient {
    [key: string]: [string, string]
}

interface ColorScheme {
    colors: Color
    gradients: Gradient
}


/* COLOR NAMES */

let basicColors = {

    // SOLID
    basicWhite: "white",
    basicBlack: "black",
    basicNavyBlue: "#070A20",

    // TRANSLUCENT
    basicWhiteTranslucent: 'rgba(255, 255, 255, .3)',
}

let defaultColors = {

    // SOLID
    defaultGray: "#808080",
    defaultLightGray: "#AFAFAF",
    defaultBlue: "blue",

    // TRANSLUCENT
    defaultGrayTranslucent: 'rgba(128, 128, 128, .75)',
    defaultLightGrayTranslucent: 'rgba(175, 175, 175, .75)',
}

let lightDustyColors = {
    // SOLID
    lightGray: "#9A9A9A",
    lightDustyPink: "#FFBEF6",
    lightSkyBlue: "#67BBF3",

    // TRANSLUCENT
    lightDustyPinkTranslucent: 'rgba(100, 48, 93, .75)',
    lightSkyBlueTranslucent: 'rgba(30, 79, 111, .75)',
}


/* COLOR SCHEMES */

let defaultScheme: ColorScheme = {
    colors: {
        c1: defaultColors.defaultGray,
        c2: defaultColors.defaultLightGray,
        c3: basicColors.basicWhite,
        c4: defaultColors.defaultBlue,
        c5: basicColors.basicBlack,
        tc1: basicColors.basicWhiteTranslucent
    },

    gradients: {
        g1: [
            defaultColors.defaultGray,
            defaultColors.defaultLightGray
        ],
        tg1: [
            defaultColors.defaultGrayTranslucent,
            defaultColors.defaultLightGrayTranslucent
        ]
    }
}

let lightDustyScheme: ColorScheme = {
    colors: {
        c1: lightDustyColors.lightDustyPink,
        c2: lightDustyColors.lightSkyBlue,
        c3: basicColors.basicWhite,
        c4: lightDustyColors.lightGray,
        c5: basicColors.basicNavyBlue,
        tc1: basicColors.basicWhiteTranslucent
    },

    gradients: {
        g1: [
            lightDustyColors.lightDustyPink,
            lightDustyColors.lightSkyBlue
        ],
        tg1: [
            lightDustyColors.lightDustyPinkTranslucent,
            lightDustyColors.lightSkyBlueTranslucent
        ]
    }
}


/* THEME SETTINGS */

let defaultColorScheme = defaultScheme
let currentColorScheme = lightDustyScheme

let defaultTheme = {
    mainBackgroundColor: defaultColorScheme.colors.c5,
    storyTitleGradient: defaultColorScheme.gradients.g1,
    customizableButtonBackground: defaultColorScheme.colors.c1,
    customizableButtonGradient: defaultColorScheme.gradients.tg1,
    primaryTextColor: defaultColorScheme.colors.c3,
    primaryBorderColor: defaultColorScheme.colors.tc1,
    secondaryTextColor: currentColorScheme.colors.c2,
    hyperLinkColor: defaultColorScheme.colors.c4
}

let currentTheme = {
    mainBackgroundColor: currentColorScheme.colors.c5,
    storyTitleGradient: currentColorScheme.gradients.g1,
    customizableButtonBackground: currentColorScheme.colors.c1,
    customizableButtonGradient: currentColorScheme.gradients.tg1,
    primaryTextColor: currentColorScheme.colors.c3,
    primaryBorderColor: currentColorScheme.colors.tc1,
    secondaryTextColor: currentColorScheme.colors.c4,
    hyperLinkColor: currentColorScheme.colors.c2
}


module.exports = { defaultTheme, currentTheme }