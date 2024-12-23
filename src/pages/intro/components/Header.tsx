export default function Header() {
  return (
    <header className="h-screen lg:h-screen pt-20 md:pt-44 flex flex-col-reverse justify-end items-center md:block">
      <article className="relative z-10 md:ml-[12.50%] flex flex-col gap-y-8 font-semibold text-left px-5 md:px-0">
        <h1 className="mx-auto md:mx-0 text-primary-foreground text-center md:text-left text-[40px] max-w-[500px] xl:w-[700px] leading-[1.2] font-Public">
          Seamless and Efficient Trading on
          <span className="bg-zKTextGradient text-transparent bg-clip-text">
            {" "}
            zk Rollups
          </span>
        </h1>
        <p className="text-center md:text-left md:w-1/2 text-card-foreground font-medium">
          SyncSwap brings more people easy-to-use and low-cost DeFi with
          complete Ethereum security powered by zero-knowledge technology.
        </p>
      </article>
      <img
        className="md:absolute z-0 md:top-32 lg:top-14"
        src="/images/syncswap-cover-art-min.png"
        alt="Sync Swap Cover art"
      />
    </header>
  );
}
