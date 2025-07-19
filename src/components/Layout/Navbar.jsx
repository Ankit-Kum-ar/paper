// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLink, AnimatedButton } from "./NavbarAnimations";
import { Navbar3DBackground } from "./Navbar3DBackground";
import { 
	navbarVariants, 
	menuItemVariants,
	logoVariants,
	desktopMenuVariants,
	donateButtonVariants as ctaButtonVariants
} from "./navbarVariants";

const Navbar = () => {

	const menuItems = [
		{ to: "/", label: "Home" },
		{ to: "/about", label: "About Us" },
		{ to: "/products", label: "Products" },
		{ to: "/contact", label: "Contact Us" },
	];

	const mobileMenuItems = [
		{ to: "/", label: "Home" },
		{ to: "/about", label: "About Us" },
		{ to: "/products", label: "Products" },
		{ to: "/contact", label: "Contact Us" },
	];

	return (
		<motion.nav
			className="relative bg-base-100/95 shadow-sm border-b border-base-200 backdrop-blur-md"
			initial="hidden"
			animate="visible"
			variants={navbarVariants}
			style={{ 
				perspective: "1000px",
				transformStyle: "preserve-3d"
			}}
		>
			{/* 3D Motion Background */}
			<Navbar3DBackground />
			
			{/* Main Navbar Content */}
			<div className="navbar md:px-10 relative z-10">
				{/* Left Section */}
				<div className="navbar-start">
					<div className="dropdown">
						<motion.div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
							whileHover={{ 
								scale: 1.05,
								backgroundColor: "hsl(var(--primary) / 0.1)"
							}}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 25 }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</motion.div>
						
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-xl border border-base-200"
						>
							{mobileMenuItems.map((item) => (
								<li key={item.to}>
									<AnimatedLink
										to={item.to}
										className="p-3 rounded-lg transition-colors"
									>
										{item.label}
									</AnimatedLink>
								</li>
							))}
						</ul>
					</div>
					
					{/* Logo */}
					<motion.div
						variants={logoVariants}
						initial="hidden"
						animate="visible"
					>
						<AnimatedLink 
							to="/" 
							className="p-2 text-xl font-bold text-primary"
						>
							CPM
						</AnimatedLink>
					</motion.div>
				</div>
				
				{/* Center Section - Desktop Menu */}
				<div className="navbar-center hidden lg:flex">
					<motion.ul
						className="menu menu-horizontal px-1 space-x-2"
						variants={desktopMenuVariants}
						initial="hidden"
						animate="visible"
					>
						{menuItems.map((item, index) => (
							<motion.li
								key={item.to}
								variants={menuItemVariants}
								initial="hidden"
								animate="visible"
								custom={index}
							>
								<AnimatedLink
									to={item.to}
									className="px-4 py-2 rounded-lg font-medium text-base-content transition-colors"
								>
									{item.label}
								</AnimatedLink>
							</motion.li>
						))}
					</motion.ul>
				</div>
				
				{/* Right Section - Get Started Button */}
				<div className="navbar-end">
					<motion.div
						variants={ctaButtonVariants}
						initial="hidden"
						animate="visible"
					>
						<AnimatedButton className="btn btn-primary">
							Get Started
						</AnimatedButton>
					</motion.div>
				</div>
			</div>
			
			{/* Enhanced Bottom Separator Line with 3D Effect */}
			<motion.div
				className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/30 via-primary/70 to-primary/30 shadow-lg"
				initial={{ scaleX: 0, opacity: 0 }}
				animate={{ scaleX: 1, opacity: 1 }}
				transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
				style={{ 
					width: "100%", 
					transformOrigin: "left",
					transform: "perspective(1000px) rotateX(10deg) translateZ(5px)",
					boxShadow: "0 2px 10px rgba(var(--primary), 0.3)"
				}}
			/>
			
			{/* Additional depth line */}
			<motion.div
				className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
				style={{ 
					width: "100%", 
					transformOrigin: "center",
					transform: "perspective(1000px) rotateX(5deg) translateZ(2px)"
				}}
			/>
		</motion.nav>
	);
};

export default Navbar;
