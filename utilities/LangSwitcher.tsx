import { useRouter } from "next/router";

const languageNames: any = {
  "en-US": "English",
  fr: "Français",
  "nl-NL": "Nederlands",
};

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className="flex justify-center items-center">
      <select
        className="p-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        value={locale}
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label="Select language"
      >
        {locales?.map((lang) => (
          <option className="text-black" key={lang} value={lang}>
            {languageNames[lang]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
