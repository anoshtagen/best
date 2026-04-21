"use client";
import React from "react";
import { Radar, IconContainer } from "../components/ui/radar-effect";
import { HiDocumentText, HiDocumentReport } from "react-icons/hi";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsClipboardDataFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { RiFilePaper2Fill } from "react-icons/ri";

export function RadarEffectDemo() {
  return (
    <div className="radar-wrapper">
      <div className="relative flex h-96 w-full max-w-3xl flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        {/* Row 1 */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="AI Chatbots"
              delay={0.2}
              icon={<HiDocumentText className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              delay={0.4}
              text="Workflow Automation"
              icon={<AiFillDollarCircle className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              text="Data Pipelines"
              delay={0.3}
              icon={<BsClipboardDataFill className="h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>
        {/* Row 2 */}
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="CRM Integration"
              delay={0.5}
              icon={<BiSolidReport className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              text="Lead Generation"
              delay={0.8}
              icon={<HiMiniDocumentArrowUp className="h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              delay={0.6}
              text="API Integrations"
              icon={<HiDocumentReport className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              delay={0.7}
              text="Custom AI Models"
              icon={<RiFilePaper2Fill className="h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </div>
  );
}
