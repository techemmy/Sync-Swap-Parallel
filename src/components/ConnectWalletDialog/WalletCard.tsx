interface Props {
  name: string;
  logoSrc: string;
}

export default function WalletCard({ name, logoSrc }: Props) {
  return (
    <article className="transition-colors relative overflow-clip bg-accent flex items-center px-4 py-2 border border-transparent hover:border-primary cursor-pointer rounded-lg">
      <div className="bg-white w-10 h-9 shadow rounded-lg grid place-items-center">
        <img className="w-6 h-6" src={logoSrc} alt={`${name} logo`} />
      </div>
      <p className="w-full text-center z-10 font-semibold text-sm text-primary-foreground">
        {name}
      </p>
      <img
        className="w-16 h-16 absolute right-0 z-0 opacity-15"
        src={logoSrc}
        alt={`${name} logo`}
      />
    </article>
  );
}
