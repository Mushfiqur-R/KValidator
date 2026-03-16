
import { GreenCheckIcon } from "@/components/common/Icons/CheckIcon";

interface FeatureCardProps {
  label: string;
}

export default function FeatureCard({ label }: FeatureCardProps) {
  return (
    <div
      className="flex items-center gap-4 w-full max-w-[397px] px-5 py-4 rounded-[12px]"
      style={{
        background: "#FFFFFF0D",
        border: "1px solid #FFFFFF1A",
      }}
    >
      <div
        className="flex items-center justify-center w-9 h-9 rounded-[8px] shrink-0"
        style={{
          background: "#00C48C0D",
          border: "1px solid #00C48C33",
        }}
      >
            
        <GreenCheckIcon size={18} />
      </div>
      <span
        className="font-vietnam font-medium text-[15px] text-white"
        style={{ lineHeight: "22px", letterSpacing: "-0.2px" }}
      >
        {label}
      </span>
    </div>
  );
}