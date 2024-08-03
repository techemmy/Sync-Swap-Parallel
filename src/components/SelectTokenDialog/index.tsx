import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import Tokens from "@/assets/tokens.json";
import TokenHighlight from "./TokenHighlight";
import TokensHighlight from "./TokensHighlight";
import TokenItems from "./TokenItems";
import { useEffect, useState } from "react";

export default function SelectTokenDialog() {
  const tokens = Object.values(Tokens.data).map(({ name, symbol, logo }) => ({
    name,
    symbol,
    logo,
  }));
  const [filteredTokens, setFilteredTokens] = useState(tokens);
  const [searchTokenInput, setSearchTokenInput] = useState("");

  useEffect(() => {
    if (searchTokenInput.trim() === "") {
      setFilteredTokens(tokens);
      return;
    }

    setFilteredTokens(
      tokens.filter((token) => {
        const name = token.name.toLowerCase(),
          symbol = token.symbol.toLowerCase();
        return (
          name.includes(searchTokenInput.toLowerCase()) ||
          symbol.includes(searchTokenInput.toLowerCase())
        );
      }),
    );
  }, [searchTokenInput]);

  return (
    <DialogContent className="flex flex-col bg-card p-0 sm:max-w-md border-0 h-[90vh] gap-2">
      <DialogHeader className="bg-primary/[0.16] px-5 pt-5 border-0 text-primary-foreground">
        <DialogTitle className="font-medium flex items-center">
          {" "}
          Select a Token{" "}
        </DialogTitle>
        <DialogDescription className="text-sm">
          Select a token for transaction
        </DialogDescription>
        <div className="py-3 grid gap-4 w-full">
          <input
            className="transition-colors p-2 w-full rounded-lg h-9 border border-transparent outline-0 focus:border-primary hover:border-primary text-sm"
            type="text"
            placeholder="Search name or paste address"
            value={searchTokenInput}
            onChange={(e) => setSearchTokenInput(e.target.value)}
          />
          <TokensHighlight>
            <TokenHighlight name="ETH" logoSrc={Tokens.data[1027].logo} />
            <TokenHighlight name="ZK" logoSrc={Tokens.data[24091].logo} />
            <TokenHighlight name="USDC.e" logoSrc={Tokens.data[111].logo} />
            <TokenHighlight name="USDT" logoSrc={Tokens.data[825].logo} />
            <TokenHighlight name="HOLD" logoSrc={Tokens.data[28510].logo} />
          </TokensHighlight>
        </div>
      </DialogHeader>

      <TokenItems tokens={filteredTokens} />
    </DialogContent>
  );
}
