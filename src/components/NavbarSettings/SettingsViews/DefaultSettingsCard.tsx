import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  icons: ReactNode;
  text: string;
}

export default function DefaultSettingsCard({ onClick, icons, text }: Props) {
  return (
    <section
      onClick={onClick}
      className="active:scale-95 transition-all bg-accent px-4 py-[14px] min-w-40 flex flex-col justify-between gap-4 rounded-xl cursor-pointer border-[.5px] border-card hover:border-primary"
    >
      <div className="flex justify-between text-primary">{icons}</div>
      <h3 className="font-medium text-sm text-primary-foreground">{text}</h3>
    </section>
  );
}
