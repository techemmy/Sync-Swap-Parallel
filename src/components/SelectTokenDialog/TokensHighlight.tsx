import type { ReactNode } from "react";

export default function TokensHighlight({
  children,
}: {
  children: ReactNode[];
}) {
  return <ul className="flex flex-wrap justify-between mb-1">{children}</ul>;
}
