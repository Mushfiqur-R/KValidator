import { GreenCheckIcon } from "@/components/common/Icons/CheckIcon";


interface HIWCardProps {
  step: string;
  title: string;
  description: string;
  features: string[];
}

// export default function HIWCard({ step, title, description, features }: HIWCardProps) {
//   return (
//     <div
//       className="relative flex flex-col w-full max-w-[295px] p-[18px] rounded-[12.71px] overflow-hidden"
//       style={{
//         background: "#FFFFFF0D",
//         border: "0.91px solid #FFFFFF1A",
//       }}
//     >
//          {/* shadow */}
//      <div className="pointer-events-none absolute w-[273px] h-[211px] -top-[105px] -left-[136px] rounded-full bg-white blur-[50px] -rotate-[30deg] mix-blend-overlay" />
//       {/* Step Number */}
//       <span
//         className="font-grotesk font-medium text-[60px] text-[#DEFFF5] mb-4"
//         style={{ lineHeight: "63.55px", letterSpacing: "-0.65px" }}
//       >
//         {step}
//       </span>

//       {/* Title */}
//       <span
//         className="font-vietnam font-medium text-[16px] text-white mb-2"
//         style={{ lineHeight: "21.79px", letterSpacing: "-0.41px" }}
//       >
//         {title}
//       </span>

//       {/* Description */}
//       <p
//         className="font-vietnam font-normal text-[14px] text-[#AAB3D0] mb-6"
//         style={{ lineHeight: "20.65px", letterSpacing: "-0.14px" }}
//       >
//         {description}
//       </p>

//       {/* Features */}
//       <div className="flex flex-col gap-[18px]">
//         {features.map((feature) => (
//           <div key={feature} className="flex items-center gap-[10px]">
//             <GreenCheckIcon size={14.53} className="shrink-0" />
//             <span
//               className="font-vietnam font-normal text-[14px] text-white"
//               style={{ lineHeight: "17.56px" }}
//             >
//               {feature}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function HIWCard({ step, title, description, features }: HIWCardProps) {
  return (
    <div
      className="relative flex flex-col w-[295px] h-[306px] p-[18px] rounded-[12.71px] overflow-hidden "  
      style={{
        background: "#FFFFFF0D",
        border: "0.91px solid #FFFFFF1A",
      }}
    >

         {/* shadow */}
     <div className="pointer-events-none absolute w-[273px] h-[211px] -top-[105px] -left-[136px] rounded-full bg-white blur-[50px] -rotate-[30deg] mix-blend-overlay" />
      {/* Step Number */}
      <span
        className="font-grotesk font-medium text-[60px] text-[#DEFFF5]"
        style={{ lineHeight: "63.55px", letterSpacing: "-0.65px" }}
      >
        {step}
      </span>

      {/* Title */}
      <span
        className="font-vietnam font-medium text-[16px] text-white mt-4 mb-2"
        style={{ lineHeight: "21.79px", letterSpacing: "-0.41px" }}
      >
        {title}
      </span>

      {/* Description */}
      <p
        className="font-vietnam font-normal text-[14px] text-[#AAB3D0] mb-6"
        style={{ lineHeight: "20.65px", letterSpacing: "-0.14px" }}
      >
        {description}
      </p>

      {/* Features */}
      <div className="flex flex-col gap-[18px] mt-auto"> 
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-[10px]">
            <GreenCheckIcon size={14.53} className="shrink-0" />
            <span
              className="font-vietnam font-normal text-[14px] text-white"
              style={{ lineHeight: "17.56px" }}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}