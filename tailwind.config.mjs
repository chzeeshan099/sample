/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: "2rem",
  		screens: {
  			"2xl": "1400px",
  		},
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-ysabeau-sc)',
  				'sans-serif'
  			],
  			serif: [
  				'var(--font-cormorant)',
  				'serif'
  			]
  		},
  		colors: {
  			border: "hsl(var(--border))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			primary: {
  				DEFAULT: "hsl(var(--neon-primary))",
  				foreground: "hsl(var(--primary-foreground))",
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--neon-secondary))",
  				foreground: "hsl(var(--secondary-foreground))",
  			},
  			accent: {
  				DEFAULT: "hsl(var(--neon-accent))",
  				foreground: "hsl(var(--accent-foreground))",
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))",
  			},
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))",
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))"
  			},
  		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(to right, rgba(0, 0,0, 0.95), rgba(0, 0, 0, 0.95))',
  			'light-gradient': 'linear-gradient(to right, rgba(173, 216, 255, 0.95), rgba(200, 240, 255, 0.95), rgba(224, 255, 250, 0.95))',
  			'dark-gradient': 'linear-gradient(to right, rgba( 220, 120, 90, 0.95), rgba(220, 90,190, 0.95), rgba( 220, 220, 220, 0.95))',
  			'purple-gradient': 'linear-gradient(to right, rgba(85, 45, 90, 0.95), rgba(120, 30, 150, 0.95), rgba(60, 30, 90, 0.95))',
  			'purple-glow': 'linear-gradient(to right, rgba(155, 75, 180, 0.95), rgba(200, 50, 255, 0.95), rgba(120, 60, 200, 0.95))'
  		},
  		boxShadow: {
  			custom: '0 2px 4px rgba(0, 0, 0, 0.1)',
  			raised: '0px 8px 10px 0px rgba(110, 120, 50, .7)'
  		},
  		keyframes: {
  			spinY: {
  				'0%': {
  					transform: 'rotateX(0deg)'
  				},
  				'100%': {
  					transform: 'rotateX(360deg)'
  				}
  			},
  			spotlight: {
  				'0%': {
  					opacity: 0,
  					transform: 'translate(-72%, -62%) scale(0.5)'
  				},
  				'100%': {
  					opacity: 1,
  					transform: 'translate(-50%,-40%) scale(1)'
  				}
  			},
  			gradient: {
  				'0%, 100%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				}
  			},
  			float: {
  				'0%, 100%': { transform: 'translate(0, 0)' },
  				'50%': { transform: 'translate(20px, -20px)' },
  			},
  			glow: {
  				'0%, 100%': { opacity: 1 },
  				'50%': { opacity: 0.5 },
  			},
  		},
  		animation: {
  			spinY: 'spinY 1s ease-in-out forwards ',
  			spotlight: 'spotlight 2s ease .75s 1 forwards',
  			gradient: 'gradient 3s ease infinite',
  			'float': 'float 8s ease-in-out infinite',
  			'float-delay': 'float 8s ease-in-out 2s infinite',
  			'float-slow': 'float 10s ease-in-out 4s infinite',
  			'glow': 'glow 2s ease-in-out infinite',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [],
};
