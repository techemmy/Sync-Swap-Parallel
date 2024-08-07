export default function Logo({ className = "" }: { className?: string }) {
  className = className ? className : "w-7 h-7";
  return (
    <img
      className={className}
      src="/images/syncswap-logo.svg"
      alt="Sync Swap Logo"
    />
  );
}
