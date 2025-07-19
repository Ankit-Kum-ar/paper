// 3D Animation Constants and Utilities
export const ANIMATION_CONSTANTS = {
	PERSPECTIVE: "1000px",
	TRANSITION_DURATION: {
		FAST: 0.3,
		MEDIUM: 0.6,
		SLOW: 1.2,
		VERY_SLOW: 2.0
	},
	FLOATING_SHAPES: {
		COUNT: 12,
		TYPES: ['cube', 'sphere', 'triangle', 'diamond'],
		DURATION_RANGE: { min: 8, max: 15 },
		DELAY_MULTIPLIER: 0.5
	},
	GRID: {
		HORIZONTAL_LINES: 8,
		VERTICAL_LINES: 12,
		OPACITY: 0.1
	},
	WAVE_PARTICLES: {
		COUNT: 20,
		DURATION_RANGE: { min: 8, max: 12 },
		DELAY_MULTIPLIER: 0.2
	}
};

// 3D Transform Utilities
export const transform3D = {
	perspective: (value = "1000px") => ({ perspective: value }),
	preserve3D: () => ({ transformStyle: "preserve-3d" }),
	rotateX: (deg) => `perspective(1000px) rotateX(${deg}deg)`,
	rotateY: (deg) => `perspective(1000px) rotateY(${deg}deg)`,
	rotateZ: (deg) => `perspective(1000px) rotateZ(${deg}deg)`,
	translateZ: (px) => `translateZ(${px}px)`,
	full3D: (rotateX = 0, rotateY = 0, rotateZ = 0, translateZ = 0) => 
		`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateZ(${translateZ}px)`
};

// Color Utilities for 3D effects
export const colors3D = {
	primary: {
		light: "rgba(var(--primary), 0.3)",
		medium: "rgba(var(--primary), 0.5)",
		dark: "rgba(var(--primary), 0.7)"
	},
	secondary: {
		light: "rgba(var(--secondary), 0.3)",
		medium: "rgba(var(--secondary), 0.5)",
		dark: "rgba(var(--secondary), 0.7)"
	},
	accent: {
		light: "rgba(var(--accent), 0.3)",
		medium: "rgba(var(--accent), 0.5)",
		dark: "rgba(var(--accent), 0.7)"
	}
};

// Random utilities for 3D animations
export const random3D = {
	between: (min, max) => Math.random() * (max - min) + min,
	position: (max = 1200) => Math.random() * max,
	scale: (min = 0.5, max = 1.5) => min + Math.random() * (max - min),
	opacity: (min = 0.2, max = 0.8) => min + Math.random() * (max - min),
	duration: (min = 8, max = 15) => min + Math.random() * (max - min),
	delay: (multiplier = 0.5) => Math.random() * multiplier,
	rotation: () => Math.random() * 360
};
