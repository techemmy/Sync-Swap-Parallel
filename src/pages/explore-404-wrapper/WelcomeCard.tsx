import { Card, CardContent } from "@/components/ui/card";

export default function WelcomeCard() {
  return (
    <Card>
      <CardContent className="p-7 relative">
        <h2 className="text-primary mb-2 text-lg">
          Welcome to SyncSwap 404 Wrapper
        </h2>
        <p className="text-card-foreground max-w-[60%] text-sm">
          The 404 Wrapper bridges the gap between the world of NFTs and fungible
          tokens. Get started by wrapping your NFTs into 404 tokens today.
        </p>
        <div className="absolute opacity-50 right-[30px] bottom-[15px]">
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            stroke="none"
            fill="#5155a6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 16.757a3.026 3.026 0 001.653 2.698l8 4a3 3 0 002.684 0l8-4A3 3 0 0023 16.77V7.23a3.026 3.026 0 00-1.665-2.686L13.337.546a3 3 0 00-2.684 0l-8 4A3.026 3.026 0 001 7.243v9.514zm20 .013a1 1 0 01-.555.895h-.002L13 21.388v-9.769l8-4v9.152zM19.77 5.998l-7.327-3.664a1 1 0 00-.896 0L9.226 3.495 17 7.382l2.77-1.384zM6.99 4.613L4.226 5.995 12 9.882 14.764 8.5 6.99 4.613zM3 7.618l8 4v9.774l-7.45-3.725h-.001a1 1 0 01-.549-.9V7.618z"
            ></path>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
