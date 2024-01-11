var React = require('react-native')
var color = require('./colors')

let styles = React.StyleSheet.create({
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
            marginTop: "30%",
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

    onboardingComponents: {
        storyTitle: {
            marginBottom: "10%",

            primary: {
                fontSize: 35,
                fontFamily: 'raleway',
                fontWeight: 'light'
            },

            secondary: {
                fontSize: 17,
                fontFamily: 'raleway',
                fontWeight: 'light'
            }
        },
    },

    sharedComponents: {
        inputField: {
            hint: {
                padding: 5,
                fontSize: 10,
                fontFamily: 'raleway',
                color: color.currentTheme.primaryTextColor,
            },

            value: {
                padding: 5,
                fontFamily: 'raleway', 
                color: color.currentTheme.primaryTextColor,
            },

            row: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingEnd: 10
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
                fontFamily: 'raleway',
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