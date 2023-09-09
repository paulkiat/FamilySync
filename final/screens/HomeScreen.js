// screen/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../styles/styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title1}>Sync with</Text>
            <Text style={styles.title2}>the Family</Text>
            <Text style={styles.title3}>Anytime, Anywhere</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>Create an Account</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonTextSecondary}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        padding: spacing.medium,
    },
    title1: {
        fontSize: 28,
        fontFamily: typography.primary,
        color: colors.primary,
        marginBottom: spacing.small,
    },
    title2: {
        fontSize: 28,
        fontFamily: typography.primary,
        color: colors.primary,
        marginBottom: spacing.small,
    },
    title3: {
        fontSize: 28,
        fontFamily: typography.primary,
        color: colors.primary,
        marginBottom: spacing.large,
    },
    button: {
        backgroundColor: colors.primary,
        padding: spacing.medium,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginBottom: spacing.medium,
    },
    buttonText: {
        color: 'white',
        fontFamily: typography.secondary,
        fontSize: 16,
    },
    buttonSecondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.primary,
    },
    buttonTextSecondary: {
        color: colors.primary,
        fontFamily: typography.secondary,
        fontSize: 16,
    },
});

export default HomeScreen;