import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Fingerprint, Zap, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section className="py-4 bg-transparent overflow-hidden">
      <motion.div
        className="mx-auto max-w-5xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* 100% Customizable */}
          <motion.div
            className="col-span-full md:col-span-2"
            variants={itemVariants}
          >
            <Card className="h-full border-white/5 bg-[#0a0a0a] overflow-hidden group hover:border-white/10 transition-colors duration-500">
              <CardContent className="h-full flex flex-col items-center justify-center p-8 pt-12">
                <div className="relative mb-6">
                  <motion.svg
                    className="w-48 h-24 text-white/10"
                    viewBox="0 0 200 100"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    <ellipse
                      cx="100"
                      cy="50"
                      rx="90"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5, 5"
                    />
                  </motion.svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white tracking-tighter">
                      100%
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  Customizable
                </h3>
              </CardContent>
            </Card>
          </motion.div>

          {/* Secure by default */}
          <motion.div
            className="col-span-full md:col-span-2"
            variants={itemVariants}
          >
            <Card className="h-full border-white/5 bg-[#0a0a0a] overflow-hidden group hover:border-white/10 transition-colors duration-500">
              <CardContent className="h-full flex flex-col items-center text-center p-8 pt-12">
                <div className="size-24 rounded-full border border-white/5 flex items-center justify-center mb-10 bg-white/5 relative group-hover:bg-white/10 transition-colors">
                  <Fingerprint
                    className="size-12 text-white/40 group-hover:text-white transition-colors"
                    strokeWidth={1}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-t border-white/20"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Secure by default
                </h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
                  Provident fugit and vero voluptate. magnam magni doloribus
                  dolores voluptates a sapiente nisi.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Faster than light (Wave) */}
          <motion.div
            className="col-span-full md:col-span-2"
            variants={itemVariants}
          >
            <Card className="h-full border-white/5 bg-[#0a0a0a] overflow-hidden group hover:border-white/10 transition-colors duration-500">
              <CardContent className="h-full flex flex-col items-center text-center p-8 pt-12">
                <div className="w-full h-24 mb-10 relative">
                  <motion.svg
                    className="w-full h-full text-white/20"
                    viewBox="0 0 200 60"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M0,45 Q25,5 50,30 T100,20 T150,50 T200,30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M0,45 Q25,5 50,30 T100,20 T150,50 T200,30 L200,60 L0,60 Z"
                      fill="url(#gradient-wave)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                    <defs>
                      <linearGradient
                        id="gradient-wave"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="currentColor"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="currentColor"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                  <div className="absolute top-0 right-0 text-[10px] text-white/30 font-mono">
                    14.34 mbps
                  </div>
                  <div className="absolute top-0 left-0 text-[10px] text-white/30 font-mono flex items-center gap-1">
                    <Zap className="size-3 fill-white/30" /> Download
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Faster than light
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Provident fugit vero voluptate. magnam magni doloribus dolores
                  voluptates inventore nisi.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Infrastructure */}
          <motion.div
            className="col-span-full md:col-span-3"
            variants={itemVariants}
          >
            <Card className="h-full border-white/5 bg-[#0a0a0a] overflow-hidden group hover:border-white/10 transition-colors duration-500 border-r-0 md:border-r">
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 h-full p-0">
                <div className="p-8 flex flex-col justify-between">
                  <div className="size-12 rounded-full border border-white/5 flex items-center justify-center mb-12 bg-white/5">
                    <Shield className="size-6 text-white/40" strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      Reliability
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Provident fugit vero voluptate. Voluptates a sapiente
                      inventore nisi.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 border-l border-white/5 p-8 relative flex items-end justify-center min-h-[200px]">
                  <div className="absolute top-4 left-4 flex gap-1">
                    <div className="size-1.5 rounded-full bg-white/10" />
                    <div className="size-1.5 rounded-full bg-white/10" />
                    <div className="size-1.5 rounded-full bg-white/10" />
                  </div>
                  <motion.svg
                    className="w-full h-32 text-indigo-500/40"
                    viewBox="0 0 100 40"
                  >
                    <motion.path
                      d="M0,40 L10,35 L20,38 L30,20 L40,25 L50,15 L60,30 L70,10 L80,15 L90,5 L100,8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 3, ease: "linear" }}
                    />
                  </motion.svg>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Collaboration */}
          <motion.div
            className="col-span-full md:col-span-3"
            variants={itemVariants}
          >
            <Card className="h-full border-white/5 bg-[#0a0a0a] overflow-hidden group hover:border-white/10 transition-colors duration-500">
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 h-full p-0">
                <div className="p-8 flex flex-col justify-between">
                  <div className="size-12 rounded-full border border-white/5 flex items-center justify-center mb-12 bg-white/5">
                    <Users className="size-6 text-white/40" strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      Human Harmony
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Voluptate. magnam magni doloribus dolores voluptates a
                      sapiente inventore nisi.
                    </p>
                  </div>
                </div>
                <div className="relative border-l border-white/5 p-8 flex flex-col justify-center space-y-6">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-full w-px bg-white/5" />
                  </div>

                  {[
                    {
                      name: "Likeur",
                      color: "bg-blue-500/20",
                      border: "border-blue-500/40",
                      side: "right",
                    },
                    {
                      name: "M. Irung",
                      color: "bg-red-500/20",
                      border: "border-red-500/40",
                      side: "left",
                    },
                    {
                      name: "B. Ng",
                      color: "bg-green-500/20",
                      border: "border-green-500/40",
                      side: "right",
                    },
                  ].map((user, i) => (
                    <motion.div
                      key={i}
                      className={cn(
                        "relative flex items-center gap-2",
                        user.side === "right"
                          ? "ml-auto flex-row-reverse"
                          : "mr-auto",
                      )}
                      initial={{
                        x: user.side === "right" ? 20 : -20,
                        opacity: 0,
                      }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                    >
                      <div className="bg-[#111] border border-white/5 px-3 py-1 rounded text-[10px] text-white/50">
                        {user.name}
                      </div>
                      <div
                        className={cn(
                          "size-8 rounded-full border",
                          user.color,
                          user.border,
                        )}
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
