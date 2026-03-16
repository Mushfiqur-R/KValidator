import Link from "next/link";

export default function Footer() {
  return (
<footer className="w-full border-t border-[#FFFFFF1A] px-6 md:px-[104px] py-10">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
      {/* Top Row */}
      <div className="flex item-start justify-between">

        {/* Logo + tagline */}
        <div className="flex flex-col gap-3">
          <div className="font-grotesk font-bold text-[24px] leading-[24px] tracking-[-0.02em]">
            <span className="text-[#0E966F]">K</span>
            <span className="text-[#F9FFFD]"> Launchpad</span>
          </div>
          <p
            className="font-vietnam font-normal text-[14px] text-[#AAB3D0] max-w-[280px]"
            style={{ lineHeight: "22px", letterSpacing: "-0.15px" }}
          >
            Connecting networks, liquidity, and traders through innovative trading tools.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-end gap-4">
          <span className="font-vietnam font-medium text-[14px] text-white" style={{ lineHeight: "20px" }}>
            Follow us on
          </span>
          <div className="flex items-center gap-3">
            {[
              { label: "Telegram", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.56-.46.7-.94.44l-2.6-1.92-1.26 1.2c-.14.14-.26.26-.52.26l.18-2.6 4.74-4.28c.2-.18-.04-.28-.32-.1L7.46 14.5l-2.52-.78c-.55-.17-.56-.55.12-.82l9.86-3.8c.46-.17.86.1.72.7z" },
              { label: "Discord", path: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" },
              { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
            ].map(({ label, path }) => (
              <Link
                key={label}
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-[8px] hover:opacity-80 transition-opacity"
                style={{ background: "#FFFFFF0D", border: "1px solid #FFFFFF1A" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#AAB3D0">
                  <path d={path} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #FFFFFF1A" }} />

      {/* Bottom Row */}
      <div className="flex justify-center">
        <p
          className="font-vietnam font-normal text-[14px] text-[#AAB3D0]"
          style={{ lineHeight: "20px", letterSpacing: "-0.15px" }}
        >
          © 2025 Krown Launchpad. All rights reserved • Built on the Krown Blockchain
        </p>
      </div>
      </div>
    </footer>
  );
}