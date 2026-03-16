import HIWCard from "./Cards/HIWCard";

const steps = [
  {
    step: "01",
    title: "Connect Your Wallet",
    description: "Connect using WalletConnect or MetaMask to verify your KROWN balance and eligibility tier instantly.",
    features: ["Real-time balance check", "Signature verification"],
  },
  {
    step: "02",
    title: "Submit Validator Profile",
    description: "Complete a short validator form, including name, country, logo, and infrastructure type for network transparency.",
    features: ["Identity & branding info", "Infrastructure declaration"],
  },
  {
    step: "03",
    title: "Get Approved",
    description: "The Krown admin team reviews your validator application within 24–48 hours.",
    features: ["Compliance verification", "Branding validation"],
  },
  {
    step: "04",
    title: "Stake & Go Live",
    description: "Stake the required KROWN and activate your validator node.",
    features: ["21-day unbonding period", "Start earning next epoch"],
  },
];

export default function HowItWorks() {
  return (
    <section className="flex flex-col items-center px-4 py-20 gap-10">

      {/* Heading */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="font-grotesk font-medium text-[40px] leading-tight tracking-[-0.02em] text-white">
          How it Works
        </h2>
        <p
          className="font-vietnam font-medium text-[18px] leading-[30px] text-[#AAB3D0]"
          style={{ letterSpacing: "-0.04em" }}
        >
          Start validating on Krown in four simple steps.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap items-start justify-center gap-6">
        {steps.map((s) => (
          <HIWCard key={s.step} {...s} />
        ))}
      </div>

      {/* CTA Button */}
      <div
        className="p-[0.5px] rounded-[8px]"
        style={{
          background: "linear-gradient(87.79deg, rgba(255,255,255,0.1) 0.71%, rgba(242,240,240,0.6) 86.4%)",
        }}
      >
        <button className="font-vietnam flex items-center justify-center px-[18px] py-2 h-[40px] rounded-[8px] bg-[#0E966F] shadow-[0px_0px_12px_0px_#FFFFFF40_inset] hover:opacity-90 transition-opacity duration-300 ease-out cursor-pointer font-medium text-base text-white">
          Become a Validator
        </button>
      </div>

    </section>
  );
}