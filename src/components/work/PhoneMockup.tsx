import React from "react";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  isPrimary?: boolean;
  className?: string;
  glowColor?: string;
}

export default function PhoneMockup({
  src,
  alt,
  width = 484,
  height = 1024,
  priority = false,
  isPrimary = false,
  className = "",
  glowColor,
}: PhoneMockupProps) {
  // Use the image's genuine aspect ratio for the screen area
  const aspectRatio = `${width} / ${height}`;

  return (
    <div
      style={{ aspectRatio }}
      className={`relative inline-flex flex-col select-none transition-transform duration-300 ${
        isPrimary
          ? "shadow-[0_20px_50px_rgba(0,0,0,0.85)] z-20"
          : "shadow-[0_12px_32px_rgba(0,0,0,0.6)] z-10"
      } ${className}`}
    >
      {/* Outer Phone Bezel */}
      <div
        className={`relative w-full h-full rounded-[28px] sm:rounded-[34px] xl:rounded-[38px] p-1.5 sm:p-2 bg-[#13131D] border ${
          isPrimary ? "border-[#3A3A4F]" : "border-[#222232]"
        } flex flex-col`}
      >
        {/* Inner Screen Area - 100% visible, no fake notch overlays */}
        <div className="relative w-full h-full overflow-hidden rounded-[22px] sm:rounded-[27px] xl:rounded-[31px] bg-[#0A0A10]">
          {/* Genuine App Screenshot */}
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 220px, 320px"
            className="object-contain object-center"
          />

          {/* Subtle Glare Overlay (Non-intrusive) */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
