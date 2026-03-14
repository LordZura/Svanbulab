import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("geo") ? "geo" : "en";

  const switchLanguage = () => {
    i18n.changeLanguage(current === "en" ? "geo" : "en");
  };

  return (
    <button
      type="button"
      onClick={switchLanguage}
      className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
    >
      {current === "en" ? "GE" : "EN"}
    </button>
  );
}