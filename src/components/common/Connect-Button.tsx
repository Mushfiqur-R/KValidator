
"use client"

export function ConnectButton() {
  const handleConnect = () => {
    console.log("connect clicked")
  }

  return (
    <div
      className="p-[0.5px] rounded-[8px] cursor-pointer"
      style={{
        background: "linear-gradient(87.79deg, rgba(255,255,255,0.1) 0.71%, rgba(242,240,240,0.6) 86.4%)",
      }}
    >
      <button
        onClick={handleConnect}
        className="flex items-center justify-center rounded-[8px] hover:opacity-90 transition-opacity duration-300 ease-out cursor-pointer"
        style={{
          width: "115px",
          height: "40px",
          padding: "8px 18px",
          background: "#0E966F",
          boxShadow: "0px 0px 12px 0px #FFFFFF40 inset",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <span className="font-medium text-base text-white">Connect</span>
      </button>
    </div>
  )
}