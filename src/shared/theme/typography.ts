import { StyleSheet } from 'react-native'

export const TYPOGRAPHY = StyleSheet.create({
  HEADLINE_LG: {
    // большой заголовок
    fontSize: 32,
    fontWeight: '600',
  },
  HEADLINE_XL: {
    fontSize: 42,
    fontWeight: '600', // или '700' для жирного
    lineHeight: 48, // ~1.14 от размера шрифта
    letterSpacing: -0.5, // чуть плотнее для больших заголовков
  },

  HEADLINE_MD: {
    // // средний заголовок
    fontSize: 26,
    fontWeight: '500',
  },

  BODY_MD: {
    fontSize: 16,
    fontWeight: '400',
  },
  TAB_LABEL: {
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 14,
  },
})
