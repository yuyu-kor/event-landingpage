import { useLanguageStore } from "../stores/useLanguageStore";

const LanguageSwitcher = () => {
  console.log("🌐 LanguageSwitcher 렌더됨!");

  const { language, setLanguage } = useLanguageStore();

  const LANGUAGES = [
    { code: "ko", label: "🇰🇷 한국어" },
    { code: "zh", label: "🇨🇳 中文" },
    { code: "ru", label: "🇷🇺 Русский" },
  ];

  return (
    <div className="flex justify-center gap-2 mt-4">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all
            ${
              language === lang.code
                ? "bg-blue-500 text-white shadow"
                : "bg-gray-200 text-gray-700"
            }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
