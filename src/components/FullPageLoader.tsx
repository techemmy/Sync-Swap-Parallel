import { TbLoader3 } from "react-icons/tb";

export default function FullPageLoader() {
  return (
    <div className="bg-popover h-screen grid place-items-center">
      <TbLoader3
        className="motion-safe:animate-custom-fast text-popover"
        fontSize={40}
      />
    </div>
  );
}
