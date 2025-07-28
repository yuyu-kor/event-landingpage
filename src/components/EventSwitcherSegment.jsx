import { useLocation, Link } from "react-router-dom";
import { useLanguageStore } from "../stores/useLanguageStore";
import { texts } from "../i18n/texts";

function EventSwitcherToggle() {
  const location = useLocation();
  const language = useLanguageStore((state) => state.language);
  const t = texts.eventTabs;

  const tabs = [
    { label: t.smile[language], path: "/" },
    { label: t.hairline[language], path: "/EventPage2" },
    { label: t.skincare[language], path: "/EventPage3" },
  ];

  return (
    <div className="flex justify-center py-6">
      <div className="flex bg-gray-100 rounded-full p-1 w-[320px] shadow-inner">
        {tabs.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex-1 text-center py-2 rounded-full transition-all duration-200 ${
              location.pathname === path
                ? "bg-sky-500 text-white shadow"
                : "text-gray-600"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventSwitcherToggle;
