import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  FolderKanban,
  Settings2,
  Mail
} from "lucide-react";

const navItems = [
  { key: "home", label: "Home", icon: Home, path: "/" },
  { key: "about", label: "About", icon: User, path: "/about" },
  { key: "products", label: "Products", icon: FolderKanban, path: "/products" },
//   { key: "techstack", label: "Tech", icon: Settings2, path: "/techstack" },
  { key: "contact", label: "Contact", icon: Mail, path: "/contact" }
];

const MobileNavbar = () => {
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const current = navItems.find((item) => item.path === location.pathname);
    setActive(current ? current.key : "home");
  }, [location]);

  return (
    <motion.nav
      className="sm:hidden fixed bottom-0 left-0 right-0 mx-auto w-[95%] bg-base-100/90 backdrop-blur-md border border-base-300 rounded-xl p-3 flex justify-around items-center z-50"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AnimatePresence>
        {/* eslint-disable-next-line no-unused-vars */}
        {navItems.map(({ key, label, icon: Icon, path }, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link to={path} onClick={() => setActive(key)}>
              <motion.div
                className="flex flex-col items-center relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Icon */}
                <motion.div
                  animate={{
                    scale: active === key ? 1.2 : 1,
                    filter:
                      active === key
                        ? "drop-shadow(0 0 6px hsl(var(--p)))"
                        : "drop-shadow(0 0 0 transparent)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      active === key ? "text-primary" : "text-base-content"
                    }`}
                  />
                </motion.div>

                {/* Label */}
                <span
                  className={`text-xs mt-1 ${
                    active === key ? "text-primary font-medium" : "text-base-content"
                  }`}
                >
                  {label}
                </span>

                {/* Active dot */}
                {active === key && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                    layoutId="activeDot"
                    style={{ x: "-50%" }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.nav>
  );
};

export default MobileNavbar;
