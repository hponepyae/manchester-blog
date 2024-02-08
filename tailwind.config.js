/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'koko': ["Protest Strike", "sans-serif"],
            'meme': ["Bebas Neue", "sans-serif"],
            'yoshi': ["Caveat", "cursive"]
        }
    },
    plugins: [],
}