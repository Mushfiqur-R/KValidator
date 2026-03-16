import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="px-4 py-10 flex justify-center">
      <div
        className="relative flex flex-col items-center justify-center text-center w-full max-w-[1232px] h-[246px] rounded-[14px] gap-5 overflow-hidden"
        style={{
          border: "1px solid #FFFFFF1A",
          background: "linear-gradient(135deg, #1d1f2e 0%, #181a25 100%)",
        }}
      >
      <div className="pointer-events-none absolute w-[900px] h-[281px] -top-[128px] -left-[303px] rounded-full bg-white blur-[120px] mix-blend-overlay" />
        {/* Badge */}
        <div
          className="flex items-center px-[10px] py-[6px] rounded-[60px]"
          style={{
            background: "#FFFFFF0D",
            border: "1px solid #FFFFFF21",
          }}
        >
          <span
            className="font-vietnam font-medium text-[12px] text-white"
            style={{ lineHeight: "16px" }}
          >
            Validator onboarding in minutes
          </span>
        </div>

        {/* Title */}
        <h2
          className="font-grotesk font-medium text-[42px] text-[#DEFFF5] max-w-[714px]"
          style={{ lineHeight: "44px", letterSpacing: "-0.02em" }}
        >
          Ready to become a Krown validator?
        </h2>

        {/* Subtitle */}
        <p
          className="font-vietnam font-medium text-[18px] text-[#AAB3D0] max-w-[769px]"
          style={{ lineHeight: "30px", letterSpacing: "-0.04em" }}
        >
          Join a secure, high-performance blockchain network and start earning staking rewards today.
        </p>

        {/* Button */}
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
    </section>
  );
}