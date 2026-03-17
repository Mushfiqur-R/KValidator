interface StatCardProps {
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  value: string;
}

export default function StatCard({ icon, iconColor, label, value }: StatCardProps) {
  return (
    <div
      className="relative flex flex-col p-6 w-full sm:w-[calc(50%-8px)] lg:w-[292px] h-[133px] overflow-hidden"
      style={{
        background: "#FFFFFF0D",
        border: "0.97px solid #FFFFFF1A",
        borderRadius: "14px",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Ellipse glow */}
      <div className="absolute w-[162px] h-[125px] -left-[70px] -top-[72px] bg-white mix-blend-overlay blur-[56px] rotate-[30deg]" />

      {/* Content */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="flex flex-col gap-6">
          <span className="font-medium text-[18px] leading-[23px] text-[#AAB3D0]">
            {label}
          </span>
          <span
            className="font-medium text-[32px] text-white"
            style={{ lineHeight: "30.95px" }} 
          >
            {value}
          </span>
        </div>

        <div className={`w-8 h-8 ${iconColor}`}>{icon}</div> 
      </div>
    </div>
  );
}
