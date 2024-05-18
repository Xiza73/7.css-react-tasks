/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      text: {
        50: '#050316',
        100: '#0a062d',
        200: '#140c5a',
        300: '#1e1287',
        400: '#2818b4',
        500: '#321fe0',
        600: '#5b4be7',
        700: '#8478ed',
        800: '#ada5f3',
        900: '#d6d2f9',
        950: '#eae9fc',
      },
      background: {
        50: '#020718',
        100: '#030e30',
        200: '#071b5f',
        300: '#0a298f',
        400: '#0d37bf',
        500: '#1144ee',
        600: '#406af2',
        700: '#708ff5',
        800: '#a0b4f8',
        900: '#cfdafc',
        950: '#e7ecfd',
      },
      primary: {
        50: '#021018',
        100: '#031f30',
        200: '#073f5f',
        300: '#0a5e8f',
        400: '#0d7ebf',
        500: '#119dee',
        600: '#40b1f2',
        700: '#70c4f5',
        800: '#a0d8f8',
        900: '#cfebfc',
        950: '#e7f5fd',
      },
      secondary: {
        50: '#021817',
        100: '#03302e',
        200: '#075f5c',
        300: '#0a8f8b',
        400: '#0dbfb9',
        500: '#11eee7',
        600: '#40f2ec',
        700: '#70f5f1',
        800: '#a0f8f5',
        900: '#cffcfa',
        950: '#e7fdfd',
      },
      accent: {
        50: '#021018',
        100: '#031f30',
        200: '#073f5f',
        300: '#0a5e8f',
        400: '#0d7ebf',
        500: '#119dee',
        600: '#40b1f2',
        700: '#70c4f5',
        800: '#a0d8f8',
        900: '#cfebfc',
        950: '#e7f5fd',
      },
      danger: {
        50: '#180201',
        100: '#300302',
        200: '#5f0704',
        300: '#8f0a05',
        400: '#bf0d07',
        500: '#ee1109',
        600: '#f24040',
        700: '#f57070',
        800: '#f8a0a0',
        900: '#fccecf',
        950: '#fdf1f1',
      },
    },

    extend: {},
  },
  plugins: [],
};
