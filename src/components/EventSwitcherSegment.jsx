import { Link, useLocation } from "react-router-dom";

function EventSwitcherToggle() {
  const location = useLocation();

  const tabs = [
    { label: "스마일라식", path: "/" },
    { label: "헤어라인교정", path: "/EventPage2" },
    { label: "스킨케어", path: "/EventPage3" },
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
