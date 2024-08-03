interface TokenHighlightProps {
  name: string;
  logoSrc: string;
}

export default function TokenHighlight({ name, logoSrc }: TokenHighlightProps) {
  return (
    <li className="flex items-center gap-x-1 text-sm font-medium py-1 px-2 hover:bg-accent cursor-pointer rounded-xl">
      <img
        className="w-5 h-5 rounded-full"
        src={logoSrc}
        alt={`${name} logo`}
      />
      {name}
    </li>
  );
}
