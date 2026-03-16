import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  highlight?: boolean;
}

interface VCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconShadow: string;
  title: string;
  stats: Stat[];
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function VCard({
  icon, iconBg, iconShadow, title, stats, description, ctaLabel, ctaHref,
}: VCardProps) {
  return (
    <div
      className="relative flex flex-col w-full max-w-[397px] p-5 rounded-[14px]  overflow-hidden"
      style={{
        background: "#FFFFFF0D",
        border: "1px solid #FFFFFF1A",
        boxShadow: "0px 2px 8px 0px #0000004D",
      }}
    >
      {/* shadow */}
     <div className="pointer-events-none absolute w-[273px] h-[211px] -top-[105px] -left-[136px] rounded-full bg-white blur-[50px] -rotate-[30deg] mix-blend-overlay" />
      {/* Header: icon + title */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-[12px] shrink-0"
          style={{
            background: iconBg,
            border: "1px solid #FFFFFF1A",
            boxShadow: iconShadow,
          }}
        >
          {icon}
        </div>

        
        {/* <span
          className="font-vietnam font-medium text-[20px] leading-[28px] text-white"
          style={{ letterSpacing: "-0.45px" }}
        >
          {title}
        </span> */}
        <span 
  style={{ fontFamily: 'var(--font-be-vietnam)' }} 
  className="font-medium text-[20px] leading-[28px] text-white"
>
  {title}
</span>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-[14px] mb-5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <span
              className="font-vietnam text-[13px] leading-[20px] text-[#AAB3D0]"
              style={{ letterSpacing: "-0.15px" }}
            >
              {stat.label}
            </span>
            <span
              className={`font-vietnam font-medium text-[13px] leading-[20px] ${
                stat.highlight ? "text-[#00C48C]" : "text-white"
              }`}
              style={{ letterSpacing: "-0.15px" }}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p
        className="font-vietnam font-normal text-[14px] leading-[22.75px] text-[#AAB3D0] mb-5"
        style={{ letterSpacing: "-0.15px" }}
      >
        {description}
      </p>

      {/* Divider + CTA */}
      <div
        className="pt-[14px] flex items-center"
        style={{ borderTop: "1px solid #FFFFFF1A" }}
      >
        <Link
          href={ctaHref}
          className="flex items-center gap-1.5 font-medium text-[14px] leading-[20px] text-[#00C48C] hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.15px" }}
        >
          {ctaLabel}
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}