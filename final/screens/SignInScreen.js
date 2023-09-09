// screens/SignInScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../styles/styles';

const SignInScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log into your FamilySync account</Text>
            <Text style={styles.subtitle}>Enter your email to get startedl</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={colors.text}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={colors.text}
                secureTextEntry={true}
            />
            
            <TouchableOpacity style={styles.button} onPress={() => {
                // Handle sign in logic here
                navigation.navigate('Home');
            }}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        padding: spacing.medium,
    },
    title: {
        fontSize: 28,
        fontFamily: typography.primary,
        color: colors.primary,
        marginBottom: spacing.small,
    },
    subtitle: {
        fontSize: 20,
        fontFamily: typography.secondary,
        color: colors.text,
        marginBottom: spacing.large,
    },
    input: {
        width: '90%',
        padding: spacing.medium,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 8,
        fontFamily: typography.secondary,
        fontSize: 16,
        marginBottom: spacing.large,
    },
    button: {
        backgroundColor: colors.primary,
        padding: spacing.medium,
        borderRadius: 8,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: typography.secondary,
        fontSize: 16,
    },
});

export default SignInScreen;