import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#f1f1f1',
  dark: '#0b0603',
});

export const textColor = theme('mode', {
  light: '#0b0603',
  dark: '#f1f1f1',
});

export const textColorFromBlackToFilter = theme('mode', {
  light: '',
  dark:
    'invert(88%) sepia(61%) saturate(6094%) hue-rotate(181deg) brightness(130%) contrast(89%)',
});

export const imageColorFromBlackToWhite = theme('mode', {
  light: '',
  dark: 'invert(1)',
});

export const primaryFontFamily = theme('mode', {
  light: `'Playfair Display SC', serif`,
  dark: `'Playfair Display SC', serif`,
});

export const secondaryFontFamily = theme('mode', {
  light: `'Press Start 2P', cursive`,
  dark: `'Press Start 2P', cursive`,
});
