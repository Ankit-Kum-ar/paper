// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ANIMATION_CONSTANTS, transform3D, random3D } from "./navbar3DConstants";

// 3D Floating Geometric Shapes
const FloatingShape = ({ shape, delay = 0, duration = 10 }) => {
	const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
	
	const shapeVariants = {
		initial: {
			x: random3D.position(windowWidth),
			y: random3D.position(100),
			z: random3D.position(100),
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: random3D.scale(),
			opacity: random3D.opacity(),
		},
		animate: {
			x: random3D.position(windowWidth),
			y: random3D.position(100),
			z: random3D.position(50),
			rotateX: 360,
			rotateY: 360,
			rotateZ: 180,
			scale: [0.5, 1.2, 0.8],
			opacity: [0.3, 0.8, 0.3],
			transition: {
				duration: duration,
				delay: delay,
				repeat: Infinity,
				ease: "linear",
			},
		},
	};

	const renderShape = () => {
		switch (shape) {
			case 'cube':
				return (
					<div className="w-4 h-4 bg-gradient-to-br from-primary/30 to-secondary/30 transform-gpu rotate-12 shadow-lg border border-primary/20" />
				);
			case 'sphere':
				return (
					<div className="w-5 h-5 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full shadow-lg border border-accent/20" />
				);
			case 'triangle':
				return (
					<div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-secondary/30 shadow-lg" />
				);
			case 'diamond':
				return (
					<div className="w-3 h-3 bg-gradient-to-br from-info/30 to-primary/30 transform rotate-45 shadow-lg border border-info/20" />
				);
			default:
				return (
					<div className="w-4 h-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-sm shadow-lg border border-primary/20" />
				);
		}
	};

	return (
		<motion.div
			className="absolute pointer-events-none"
			variants={shapeVariants}
			initial="initial"
			animate="animate"
			style={{
				...transform3D.perspective(ANIMATION_CONSTANTS.PERSPECTIVE),
				...transform3D.preserve3D(),
			}}
		>
			{renderShape()}
		</motion.div>
	);
};

// 3D Grid Background
const Grid3D = () => {
	const { GRID } = ANIMATION_CONSTANTS;
	
	return (
		<motion.div
			className="absolute inset-0"
			style={{ opacity: GRID.OPACITY }}
			initial={{ opacity: 0 }}
			animate={{ opacity: GRID.OPACITY }}
			transition={{ duration: ANIMATION_CONSTANTS.TRANSITION_DURATION.SLOW }}
		>
			{/* Horizontal lines */}
			{Array.from({ length: GRID.HORIZONTAL_LINES }, (_, i) => (
				<motion.div
					key={`h-${i}`}
					className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
					style={{
						top: `${(i + 1) * 12.5}%`,
						transform: transform3D.full3D(45, 0, 0, i * 2),
					}}
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ 
						duration: 1, 
						delay: i * 0.1,
						ease: "easeOut" 
					}}
				/>
			))}
			{/* Vertical lines */}
			{Array.from({ length: GRID.VERTICAL_LINES }, (_, i) => (
				<motion.div
					key={`v-${i}`}
					className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
					style={{
						left: `${(i + 1) * 8.33}%`,
						transform: transform3D.full3D(0, 45, 0, i * 2),
					}}
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 1 }}
					transition={{ 
						duration: 1, 
						delay: i * 0.1,
						ease: "easeOut"
					}}
				/>
			))}
		</motion.div>
	);
};

// 3D Wave Animation
const Wave3D = () => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const { WAVE_PARTICLES } = ANIMATION_CONSTANTS;

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePos({
				x: (e.clientX / window.innerWidth) * 2 - 1,
				y: (e.clientY / window.innerHeight) * 2 - 1,
			});
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

	return (
		<motion.div
			className="absolute inset-0 overflow-hidden"
			style={{
				background: `radial-gradient(circle at ${50 + mousePos.x * 20}% ${50 + mousePos.y * 20}%, rgba(var(--primary), 0.03) 0%, transparent 70%)`,
			}}
			animate={{
				background: `radial-gradient(circle at ${50 + mousePos.x * 20}% ${50 + mousePos.y * 20}%, rgba(var(--primary), 0.03) 0%, transparent 70%)`,
			}}
			transition={{ duration: ANIMATION_CONSTANTS.TRANSITION_DURATION.FAST }}
		>
			{/* Animated wave particles */}
			{Array.from({ length: WAVE_PARTICLES.COUNT }, (_, i) => (
				<motion.div
					key={i}
					className="absolute w-1 h-1 bg-primary/20 rounded-full"
					initial={{
						x: random3D.position(windowWidth),
						y: random3D.position(100),
					}}
					animate={{
						x: random3D.position(windowWidth),
						y: random3D.position(100),
						scale: [0.5, 1.5, 0.5],
						opacity: [0.2, 0.8, 0.2],
					}}
					transition={{
						duration: random3D.duration(WAVE_PARTICLES.DURATION_RANGE.min, WAVE_PARTICLES.DURATION_RANGE.max),
						repeat: Infinity,
						ease: "easeInOut",
						delay: i * WAVE_PARTICLES.DELAY_MULTIPLIER,
					}}
					style={{
						transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`,
					}}
				/>
			))}
		</motion.div>
	);
};

// Main 3D Background Component
export const Navbar3DBackground = () => {
	const { FLOATING_SHAPES } = ANIMATION_CONSTANTS;
	
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{/* 3D Grid Background */}
			<Grid3D />
			
			{/* 3D Wave Animation */}
			<Wave3D />
			
			{/* 3D Floating Shapes */}
			<div className="absolute inset-0">
				{Array.from({ length: FLOATING_SHAPES.COUNT }, (_, i) => (
					<FloatingShape
						key={i}
						shape={FLOATING_SHAPES.TYPES[i % FLOATING_SHAPES.TYPES.length]}
						delay={i * FLOATING_SHAPES.DELAY_MULTIPLIER}
						duration={random3D.duration(FLOATING_SHAPES.DURATION_RANGE.min, FLOATING_SHAPES.DURATION_RANGE.max)}
					/>
				))}
			</div>
			
			{/* 3D Depth Layers */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: ANIMATION_CONSTANTS.TRANSITION_DURATION.SLOW }}
				style={{
					transform: transform3D.full3D(2, 0, 0, 10),
				}}
			/>
			
			{/* Animated Border Effect */}
			<motion.div
				className="absolute inset-0 border border-primary/10 rounded-lg"
				initial={{ 
					borderColor: "rgba(var(--primary), 0.1)",
					boxShadow: "inset 0 0 0 rgba(var(--primary), 0.1)"
				}}
				animate={{ 
					borderColor: ["rgba(var(--primary), 0.1)", "rgba(var(--primary), 0.3)", "rgba(var(--primary), 0.1)"],
					boxShadow: [
						"inset 0 0 0 rgba(var(--primary), 0.1)",
						"inset 0 0 20px rgba(var(--primary), 0.1)",
						"inset 0 0 0 rgba(var(--primary), 0.1)"
					]
				}}
				transition={{ 
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}}
				style={{
					transform: transform3D.full3D(1, 0, 0, 5),
				}}
			/>
		</div>
	);
};

export default Navbar3DBackground;
