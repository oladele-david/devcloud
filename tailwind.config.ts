import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// DevCloud Partners Brand Colors (from PRD)
				brand: {
					primary: {
						DEFAULT: '#34495e', // Code Blue
						50: '#f8f9fa',
						100: '#e9ecef',
						200: '#dee2e6',
						300: '#ced4da',
						400: '#adb5bd',
						500: '#6c757d',
						600: '#495057',
						700: '#343a40',
						800: '#212529',
						900: '#1a1d20',
						950: '#0d0f11'
					},
					accent: {
						DEFAULT: '#d2691e', // Impulse Orange
						50: '#fef7ed',
						100: '#fdedd3',
						200: '#fbd7a5',
						300: '#f8ba6d',
						400: '#f59432',
						500: '#d2691e',
						600: '#b8551a',
						700: '#9e4417',
						800: '#843818',
						900: '#6d2f16',
						950: '#3a1708'
					},
					secondary: {
						DEFAULT: '#66788a', // Connection Gray
						50: '#f8f9fa',
						100: '#e9ecef',
						200: '#dee2e6',
						300: '#ced4da',
						400: '#adb5bd',
						500: '#6c757d',
						600: '#495057',
						700: '#343a40',
						800: '#212529',
						900: '#1a1d20',
						950: '#0d0f11'
					},
					dark: {
						DEFAULT: '#272828', // Digital Tint
						50: '#f8f9fa',
						100: '#e9ecef',
						200: '#dee2e6',
						300: '#ced4da',
						400: '#adb5bd',
						500: '#6c757d',
						600: '#495057',
						700: '#343a40',
						800: '#212529',
						900: '#1a1d20',
						950: '#0d0f11'
					},
					light: {
						DEFAULT: '#f7f7f7' // Cloud White
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
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
				'marquee': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'marquee': 'marquee var(--duration) linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
