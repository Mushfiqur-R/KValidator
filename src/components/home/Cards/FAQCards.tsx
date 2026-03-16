// "use client"

// import { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// interface FAQItemProps {
//   question: string;
//   answer: string;
// }

// export default function FAQItem({ question, answer }: FAQItemProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className="w-full rounded-[14px] px-[26px] py-4 cursor-pointer transition-all duration-300"
//       style={{
//         background: "#FFFFFF0D",
//         border: "1px solid #FFFFFF1A",
//       }}
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       {/* Question Row */}
//       <div className="flex items-center justify-between gap-4">
//         <span
//           className="font-vietnam font-medium text-[18px] text-white"
//           style={{ lineHeight: "24px", letterSpacing: "-0.02em" }}
//         >
//           {question}
//         </span>
//         <div className="shrink-0 text-white">
//           {isOpen ? <Minus size={20} /> : <Plus size={20} />}
//         </div>
//       </div>

//       {/* Answer */}
//       {/* {isOpen && ( */}
//       <div
//        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-4" : "max-h-0"}`}
//        >
//                  {/* shadow */}
//      <div className="pointer-events-none absolute w-[273px] h-[211px] -top-[105px] -left-[136px] rounded-full bg-white blur-[50px] -rotate-[30deg] mix-blend-overlay" />
//         <p
//           className="font-vietnam font-normal text-[14px] text-[#AAB3D0] mt-4"
//           style={{ lineHeight: "22px", letterSpacing: "-0.15px" }}
//         >
//           {answer}
//         </p>
//         </div>
   
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full rounded-[14px] px-[26px] py-4 cursor-pointer transition-all duration-300 overflow-hidden"
      style={{
        background: "#FFFFFF0D",
        border: "1px solid #FFFFFF1A",
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Shadow — only visible when open */}
      <div
        className={`pointer-events-none absolute w-[273px] h-[211px] -top-[105px] -left-[136px] rounded-full bg-white blur-[50px] -rotate-[30deg] mix-blend-overlay transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Question Row */}
      <div className="flex items-center justify-between gap-4">
        <span
          className="font-vietnam font-medium text-[18px] text-white"
          style={{ lineHeight: "24px", letterSpacing: "-0.02em" }}
        >
          {question}
        </span>
        <div className="shrink-0 text-white">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        <p
          className="font-vietnam font-normal text-[14px] text-[#AAB3D0]"
          style={{ lineHeight: "22px", letterSpacing: "-0.15px" }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}