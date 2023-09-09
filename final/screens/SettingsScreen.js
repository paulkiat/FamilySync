import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography, fontSizes, spacing } from '../styles/styles';

const SettingsScreen = () => {
  const version = "1.0.0"; // Example version number

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.circle}>
          <Text style={styles.initial}>J</Text>
        </View>
        <Text style={styles.name}>Judith C.</Text>
      </View>
      <TouchableOpacity style={[styles.settingOption, styles.firstSettingOption]}>
        <Text style={styles.optionText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionText}>Send feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.versionText}>VERSION {version}</Text>
        <Text style={styles.easyConnectText}>
          <Text style={{ color: 'black', fontFamily: typography.primary }}>Easy</Text> 
          <Text style={{ color: 'blue', fontFamily: typography.primary }}> connect</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  profileContainer: {
    alignItems: 'flex-start',
    padding: spacing.medium,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    borderColor: '#A020F0',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.small,
  },
  initial: {
    fontSize: fontSizes.medium,
    color: colors.text,
    fontFamily: typography.primary,
  },
  name: {
    fontSize: fontSizes.medium,
    color: colors.text,
    fontFamily: typography.primary,
  },
  settingOption: {
    padding: spacing.medium,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  firstSettingOption: {
    borderTopWidth: 1,
  },
  optionText: {
    fontSize: fontSizes.medium,
    color: colors.text,
    fontFamily: typography.primary,
  },
  footer: {
    padding: spacing.medium,
    alignItems: 'flex-start',
  },
  versionText: {
    fontSize: fontSizes.medium,
    fontFamily: typography.secondary,
    fontWeight: 'bold',
    color: colors.secondaryText,
  },
  easyConnectText: {
    fontSize: fontSizes.xlarge,
    fontFamily: typography.primary,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;