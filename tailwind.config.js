/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'primary': '#9370DB',
            'primary-dark': '#6A5ACD',
            'secondary': '#E6E6FA',
            'secondary-dark': '#D8BFD8',
            'accent': '#f6993f',
            'accent-dark': '#e07a2b',
            'background': '#F0F0F0',
            'background-dark': '#1A1A1A',
            'text': '#333333',
            'text-dark': '#FFFFFF',
            'gray-light': '#e2e8f0',
            'gray-dark': '#4a5568',
          },
        },
      },
      plugins: [],
    }
