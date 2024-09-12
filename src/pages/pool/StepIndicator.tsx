export default function StepIndicator({
  step = 1,
  text,
}: {
  step: number;
  text: string;
}) {
  return (
    <div className="flex gap-x-2 items-center text-sm">
      <span className="flex justify-center items-center bg-primary text-white w-6 h-6 p-1 rounded-full">
        {step}
      </span>
      <p className="font-medium">{text ? text : step}</p>
    </div>
  );
}
