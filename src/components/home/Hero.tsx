
import { ArrowUpRight, Timer, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import StatCard from "./Cards/StateCard";

const stats = [
  {
    label: "Active Validators",
    value: "1,247",
    icon: <Users size={24} strokeWidth={1.5} />,
    iconColor: "text-[#00C48C]",
  },
  {
    label: "Total Staked",
    value: "2.4B KROWN",
    icon: <TrendingUp size={24} strokeWidth={1.5} />,
    iconColor: "text-[#00C48C]",
  },
  {
    label: "Average Uptime",
    value: "99.4%",
    icon: <ArrowUpRight size={24} strokeWidth={1.5} />,
    iconColor: "text-[#00C48C]",
  },
  {
    label: "Unbonding",
    value: "21 days",
    icon: <Timer size={24} strokeWidth={1.5} />,
    iconColor: "text-[#00C48C]",
  },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-[80px] sm:pt-[100px] px-4 sm:px-6">

      {/* Title */}
      <h1 className="font-grotesk text-white font-medium text-[36px] sm:text-[48px] lg:text-[60px] leading-tight lg:leading-[77.4px] tracking-[-0.02em] max-w-[1029px]">
        Krown Validator Onboarding &{" "}
        <span className="text-[#00C48C]">Management Platform</span>
      </h1>

      {/* Subtitle */}
      <p className="font-vietnam mt-6 font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] lg:leading-[30px] tracking-[-0.04em] text-[#AAB3D0] max-w-[970px]">
        Run validators your way - fully self-hosted, managed by Krown, or pooled through shared nodes.
        <br className="hidden sm:block" />
        Built for operators of every size and expertise level.
      </p>

      {/* Button */}
      <Link href="/dashboard" className="mt-[40px] sm:mt-[52px]">
        <div
          className="p-[0.5px] rounded-[8px]"
          style={{
            background: "linear-gradient(87.79deg, rgba(255,255,255,0.1) 0.71%, rgba(242,240,240,0.6) 86.4%)",
          }}
        >
          <button className="font-grotesk flex items-center justify-center w-[167px] h-[40px] px-[18px] py-2 rounded-[8px] bg-[#0E966F] shadow-[0px_0px_12px_0px_#FFFFFF40_inset] hover:opacity-90 transition-opacity duration-300 ease-out cursor-pointer font-medium text-base text-white">
            Start Validating
          </button>
        </div>
      </Link>

      {/* Sub text */}
      <p className="font-vietnam mt-3 text-sm text-[#AAB3D0]">
        No lock-in. No hidden fees. Fully on-chain rewards.
      </p>

      {/* Stats */}
      <div className="mt-[60px] sm:mt-[80px] w-full max-w-[1300px] flex flex-wrap justify-center gap-4 px-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

    </section>
  );
}