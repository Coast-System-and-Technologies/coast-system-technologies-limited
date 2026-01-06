"use client";

import * as React from "react";
import {
    motion,
    useReducedMotion,
    type HTMLMotionProps,
} from "motion/react";


type Variant = "fadeBlur" | "fade" | "fadeUp" | "scale";

type BaseRevealProps = {
    delay?: number;       // seconds
    duration?: number;    // seconds
    y?: number;           // px (used in fadeUp)
    once?: boolean;
    amount?: number;      // viewport trigger amount
    variant?: Variant;
};

function getMotion(variant: Variant, reduce: boolean, y: number) {
    const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

    // Sharper premium: minimal blur
    if (variant === "fadeBlur") {
        return {
            initial: {
                opacity: 0,
                y: reduce ? 0 : 6,
                scale: reduce ? 1 : 0.997,
                filter: reduce ? "none" : "blur(5px)",
            },
            animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
            ease,
        };
    }

    if (variant === "fade") {
        return { initial: { opacity: 0 }, animate: { opacity: 1 }, ease };
    }

    if (variant === "scale") {
        return {
            initial: { opacity: 0, scale: reduce ? 1 : 0.985 },
            animate: { opacity: 1, scale: 1 },
            ease,
        };
    }

    // fadeUp
    return {
        initial: { opacity: 0, y: reduce ? 0 : y },
        animate: { opacity: 1, y: 0 },
        ease,
    };
}

export type RevealProps = HTMLMotionProps<"div"> & BaseRevealProps;

export default function Reveal({
    children,
    delay = 0,
    duration = 0.6,
    y = 10,
    once = true,
    amount = 0.18,
    variant = "fadeBlur",
    ...rest
}: RevealProps) {
    const reduce = useReducedMotion();
    const m = getMotion(variant, reduce, y);

    return (
        <motion.div
            initial={m.initial}
            whileInView={m.animate}
            viewport={{ once, amount }}
            transition={{ duration, delay, ease: m.ease }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

export type RevealItemProps = HTMLMotionProps<"li"> & BaseRevealProps;

export function RevealItem({
    children,
    delay = 0,
    duration = 0.6,
    y = 10,
    once = true,
    amount = 0.18,
    variant = "fadeBlur",
    ...rest
}: RevealItemProps) {
    const reduce = useReducedMotion();
    const m = getMotion(variant, reduce, y);

    return (
        <motion.li
            initial={m.initial}
            whileInView={m.animate}
            viewport={{ once, amount }}
            transition={{ duration, delay, ease: m.ease }}
            {...rest}
        >
            {children}
        </motion.li>
    );
}
