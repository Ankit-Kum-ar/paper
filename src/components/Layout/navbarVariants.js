// Animation variants for navbar components
export const navbarVariants = {
	hidden: { y: -100, opacity: 0 },
	visible: { 
		y: 0, 
		opacity: 1,
		transition: { 
			duration: 0.6, 
			ease: "easeOut" 
		}
	}
};

// Mobile dropdown animations
export const dropdownVariants = {
	hidden: { 
		opacity: 0, 
		y: -20, 
		scale: 0.95 
	},
	visible: { 
		opacity: 1, 
		y: 0, 
		scale: 1,
		transition: { 
			duration: 0.2,
			ease: "easeOut"
		}
	},
	exit: { 
		opacity: 0, 
		y: -20, 
		scale: 0.95,
		transition: { 
			duration: 0.2 
		}
	}
};

// Staggered menu items animation
export const menuItemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: (index) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: index * 0.08,
			duration: 0.3,
			ease: "easeOut"
		}
	})
};

// Logo animation
export const logoVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: { 
		opacity: 1, 
		x: 0,
		transition: { 
			delay: 0.2, 
			duration: 0.5,
			ease: "easeOut"
		}
	}
};

// Desktop menu animation
export const desktopMenuVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { 
		opacity: 1, 
		y: 0,
		transition: { 
			delay: 0.3, 
			duration: 0.4,
			staggerChildren: 0.08,
			ease: "easeOut"
		}
	}
};

// CTA button animation (Get Started, etc.)
export const donateButtonVariants = {
	hidden: { opacity: 0, x: 30 },
	visible: { 
		opacity: 1, 
		x: 0,
		transition: { 
			delay: 0.4, 
			duration: 0.5,
			ease: "easeOut"
		}
	}
};
