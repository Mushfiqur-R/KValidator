
import Link from "next/link"
import { ConnectButton } from "../common/Connect-Button"


export default function Navbar() {
  return (
    <div className="w-full flex justify-center item-center mt-3">
    <nav className="w-[1300px] px-6 py-3 flex items-center justify-between">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1">
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "24px",
            letterSpacing: "-2%",
            color: "#0E966F",
          }}
        >
          K
        </span>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#F9FFFD",
          }}
        >
          Launchpad
        </span>
      </Link>

      {/* Connect Button */}
      <ConnectButton />

    </nav>
    </div>
  )
}