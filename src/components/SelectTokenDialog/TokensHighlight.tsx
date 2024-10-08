import type { ReactElement } from "react";

export default function TokensHighlight({
  children,
}: {
  children: ReactElement[];
}) {
  return <ul className="flex flex-wrap justify-between mb-1">{children}</ul>;
}
