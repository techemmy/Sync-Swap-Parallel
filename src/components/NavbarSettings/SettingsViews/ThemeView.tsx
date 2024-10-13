import { MdOutlineArrowBack } from "react-icons/md";
import type { ISetSettingsView } from "@/types/Navbar";
import { ThemesEnum } from "@/enums";
import useDataTheme from "@/hooks/useDataTheme";

interface Props {
  setSettingsView: ISetSettingsView;
  gridColumns: number;
}

export default function ThemeView({ setSettingsView, gridColumns = 2 }: Props) {
  const [activeTheme, handleSetTheme] = useDataTheme();
  return (
    <>
      <article className="flex justify-between mt-2 items-center">
        <MdOutlineArrowBack
          onClick={setSettingsView.setDefault}
          fontSize={40}
          className="p-3 bg-accent cursor-pointer rounded-full active:scale-75 transition-transform"
        />
        <h3 className="font-medium text-sm mr-2">Theme</h3>
      </article>
      <ul className={`grid w-full gap-3 grid-cols-${gridColumns} mt-4`}>
        {(Object.keys(ThemesEnum) as Array<keyof typeof ThemesEnum>).map(
          (theme) => (
            <li
              onClick={() => handleSetTheme(ThemesEnum[theme])}
              key={theme}
              className={`${ThemesEnum[theme] === activeTheme ? "text-primary shadow-md border-primary" : "text-card-foreground border-transparent"} border font-medium active:scale-90 transition-transform text-sm p-2 text-center hover:bg-accent rounded-lg cursor-pointer`}
            >
              {theme}
            </li>
          ),
        )}
      </ul>
    </>
  );
}
