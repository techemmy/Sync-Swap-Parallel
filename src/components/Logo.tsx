import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <img
      className={cn("w-7 h-7", className)}
      src="/images/syncswap-logo.svg"
      alt="Sync Swap Logo"
    />
  );
}
