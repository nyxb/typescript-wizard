module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            'nice-green': '#14F195',
            'nice-purple': '#9945FF',
            'nice-yellow': 'hsl(53, 100%, 50%)',
            'nice-red': '#ED4245',
            'tw-prose-code': 'hsl(53, 100%, 50%)',
         },
      },
   },
   plugins: [require('@tailwindcss/typography')],
}
