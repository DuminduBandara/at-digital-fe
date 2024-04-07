/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },
    colors: {
      primary: '#6B3CC9',
      secondary: '#F28D35',
      analogous1: '#6A44F2',
      analogous2: '#1CBDDD',
      triadicClr1: '#52378C',
      dark: '#4DCA79',
      txt: '#2F2F2F',
      txtLight: '#9C9991',
      subtitle: '#9C9991',
      accent1: '#E2F2FE',
      accent2: '#FFF8E0',
      error: '#FF0335',
      success: '#5EB30B',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      fontSize: {
        xs: '14px',
        sm: '16px',
        base: '18px',
        lg: '22px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '36px',
        '4xl': '48px',
      },
    },
  },
  plugins: [],
};
