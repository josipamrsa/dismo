var React = require('react-native')
var color = require('./colors')

let styles = React.StyleSheet.create({
    appContainer: {
        flex: 1
    },


    mainContainer: {
        container: {
            backgroundColor: color.currentTheme.mainBackgroundColor,
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
    },


    loginContainer: {
        container: {
            marginTop: "2%",
            width: "100%",
        },

        content: {
            marginTop: "20%",
            paddingEnd: "8%",
            paddingStart: "8%",
            width: "100%",
            height: "100%"
        },

        headerImage: {
            resizeMode: "cover",
            opacity: 0.2,

            /* very ugly */
            position: 'absolute',
            top: -(200)
        }
    },


    loginComponents: {
        loginOptions: {
            container: {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15%"
            },

            title: {
                color: color.currentTheme.primaryTextColor,
                fontFamily: "raleway-extralight"
            },

            imageRow: {
                flexDirection: "row"
            }
        },

        loginOptionRegister: {
            container: {
                marginTop: "10%",
                justifyContent: "center",
                alignItems: "center",
            },

            divider: {
                borderTopWidth: 1,
                borderTopColor: color.currentTheme.primaryBorderColor,
                padding: "4%",
                width: "60%",
            },

            row: {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            },

            title: {
                color: color.currentTheme.primaryTextColor,
                fontFamily: "raleway-extralight"
            }
        }
    },


    onboardingComponents: {
        storyTitle: {
            marginBottom: "10%",

            primary: {
                fontSize: 35,
                fontFamily: 'raleway-extralight',
                fontWeight: 'light'
            },

            secondary: {
                fontSize: 17,
                fontFamily: 'raleway-extralight',
                fontWeight: 'light'
            }
        },
    },


    sharedComponents: {
        inputField: {
            hint: {
                padding: 5,
                fontSize: 11,
                fontFamily: 'raleway',
                fontWeight: 600,
                color: color.currentTheme.primaryTextColor,

            },

            value: {
                padding: 5,
                fontSize: 16,
                fontFamily: 'raleway',
                color: color.currentTheme.primaryTextColor,
                width: "100%"
            },

            row: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingEnd: 25
            },

            marginTop: 25,
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: color.currentTheme.primaryBorderColor,
        },

        hyperLink: {
            viewRight: {
                alignItems: "flex-end"
            },

            viewLeft: {
                alignItems: "flex-start"
            },

            hyperLinkTitle: {
                color: color.currentTheme.hyperLinkColor,
                fontFamily: 'raleway-semibold',
            }
        },

        customizableButton: {
            marginTop: "10%",
            marginBottom: "2%",

            container: {
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5%",
                borderRadius: 25,
            },

            title: {
                textTransform: "uppercase",
                color: color.currentTheme.primaryTextColor,
                fontFamily: 'roboto-condensed-light',
                fontSize: 15
            }
        }
    }
})

module.exports = styles