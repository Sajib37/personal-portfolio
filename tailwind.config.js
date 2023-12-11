/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                bg1: "#161A30",
                bg2: "#31304D"
            },

            fontFamily: {
                roboto: 'Roboto',
                playfair: 'Playfair Display'
            },
            textColor: {
                Primary: '#FF6AC2'
            }
        },
    },
    plugins: [require("daisyui")],
};
