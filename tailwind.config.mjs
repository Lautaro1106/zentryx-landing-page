/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#0F172A', // Dark Slate Blue (Background)
                secondary: '#C5A059', // Gold (Accent)
                'text-light': '#F8FAFC', // White/Light
                'text-muted': '#94A3B8', // Slate Gray
                'primary-light': '#1E293B', // Slightly lighter blue for cards/sections
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-gold': 'linear-gradient(to right, #C5A059, #E5C585)',
            }
        },
    },
    plugins: [],
}
