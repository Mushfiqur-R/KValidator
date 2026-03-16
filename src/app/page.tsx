import { ClockIcon } from "@/components/common/Icons/ClockIcon";
import StatCard from "@/components/home/StateCard";

import { Timer } from "lucide-react";

export default function Home() {
  return (
  <main className="relative w-full min-h-screen bg-[#0C0E19] overflow-hidden justify-center">

      <div className="blob blob-green" />

      <div className="blob blob-blue" />
  <ClockIcon/>
 <StatCard
  label="Unbonding"
  value="21 days"
  icon={<Timer size={24} strokeWidth={1.5} />}
  iconColor="text-[#00C48C]"
/>
    </main>
)}
