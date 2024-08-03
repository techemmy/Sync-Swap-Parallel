import TokenItem, { type TokenItemProps } from "./TokenItem";

interface TokenItemsProps {
  tokens: TokenItemProps[];
}
export default function TokenItems({ tokens }: TokenItemsProps) {
  return (
    <div className="flex flex-col items-center overflow-y-scroll space-y-2 px-3 pb-3">
      {tokens.map((token) => (
        <TokenItem
          key={token.symbol + token.name}
          name={token.name}
          symbol={token.symbol}
          logo={token.logo}
        />
      ))}
    </div>
  );
}
