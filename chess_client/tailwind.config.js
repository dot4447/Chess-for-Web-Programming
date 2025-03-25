const plugin = require("eslint-plugin-react");

module.exports = {
    theme: {
      extend: {
        animation: {
          'flicker': 'flicker 2s infinite',
        },
        keyframes: {
          flicker: {
            '0%, 100%': { opacity: '1' },
            '10%': { opacity: '0.9' },
            '20%': { opacity: '1' },
            '30%': { opacity: '0.95' },
            '40%': { opacity: '1' },
            '50%': { opacity: '0.98' },
            '60%': { opacity: '1' },
            '70%': { opacity: '0.97' },
            '80%': { opacity: '1' },
            '90%': { opacity: '0.96' },
          }
        }
      }
    },
    variants: {},
    plugins: [],
  }