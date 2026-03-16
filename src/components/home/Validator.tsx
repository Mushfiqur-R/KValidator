import { ShieldIcon } from "@/components/common/Icons/ShieldIcon";
import { UserIcon } from "@/components/common/Icons/UserIcon";
import VCard from "./Cards/VCard";

const validators = [
  {
    icon: <ShieldIcon size={24} stroke="#F4CD4D" />,
    iconBg: "#F4CD4D0D",
    iconShadow: "0px 0px 12px 0px #F4CD4D40 inset",
    title: "Self-Hosted",
    stats: [
      { label: "Min Stake", value: "100,000,000 KROWN" },
      { label: "Platform Fee", value: "0%" },
      { label: "Infrastructure", value: "Your Own" },
      { label: "Control Level", value: "Full" },
      { label: "Est. APR", value: "12–13%", highlight: true },
    ],
    description: "Deploy and operate your own validator node with full control over infrastructure and keys.",
    ctaLabel: "View Details",
    ctaHref: "/self-hosted",
  },
  {
    icon: <ShieldIcon size={24} stroke="#00C48C" />,
    iconBg: "#00C48C0D",
    iconShadow: "0px 0px 12px 0px #00C48C40 inset",
    title: "Managed Validator",
    stats: [
      { label: "Min Stake", value: "100,000,000 KROWN" },
      { label: "Platform Fee", value: "10% of rewards" },
      { label: "Infrastructure", value: "Krown Managed" },
      { label: "Control Level", value: "Medium" },
      { label: "Est. APR", value: "11–12%", highlight: true },
    ],
    description: "Krown manages uptime, monitoring, and updates. You focus on staking and governance.",
    ctaLabel: "View Details",
    ctaHref: "/managed",
  },
  {
    icon: <UserIcon size={24} stroke="#966DFF" />,
    iconBg: "#966DFF0D",
    iconShadow: "0px 0px 12px 0px #966DFF40 inset",
    title: "Shared Node",
    stats: [
      { label: "Min Stake", value: "10,000 KROWN" },
      { label: "Platform Fee", value: "10%" },
      { label: "Manager Fee", value: "2–5%" },
      { label: "Infrastructure", value: "Shared" },
      { label: "Est. APR", value: "11–12%", highlight: true },
    ],
    description: "Participate in validation by pooling stake with others and earning proportionally.",
    ctaLabel: "Explore Nodes",
    ctaHref: "/shared",
  },
];

export default function Validator() {
  return (
    <section className="flex flex-col items-center px-4 py-20 gap-10">

      {/* Heading — center */}
      <div className="flex flex-col items-center gap-4 max-w-[700px] text-center">
        <h2 className="font-grotesk font-medium text-[40px] leading-tight tracking-[-0.02em] text-white">
          Choose Your Validator Models
        </h2>
        <p
          className="font-vietnam font-medium text-[18px] leading-[30px] text-[#AAB3D0]"
          style={{ letterSpacing: "-0.04em" }}
        >
          Fully self-hosted, professionally managed, or pooled through shared
          nodes and pick the approach that fits your goals.
        </p>
      </div>

      {/* Cards — left aligned content */}
      <div className="flex flex-wrap items-start justify-center gap-5">
        {validators.map((v) => (
          <VCard key={v.title} {...v} />
        ))}
      </div>

    </section>
  );
}