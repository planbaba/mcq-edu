/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#fff9e8',
        sunshine: '#ffd84d',
        bubblegum: '#ff6fb1',
        skybolt: '#52c7ff',
        mintpop: '#63e6be',
        lava: '#ff7a45',
        grape: '#9b7bff',
        limezap: '#b7f34a'
      },
      boxShadow: {
        brut: '8px 8px 0 #111111',
        'brut-sm': '4px 4px 0 #111111',
        'brut-lg': '12px 12px 0 #111111'
      },
      fontFamily: {
        display: ['ui-rounded', 'Comic Sans MS', 'Inter', 'system-ui', 'sans-serif']
      },
      borderWidth: {
        3: '3px',
        5: '5px'
      }
    }
  }
};
