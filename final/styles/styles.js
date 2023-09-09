// styles.js
import { Dimensions } from 'react-native';

// Get device's screen width
const screenWidth = Dimensions.get("window").width;

// Define a base width
const baseWidth = 375;

// Calculate scaling factor
const scale = screenWidth / baseWidth;

export const colors = {
  primary: '#2699fb',
  background: '#f4f6f8',
  text: '#333',
  secondaryText: "#666",
  border: '#ddd',
};

export const typography = {
  primary: 'Gilroy, sans-serif',
  secondary: 'Poppins, sans-seriff',
  fallback: 'Arial, sans-serif',
};

export const fontSizes = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
};

export const spacing = {
  xsmall: 4 * scale,
  small: 8 * scale,
  medium: 16 * scale,
  large: 24 * scale,
  xlarge: 32 * scale,
};