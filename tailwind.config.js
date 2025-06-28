/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { mono: ['JetBrains Mono', 'monospace'],
        comic: ['"Comic Neue"', 'cursive'],
       },
    },
  },
  plugins: [
        require('tailwind-scrollbar-hide') // ← энэ plugin хэрэгтэй

  ],
  
};
