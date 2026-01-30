import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
    onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
    const [isVisible, setIsVisible] = useState(true);

    // The text to display
    const text = "Manyi Yao";
    const letters = Array.from(text);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08, // Slightly faster stagger
                delayChildren: 0.1,    // Start almost immediately
            },
        },
        exit: {
            y: "-100%",
            transition: {
                duration: 0.8, // Faster exit
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    const letterVariants = {
        hidden: {
            y: "55vh",
            opacity: 0,
            filter: "blur(15px)",
            scale: 1.1,
        },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    useEffect(() => {
        // Wait for the entrance animation to finish then IMMEDIATELY exit
        // Total time = delayChildren (0.1) + ((letters-1) * stagger (0.08)) + duration (1.4)
        // 100 + (8 * 80) + 1400 = 2140ms
        const totalDuration = 100 + ((letters.length - 1) * 80) + 1400;

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, totalDuration);

        return () => clearTimeout(timer);
    }, [letters.length]);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="pb-4">
                        <div className="flex">
                            {letters.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    className="text-5xl md:text-8xl font-cormorant font-medium tracking-tight text-foreground inline-block"
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
