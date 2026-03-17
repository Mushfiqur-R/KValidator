

import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="px-4 sm:px-8 lg:px-[104px] py-10">
      <div
        className="relative flex flex-col items-center justify-center text-center w-full max-w-[1232px] mx-auto rounded-[14px] gap-4 sm:gap-5 overflow-hidden py-10 sm:py-12 lg:py-0 lg:h-[246px]"
        style={{
          border: "1px solid #FFFFFF1A",
          background: "linear-gradient(135deg, #1d1f2e 0%, #181a25 100%)",
        }}
      >
        {/* Ellipse */}
        <div className="pointer-events-none absolute w-[847px] h-[281px] -top-[128px] -left-[303px] rounded-full bg-white blur-[122px] mix-blend-overlay" />

        {/* Badge */}
        <div
          className="relative z-10 flex items-center px-[10px] py-[6px] rounded-[60px]"
          style={{ background: "#FFFFFF0D", border: "1px solid #FFFFFF21" }}
        >
          <span className="font-vietnam font-medium text-[12px] text-white" style={{ lineHeight: "16px" }}>
            Validator onboarding in minutes
          </span>
        </div>

        {/* Title */}
        <h2
          className="relative z-10 font-grotesk font-medium text-[26px] sm:text-[34px] lg:text-[42px] text-[#DEFFF5] w-full max-w-[714px] px-4 lg:px-0"
          style={{ lineHeight: "1.15", letterSpacing: "-0.02em" }}
        >
          Ready to become a Krown validator?
        </h2>

        {/* Subtitle */}
        <p
          className="relative z-10 font-vietnam font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#AAB3D0] w-full max-w-[769px] px-4 lg:px-0"
          style={{ lineHeight: "30px", letterSpacing: "-0.04em" }}
        >
          Join a secure, high-performance blockchain network and start earning staking rewards today.
        </p>

        {/* Button */}
        <div className="relative z-10">
          <Link href="/dashboard">
            <div
              className="p-[0.5px] rounded-[8px]"
              style={{
                background: "linear-gradient(87.79deg, rgba(255,255,255,0.1) 0.71%, rgba(242,240,240,0.6) 86.4%)",
              }}
            >
              <button className="font-vietnam flex items-center justify-center w-[167px] h-[40px] px-[18px] py-2 rounded-[8px] bg-[#0E966F] shadow-[0px_0px_12px_0px_#FFFFFF40_inset] hover:opacity-90 transition-opacity duration-300 ease-out cursor-pointer font-medium text-[16px] text-white">
                Start Validating
              </button>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}