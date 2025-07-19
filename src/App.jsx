import React, { Suspense, useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { ScrollbarStyles } from "./components/Layout"
import { LazyLoading } from "./components/LazyLoading"
import { AnimatePresence } from "framer-motion"
import Loader from "./components/Loader"

// Lazy load components for better performance
const Home = React.lazy(() => import("./pages/Home/Home"))
const About = React.lazy(() => import("./pages/About/About"))
const ContactUs = React.lazy(() => import("./pages/ContactUs/ContactUs"))
const Navbar = React.lazy(() => import("./components/Layout/Navbar"))
const Footer = React.lazy(() => import("./components/Layout/Footer"))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // Show loader for 2.5 seconds

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <ScrollbarStyles />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Suspense fallback={
              <div className="h-20 bg-[#1a1a1a] animate-pulse"></div>
            }>
              <LazyLoading 
                animation="fadeIn" 
                threshold={0.1} 
                duration={0.5}
              >
                <Navbar />
              </LazyLoading>
            </Suspense>

            <Suspense fallback={null}>
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <LazyLoading 
                      animation="fadeIn" 
                      threshold={0.1} 
                      duration={0.8}
                    >
                      <Home />
                    </LazyLoading>
                  } 
                />
                <Route 
                  path="/about" 
                  element={
                    <LazyLoading 
                      animation="fadeIn" 
                      threshold={0.1} 
                      duration={0.8}
                    >
                      <About />
                    </LazyLoading>
                  } 
                />
                <Route 
                  path="/contact" 
                  element={
                    <LazyLoading 
                      animation="fadeIn" 
                      threshold={0.1} 
                      duration={0.8}
                    >
                      <ContactUs />
                    </LazyLoading>
                  } 
                />
              </Routes>
            </Suspense>

            <Suspense fallback={
              <div className="h-96 bg-[#1a1a1a] animate-pulse"></div>
            }>
              <LazyLoading 
                animation="fadeIn" 
                threshold={0.1} 
                duration={0.5}
              >
                <Footer />
              </LazyLoading>
            </Suspense>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
