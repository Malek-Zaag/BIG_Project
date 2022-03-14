module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
     indigo: '#3730a3',
     orange: '#ea580c'
    },
    fontFamily: {
      mono: ['Consolas', 'monospace']
    },
    extend: {
    },
  },
  plugins: [],
}
