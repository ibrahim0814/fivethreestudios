'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

function FloatingPaths({ position, isMobile = false }: { position: number; isMobile?: boolean }) {
  const paths = Array.from({ length: isMobile ? 24 : 36 }, (_, i) => ({
    id: i,
    d: isMobile
      ? `M-${480 - i * 12 * position} -${1000 + i * 15}C-${
          380 - i * 12 * position
        } -${800 + i * 15} -${280 - i * 12 * position} -${600 + i * 15} ${
          0 - i * 12 * position
        } -${400 + i * 15}C${300 - i * 12 * position} -${200 + i * 15} ${
          600 - i * 12 * position
        } ${200 + i * 15} ${1200 - i * 12 * position} ${400 + i * 15}`
      : `M-${380 - i * 5 * position} -${289 + i * 6}C-${
          380 - i * 5 * position
        } -${289 + i * 6} -${312 - i * 5 * position} ${116 - i * 6} ${
          152 - i * 5 * position
        } ${243 - i * 6}C${616 - i * 5 * position} ${370 - i * 6} ${
          684 - i * 5 * position
        } ${775 - i * 6} ${684 - i * 5 * position} ${775 - i * 6}`,
    color: `rgba(15,23,42,${isMobile ? 0.08 + i * 0.02 : 0.05 + i * 0.015})`,
    width: isMobile ? 0.8 + i * 0.08 : 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox={isMobile ? '-500 -1200 2000 2000' : '0 0 696 316'}
        preserveAspectRatio={isMobile ? 'xMidYMid slice' : 'none'}
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={isMobile ? 0.08 + path.id * 0.02 : 0.05 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: isMobile ? 0.5 : 0.4 }}
            animate={{
              pathLength: 1,
              opacity: isMobile ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: isMobile ? 15 + Math.random() * 8 : 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({ title = 'Background Paths' }: { title?: string }) {
  const words = ['Five', 'Three', 'Studios'];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Gradient fade overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top fade gradient */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />

        <div className="absolute inset-0">
          <div className="hidden sm:block">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>
          <div className="block sm:hidden">
            <FloatingPaths position={1} isMobile={true} />
            <FloatingPaths position={-1} isMobile={true} />
          </div>
        </div>

        {/* Bottom fade gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-8 md:px-6 text-left pt-16 sm:pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl pl-0 md:pl-16"
        >
          <h1 className="text-7xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter flex flex-col sm:block">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block sm:mr-4 last:mr-0 mb-2 sm:mb-0">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: 'spring',
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700 
                                        dark:from-white dark:to-white/80 font-bold"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative max-w-3xl mb-12"
          >
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-[2px]">
              <div className="bg-white rounded-2xl p-6">
                <p className="text-xl md:text-2xl text-neutral-800 font-medium text-left">
                  Want to integrate AI powered workflows into your business but don't know where to
                  start?{' '}
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
                    We've tried and tested all the tools for you. Let's cut through the noise,
                    tailor a plan, and help you harness AI’s full potential—stress-free
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center sm:justify-start">
            <a
              href="https://calendly.com/ibrahim0814/fivethree-consult"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md px-6 py-3 text-lg font-bold 
                            bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                            text-white shadow-lg hover:shadow-xl transition-all"
            >
              <span>Get Started</span>
              <span className="ml-3 text-blue-200">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
