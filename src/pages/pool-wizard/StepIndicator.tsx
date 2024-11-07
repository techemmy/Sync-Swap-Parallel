import { Button } from "@/components/ui/button";

export default function StepIndicator({
  step = 1,
  text,
}: {
  step: number;
  text: string;
}) {
  return (
    <div className="flex gap-x-2 items-center text-sm">
      <Button
        className="flex bg-secondary justify-center items-center w-6 h-6 p-1 rounded-full"
      >
        {step}
      </Button>
      <p className="font-medium text-primary-foreground">
        {text ? text : step}
      </p>
    </div>
  );
}
