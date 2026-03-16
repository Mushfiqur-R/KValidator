
import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import Validator from "@/components/home/Validator";
import HowItWorks from "@/components/home/HIWork";
import WhyCrown from "@/components/home/WhyCrown";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/home/Footer";


export default function Home() {
  return (
  <main className="relative w-full min-h-screen bg-[#0C0E19] overflow-hidden justify-center">

      <div className="blob blob-green" />

      <div className="blob blob-blue" />
  {/* <ClockIcon/>
 <StatCard
  label="Unbonding"
  value="21 days"
  icon={<Timer size={24} strokeWidth={1.5} />}
  iconColor="text-[#00C48C]"
/> */}
<Navbar/>
<Hero/>
<Validator/>
<HowItWorks/>
<WhyCrown/>
<FAQ/>
<CTABanner/>
<Footer/>
    </main>
)}
