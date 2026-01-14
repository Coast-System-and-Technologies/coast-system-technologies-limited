"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";

type Variant = "fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "lift" | "liftScale";

type BaseRevealProps = {
  delay?: number;     // seconds
  duration?: number;  // seconds
  y?: number;         // px
  x?: number;         // px
  once?: boolean;
  amount?: number;
  variant?: Variant;

  /** Helps text stay crisp: use "fade" on headings; use small y on cards */
  sharp?: boolean;
};

type AsTag =
  | "div"
  | "section"
  | "article"
  | "main"
  | "header"
  | "footer"
  | "ul"
  | "ol"
  | "li"
  | "span";

export type RevealProps<T extends AsTag = "div"> = BaseRevealProps &
  HTMLMotionProps<T> & {
    as?: T;
  };

function getVariant(
  variant: Variant,
  reduce: boolean,
  x: number,
  y: number
) {
  switch (variant) {
    case "fade":
      return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    case "fade-down":
      return {
        initial: { opacity: 0, y: reduce ? 0 : -Math.abs(y) },
        animate: { opacity: 1, y: 0 },
      };
    case "fade-left":
      return {
        initial: { opacity: 0, x: reduce ? 0 : -Math.abs(x) },
        animate: { opacity: 1, x: 0 },
      };
    case "fade-right":
      return {
        initial: { opacity: 0, x: reduce ? 0 : Math.abs(x) },
        animate: { opacity: 1, x: 0 },
      };
    case "scale":
      return {
        initial: { opacity: 0, scale: reduce ? 1 : 0.985 },
        animate: { opacity: 1, scale: 1 },
      };
    case "lift":
      return {
        initial: { opacity: 0, y: reduce ? 0 : Math.abs(y) },
        animate: { opacity: 1, y: 0 },
      };
    case "liftScale":
      return {
        initial: { opacity: 0, y: reduce ? 0 : Math.abs(y), scale: reduce ? 1 : 0.985 },
        animate: { opacity: 1, y: 0, scale: 1 },
      };
    case "fade-up":
    default:
      return {
        initial: { opacity: 0, y: reduce ? 0 : Math.abs(y) },
        animate: { opacity: 1, y: 0 },
      };
  }
}

export default function Reveal<T extends AsTag = "div">({
  as,
  children,
  delay = 0,
  duration = 0.42,   // slightly faster = sharper
  y = 8,             // smaller movement = less font “blur”
  x = 10,
  once = true,
  amount = 0.2,
  variant = "fade-up",
  sharp = true,
  style,
  ...rest
}: RevealProps<T>) {
  const reduce = useReducedMotion();
  const Tag = (motion as any)[as ?? "div"] as React.ElementType;

  const v = getVariant(variant, reduce, x, y);

  return (
    <Tag
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: sharp ? "hidden" : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Use ONLY inside ul/ol */
export type RevealItemProps = Omit<RevealProps<"li">, "as">;

export function RevealItem(props: RevealItemProps) {
  return <Reveal as="li" {...props} />;
}
