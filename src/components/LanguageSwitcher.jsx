import { useState } from "react";
import { useLanguageStore } from "../stores/useLanguageStore";

const LanguageSwitcher = () => {
  const language = useLanguageStore((s) => s.language);
  const setLanguage = useLanguageStore((s) => s.setLanguage);
  const [open, setOpen] = useState(false);

  const LANGUAGES = [
    { code: "ko", label: "🇰🇷" },
    { code: "zh", label: "🇨🇳" },
    { code: "ru", label: "🇷🇺" },
  ];

  const current = LANGUAGES.find((l) => l.code === language)?.label;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-white border border-gray-300 px-3 py-1 rounded-full shadow text-sm font-medium hover:bg-gray-100"
        >
          {current}
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 ${
                  language === lang.code ? "bg-blue-100 font-bold" : ""
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
