export default function Logo({ className = "" }: { className?: string }) {
    return (
        <img className={`w-7 h-7 ${className}`} src="/images/syncswap-logo.svg" alt="Sync Swap Logo" />
    )
}
