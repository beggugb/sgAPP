/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      height: {
        '400': '400px',
        '430': '430px',
        '475': '475px',
        '500': '500px',
        '520': '520px',
        '540': '540px',
        '550': '550px',
        '580': '580px',
        '600': '600px',
        '620': '620px',
        '630': '630px',
        '650': '650px',
        '750': '750px',
       },
      width: {
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '500': '500px',
       }
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
