import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

// CVA for card variants
const cardVariants = cva(
  "relative flex flex-col justify-between w-full p-8 overflow-hidden rounded-2xl border border-white/5 transition-all duration-500 ease-out group hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
  {
    variants: {
      variant: {
        default: "bg-[#111] text-white",
        red: "bg-gradient-to-br from-red-600/20 to-black text-white",
        blue: "bg-gradient-to-br from-blue-600/20 to-black text-white",
        gray: "bg-gradient-to-br from-gray-600/20 to-black text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ServiceCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, href, imgSrc, imgAlt, ...props }, ref) => {
    
    const cardAnimation = {
      hover: {
        y: -5,
        transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
      },
    };

    const imageAnimation = {
      hover: {
        scale: 1.15,
        rotate: -5,
        x: 10,
        y: 10,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
      },
    };
    
    const arrowAnimation = {
        hover: {
            x: 8,
            transition: { duration: 0.4, ease: "easeInOut" },
        }
    }

    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        variants={cardAnimation}
        whileHover="hover"
        {...props}
      >
        <div className="relative z-10 flex flex-col h-full items-start">
          <h3 className="text-3xl font-bold tracking-tight mb-8 max-w-[80%] leading-[1.1]">{title}</h3>
          <a
            href={href}
            aria-label={`Learn more about ${title}`}
            className="mt-auto flex items-center text-xs font-bold tracking-[0.2em] uppercase opacity-50 group-hover:opacity-100 transition-opacity"
          >
            LEARN MORE
            <motion.div variants={arrowAnimation}>
                <ArrowRight className="ml-3 h-4 w-4" />
            </motion.div>
          </a>
        </div>
        
        <div className="absolute -right-4 -bottom-4 w-48 h-48 pointer-events-none overflow-visible">
            <motion.img
              src={imgSrc}
              alt={imgAlt}
              className="w-full h-full object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              variants={imageAnimation}
            />
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </motion.div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
