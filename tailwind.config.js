module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Explicitly include all source files
  "./pages/horoscope/**/*.{js,ts,jsx,tsx}", // ✅ Explicitly include horoscope pages
  ],
  darkMode: ["media", "class"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
<<<<<<< HEAD
  		colors: {},
=======
  		colors: {
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'spinner-leaf-fade': {
  				'0%, 100%': {
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'spinner-leaf-fade': 'spinner-leaf-fade 800ms linear infinite'
  		}
  	}
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography"),
      require("tailwindcss-animate")
],
  daisyui: {
    styled: true,
    // TODO: Theme needs works
    themes: [
      {
        'solana': { 
          fontFamily: {
            display: ['PT Mono, monospace'],
            body: ['Inter, sans-serif'],
          },
          'primary': '#000000',           /* Primary color */
          'primary-focus': '#9945FF',     /* Primary color - focused */
          'primary-content': '#ffffff',   /* Foreground content color to use on primary color */

          'secondary': '#808080',         /* Secondary color */
          'secondary-focus': '#f3cc30',   /* Secondary color - focused */
          'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */

          'accent': '#33a382',            /* Accent color */
          'accent-focus': '#2aa79b',      /* Accent color - focused */
          'accent-content': '#ffffff',    /* Foreground content color to use on accent color */

          'neutral': '#2b2b2b',           /* Neutral color */
          'neutral-focus': '#2a2e37',     /* Neutral color - focused */
          'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */

          'base-100': '#000000',          /* Base color of page, used for blank backgrounds */
          'base-200': '#35363a',          /* Base color, a little darker */
          'base-300': '#222222',          /* Base color, even more darker */
          'base-content': '#f9fafb',      /* Foreground content color to use on base color */

          'info': '#2094f3',              /* Info */
          'success': '#009485',           /* Success */
          'warning': '#ff9900',           /* Warning */
          'error': '#ff5724',             /* Error */
        },
      },
      // backup themes:
      // 'dark',
      // 'synthwave'
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}