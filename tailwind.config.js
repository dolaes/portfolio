/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // black are already defined in tailwind
                // white are already defined in tailwind
                'silver': '#C2C2C2',
                'outer-space': '#474747',
                'lilac': '#CE8DB8',
                'wisteria': '#BA9FDD',
                'tropical-indigo': '#9697D9'
            },
            fontFamily: {
                neuepower: ['NeuePower', 'sans-serif'],
            },
        },
    },
    plugins: [],
});