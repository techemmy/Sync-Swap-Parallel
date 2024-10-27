import { ISetSettingsView } from "@/types";
import { MdOutlineArrowBack } from "react-icons/md";

interface Props {
  setSettingsView: ISetSettingsView;
  gridColumns: number;
}

export default function LanguageView({
  setSettingsView,
  gridColumns = 2,
}: Props) {
  const languages = [
    "English",
    "Deutsch",
    "Español",
    "français",
    "русский",
    "Türkçe",
    "Tiếng Việt",
    "Polski",
    "Indonesia",
    "العربية",
    "زبان فارسی",
    "한국어",
    "日本語",
    "简体中文",
    "繁體中文",
  ];
  const activeLang = languages[0];
  return (
    <>
      <article className="flex justify-between mt-2 items-center">
        <MdOutlineArrowBack
          onClick={setSettingsView.setDefault}
          fontSize={40}
          className="p-3 bg-accent cursor-pointer rounded-full active:scale-75 transition-transform"
        />
        <h3 className="font-medium text-sm mr-2">Language</h3>
      </article>
      <ul className={`grid w-full gap-3 grid-cols-${gridColumns} mt-4`}>
        {languages.map((lang) => (
          <li
            key={lang}
            className={`${lang === activeLang && "text-primary-foreground shadow-md border border-primary-foreground"} text-card-foreground font-medium active:scale-90 transition-transform text-sm p-2 hover:bg-accent rounded-lg cursor-pointer`}
          >
            {lang}
          </li>
        ))}
      </ul>
    </>
  );
}
