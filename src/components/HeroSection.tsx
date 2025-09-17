import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, CloudIcon, ServerStackIcon } from "@hugeicons/core-free-icons"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="relative h-[calc(110vh-64px)] overflow-hidden flex items-center bg-white">
      {/* Image Container with Rounded Edges and Overlay for Contrast */}
      <div className="absolute inset-0 z-0">
        <div className="w-[calc(100%-60px)] h-[calc(100%-60px)] mx-auto my-auto rounded-3xl overflow-hidden shadow-lg relative">
          <img 
            src="/bg.jpeg" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay only on the image */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </div>

      {/* Main Content Container with Rounded Edges */}
      <div className="relative z-10 w-full">
        <div className="w-[calc(100%-120px)] max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              {/* Company Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-brand-primary text-sm font-medium mb-8">
                <HugeiconsIcon icon={CloudIcon} size={16} className="mr-2" />
                Born in the Canary Islands, Serving the World
              </div>
              
              {/* Main Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 leading-snug font-display">
                The cloud should be a driver of{" "}
                <br />
                <span className="text-brand-accent">growth</span>, not a{" "}
                <span className="text-white">financial burden</span>
              </h1>
              {/* Subheadline */}
              <p className="text-base md:text-lg text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                We are your strategic partner in digital evolution. Fusing the precision of code 
                with the scalability of the cloud to create innovative solutions that transform 
                ideas into tangible projects.
              </p>
              
              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-3 justify-center" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
                <motion.button
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  className="bg-brand-primary hover:bg-brand-primary-700 text-white px-6 py-3 rounded-full text-base font-semibold transition-colors duration-200 flex items-center justify-center group"
                >
                  <HugeiconsIcon icon={ServerStackIcon} size={16} className="mr-2" />
                  Start Your Cloud Journey
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
                <motion.button
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full text-base font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <HugeiconsIcon icon={CloudIcon} size={16} className="mr-2" />
                  View Our Solutions
                </motion.button>
              </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
