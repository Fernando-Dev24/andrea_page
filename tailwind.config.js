/** @type {import('tailwindcss').Config} */

/* IMPORTS */
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default {
   content: ['./index.html'],
   theme: {
      fontFamily: {
         silkFlowers: ['Silk Flower', 'sans-serif'],
      },
      colors: {
         primary: {
            600: '#5F6F52',
            500: '#7F8C75',
            400: '#9FA997',
            300: '#BFC5BA',
            200: '#DFE2DC',
            100: '#FFFFFF',
            0: '#000000',
         },
         second: {
            600: '#A9B388',
            500: '#BAC2A0',
            400: '#CBD1B8',
            300: '#DDE1CF',
            200: '#EEF0E7',
            100: '#FFFFFF',
            0: '#000000',
         },
         third: {
            600: '#FEFAE0',
            500: '#FEFBE6',
            400: '#FEFCEC',
            300: '#FFFDF3',
            200: '#FFFEF9',
            100: '#FFFFFF',
            0: '#000000',
         },
         fourth: {
            600: '#F9EBC7',
            500: '#FAEFD2',
            400: '#FBF3DD',
            300: '#FDF7E9',
            200: '#FEFBF4',
            100: '#FFFFFF',
            0: '#000000',
         },
         fifty: {
            600: '#B99470',
            500: '#C7A98D',
            400: '#D5BFA9',
            300: '#E3D4C6',
            200: '#F1EAE2',
            100: '#FFFFFF',
            0: '#000000',
         },
         sixty: {
            600: '#C4661F',
            500: '#D0854C',
            400: '#DCA379',
            300: '#E7C2A5',
            200: '#F3E0D2',
            100: '#FFFFFF',
            0: '#000000',
         },
         seventy: {
            600: '#783D19',
            500: '#936447',
            400: '#AE8B75',
            300: '#C9B1A3',
            200: '#E4D8D1',
            100: '#FFFFFF',
            0: '#000000',
         },
      },
      extend: {},
   },
   plugins: [],
};
