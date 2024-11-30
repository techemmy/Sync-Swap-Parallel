import { TbLoader3 } from "react-icons/tb";

export default function FullPageLoader() {
  return (
    <div className="bg-page h-screen grid place-items-center">
      <TbLoader3 className="motion-safe:animate-custom-fast" fontSize={40} />
    </div>
  );
}
