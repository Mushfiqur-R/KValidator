// components/home/WhyKrown.tsx
import FeatureCard from "./Cards/FeatureCard";

const features = [
  "Transparent On-Chain Rewards",
  "High Network Performance",
  "Flexible Validator Model",
  "Secure Key Management (HSM for Managed)",
  "Multi-Node Support Per Wallet",
  "Clear Fee Structure",
];

export default function WhyKrown() {
  return (
    <section className="flex flex-col items-center px-4 py-20 gap-10">

      {/* Heading */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="font-grotesk font-medium text-[40px] leading-tight tracking-[-0.02em] text-white">
          Why Validate On Krown
        </h2>
        <p
          className="font-vietnam font-medium text-[18px] leading-[30px] text-[#AAB3D0]"
          style={{ letterSpacing: "-0.04em" }}
        >
          Built for operators of every size with transparent rewards and a clear fee model
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1240px]">
        {features.map((feature) => (
          <FeatureCard key={feature} label={feature} />
        ))}
      </div>

    </section>
  );
}