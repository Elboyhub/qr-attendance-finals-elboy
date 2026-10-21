import { Platform } from 'react-native';

// Original app colors (unchanged) -- used by the existing screens.
export const COLORS = {
  primary: '#2E7D5B',
  background: '#F7F6F2',
  card: '#FFFFFF',
  textPrimary: '#14181F',
  textSecondary: '#5D6B7A',
  textOnPrimary: '#FFFFFF',
  surface: '#EFF3F0',
  border: '#DADFE3',
  shadow: '#14181F',
  warning: '#C97A2B',
  success: '#2E7D5B',
  danger: '#B3261E',
} as const;

// "Modern Campus Tech" palette: deep navy, electric blue + cyan accents,
// glass-style surfaces. Use this on screens that get the new look.
export const CAMPUS = {
  // Obsidian / Aurora design system: midnight canvas and vivid aqua accents.
  bg: '#080E1D',
  bgDeep: '#0B1327',
  surface: '#121D33',
  surfaceStrong: '#1B2B44',
  inputBg: '#0C172B',
  border: '#263750',
  primary: '#5B6CFF',
  primaryDeep: '#4148D6',
  accent: '#62E8D5',
  mint: '#6CE9B4',
  text: '#F4F8FF',
  textMuted: '#A3B3CB',
  textFaint: '#73859F',
  danger: '#FF718C',
  dangerBg: '#392035',
  dangerBorder: '#653049',
  mono: Platform.select({
    ios: 'Menlo',
    android: 'monospace',
    default: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  }) as string,
} as const;
