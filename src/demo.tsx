"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <Card
      id="hero"
      className="w-full bg-black/[0.96] relative overflow-hidden border-none rounded-none w-full min-h-[70vh]"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full md:flex-row flex-col max-w-7xl mx-auto items-center">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <div className="status-badge">
            <span className="status-dot"></span>
            Aether Automation Active
          </div>
          <h1 className="hero-main-title">
            Autonomous <br />
            <span className="gradient-text">Systems</span>
          </h1>
          <p className="hero-description max-w-lg">
            The next generation of human-machine intelligence. We orchestrate AI
            agents to create seamless, automated business systems.
          </p>
          <div
            className="hero-actions"
            style={{ display: "flex", gap: "1rem" }}
          >
            <a
              href="#work"
              className="btn btn-primary btn-lg"
              style={{ textDecoration: "none" }}
            >
              View Frameworks
            </a>
            <a
              href="#about"
              className="btn btn-outline btn-lg"
              style={{ textDecoration: "none" }}
            >
              Our Technology
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative w-full h-[300px] md:h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
