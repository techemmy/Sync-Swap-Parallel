export default function AnimatedGradientCircles() {
  return (
    <>
      <div
        className="absolute z-[-1] opacity-60 -top-[70px] -left-[200px] h-[517px] w-[517px] animate-fade-in-out-15"
        style={{
          background:
            "radial-gradient(285px, rgba(255, 201, 0, 0.25) 0%, rgba(0, 0, 0, 0) 95%)",
        }}
      ></div>
      <div
        className="absolute z-[-1] opacity-60 -top-[100px] left-[130px] h-[591px] w-[591px] animate-fade-in-out-20"
        style={{
          background:
            "radial-gradient(295px, rgba(0, 255, 137, 0.25) 0%, rgba(0, 0, 0, 0) 95%)",
        }}
      ></div>
      <div
        className="absolute z-[-1] opacity-60 -top-[20px] left-0 h-[611px] w-[611px] animate-fade-in-out-10"
        style={{
          background:
            "radial-gradient(305px, rgba(100, 0, 255, 0.22) 0%, rgba(0, 0, 0, 0) 95%)",
        }}
      ></div>
    </>
  );
}
