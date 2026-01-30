import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
    onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isReady, setIsReady] = useState(false);

    // The text to display
    const text = "Manyi Yao";
    const letters = Array.from(text);

    useEffect(() => {
        // Wait for fonts and critical resources to load before starting animation
        // This prevents the "jank" or "stutter" on first load
        const prepareAnimation = async () => {
            try {
                // Wait for document ready
                if (document.readyState !== "complete") {
                    await new Promise((resolve) => {
                        window.addEventListener("load", resolve, { once: true });
                    });
                }

                // Wait for fonts
                await document.fonts.ready;

                // Small buffer to ensure browser layout is settled
                await new Promise(r => setTimeout(r, 100));

                setIsReady(true);
            } catch (e) {
                // Fallback if anything fails
                console.error("Animation prep failed", e);
                setIsReady(true);
            }
        };

        prepareAnimation();
    }, []);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
        exit: {
            y: "-100%",
            transition: {
                duration: 0.8,
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
            willChange: "transform, opacity, filter", // Hint to browser for optimization
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
        if (!isReady) return;

        // Calculate exit time based on animation duration
        const totalDuration = 100 + ((letters.length - 1) * 80) + 1400;

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, totalDuration + 200); // Add small buffer for aesthetics

        return () => clearTimeout(timer);
    }, [isReady, letters.length]);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isReady ? "visible" : "hidden"}
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
