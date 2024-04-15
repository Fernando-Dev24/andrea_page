/** @type {import('tailwindcss').Config} */

/* IMPORTS */
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default {
   content: ['./index.html'],
   theme: {
      extend: {},
   },
   plugins: [autoprefixer(), tailwindcss()],
};
