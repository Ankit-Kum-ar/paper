// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Motion Background Component
export const MotionBackground = () => {
	const particles = Array.from({ length: 8 }, (_, i) => i);
	
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
			{particles.map((particle) => (
				<motion.div
					key={particle}
					className="absolute w-1 h-1 bg-primary/20 rounded-full"
					initial={{
						x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
						y: Math.random() * 80,
						opacity: 0,
					}}
					animate={{
						x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
						y: Math.random() * 80,
						opacity: [0, 0.6, 0],
						scale: [0.8, 1.2, 0.8],
					}}
					transition={{
						duration: Math.random() * 15 + 15,
						repeat: Infinity,
						ease: "linear",
						delay: Math.random() * 8,
					}}
				/>
			))}
		</div>
	);
};

// New Improved Animated Link Component
export const AnimatedLink = ({ to, children, className = "", onClick, isActive = false }) => (
	<motion.div
		className="relative group"
		whileHover={{ scale: 1.02 }}
		whileTap={{ scale: 0.98 }}
		transition={{ type: "spring", stiffness: 400, damping: 25 }}
	>
		<Link
			to={to}
			className={`${className} relative block overflow-hidden`}
			onClick={onClick}
		>
			{/* Background hover effect */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg opacity-0"
				whileHover={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
			/>
			
			{/* Text with color animation */}
			<motion.span
				className="relative z-10 block"
				initial={{ color: "inherit" }}
				whileHover={{ 
					color: "hsl(var(--primary))",
					textShadow: "0 0 8px hsla(var(--primary), 0.3)"
				}}
				transition={{ duration: 0.2 }}
			>
				{children}
			</motion.span>
			
			{/* Sliding underline effect */}
			<motion.div
				className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
				initial={{ 
					scaleX: isActive ? 1 : 0,
					opacity: isActive ? 1 : 0
				}}
				whileHover={{ 
					scaleX: 1,
					opacity: 1
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				style={{ width: "100%", transformOrigin: "center" }}
			/>
			
			{/* Glow effect on hover */}
			<motion.div
				className="absolute inset-0 rounded-lg border border-primary/20 opacity-0"
				whileHover={{ 
					opacity: 1,
					boxShadow: "0 0 12px hsla(var(--primary), 0.2)"
				}}
				transition={{ duration: 0.3 }}
			/>
		</Link>
	</motion.div>
);

// New Improved Animated Button Component
export const AnimatedButton = ({ children, className = "", onClick }) => (
	<motion.button
		className={`${className} relative overflow-hidden group`}
		onClick={onClick}
		whileHover={{ 
			scale: 1.05,
			y: -1
		}}
		whileTap={{ scale: 0.95, y: 0 }}
		transition={{ type: "spring", stiffness: 400, damping: 25 }}
	>
		{/* Shimmer effect on hover */}
		<motion.div
			className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
			whileHover={{ translateX: "200%" }}
			transition={{ duration: 0.6, ease: "easeInOut" }}
		/>
		
		{/* Glow effect */}
		<motion.div
			className="absolute inset-0 rounded-lg opacity-0"
			whileHover={{ 
				opacity: 1,
				boxShadow: "0 0 20px hsla(var(--primary), 0.4), 0 0 40px hsla(var(--primary), 0.1)"
			}}
			transition={{ duration: 0.3 }}
		/>
		
		<span className="relative z-10">{children}</span>
	</motion.button>
);
