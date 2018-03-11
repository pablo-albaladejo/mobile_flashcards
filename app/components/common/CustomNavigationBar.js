import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import NavigationBar from 'react-native-navbar';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const { height, width } = Layout.window;

var styles = StyleSheet.create({

    leftButton: {
        width: width * 0.25,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: width * 0.03,
        paddingBottom: height * 0.01
    },
    leftText: {
        fontSize: 14,
    },

    title: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    titleText:{
        fontSize: 16,
        letterSpacing: 1
    },
    titleImage: {
        width: width * 0.3,
        height: height * 0.06,
        marginTop: height * 0.02
    },
    
    rightButton: {
        width: width * 0.25,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: width * 0.03,
        paddingBottom: height * 0.01
    },
    locationIcon: {
        width: width * 0.12,
        height: height * 0.12
    },
    rightText: {
        fontSize: 14,
    },

});


class CustomNavigationBar extends Component {
    
    render() {
        const { leftButton, title, rightButton } = this.props.options;
        return (
            <NavigationBar
                tintColor={Colors.primary}
                leftButton={
                    (leftButton && (
                        <TouchableOpacity onPress={leftButton.handler} style={leftButton.style || styles.leftButton}>
                            {leftButton.text && (
                                <Text style={leftButton.textStyle || styles.leftText}>
                                    {leftButton.text}
                                </Text>
                            )}

                            {leftButton.image && (
                                <Image
                                    source={centerButton.image}
                                    style={centerButton.imageStyle || styles.centerButtonImage}
                                    resizeMode={centerButton.resizeMode || 'contain'}
                                />
                            )}

                            {leftButton.icon && leftButton.icon}

                        </TouchableOpacity>))
                }

                title={
                    (title && (
                        <View style={title.style || styles.title}>
                            {title.text && (
                                <Text style={title.textStyle || styles.titleText}>{title.text}</Text>
                            )}
                            {title.image && (
                                <Image
                                    source={title.image}
                                    style={title.imageStyle || styles.titleImage}
                                    resizeMode={title.resizeMode || 'contain'}
                                />
                            )}
                        </View>

                    ))
                }

                rightButton={
                    (rightButton && (
                        <TouchableOpacity onPress={rightButton.handler} style={rightButton.style || styles.rightButton}>
                            {rightButton.text && (
                                <Text style={rightButton.textStyle || styles.rightText}>
                                    {rightButton.text}
                                </Text>
                            )}
                            {rightButton.image && (
                                <Image
                                    source={rightButton.image}
                                    style={styles.locationIcon}
                                    resizeMode={rightButton.resizeMode || 'contain'}
                                />
                            )}

                            {rightButton.icon && rightButton.icon}
                            
                        </TouchableOpacity>
                    ))
                }
            />
        );
    }
}

export default CustomNavigationBar;