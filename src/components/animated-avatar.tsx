"use client"

import { motion } from "motion/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AnimatedAvatarProps {
  src: string;
  alt: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-16",
  md: "size-28",
  lg: "size-40",
};

export function AnimatedAvatar({
  src,
  alt,
  fallback,
  size = "md",
}: AnimatedAvatarProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
      }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
    >
      <Avatar className={`${sizeClasses[size]} border-2 border-primary shadow-lg`}>
        <AvatarImage alt={alt} src={src} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </motion.div>
  );
}
