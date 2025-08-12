const config = {
  plugins: {
    '@tailwindcss/postcss': {
      content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          colors: {
            'pakistan-green-dark': '#01411C',
            'pakistan-green-medium': '#029641',
            'pakistan-green-light': '#04eb65',
            'pakistan-gold': '#FFFF00',
            'mid-gray': '#808080',
          },
        },
      },
    },
  },
};
export default config;