import BottomForm from "../components/BottomForm";
import TableBox from "../components/TableBox";
import { useLocation } from "react-router-dom";
import EventSwitcherSegment from "../components/EventSwitcherSegment";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { texts } from "../i18n/texts";
import { useLanguageStore } from "../stores/useLanguageStore";

function HomePage() {
  const location = useLocation();
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="w-full max-w-[480px] mx-auto bg-gray-50 min-h-screen text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="w-full max-w-[440px] px-4 py-8 mx-auto text-center">
          <EventSwitcherSegment />
          <LanguageSwitcher />

          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            {texts.title[language]}
          </h1>
          <p className="mt-2 text-gray-600">{texts.subtitle[language]}</p>
        </div>
      </header>

      <main className="w-full max-w-[440px] px-4 py-12 space-y-12 mx-auto">
        <section className="flex flex-col sm:flex-row justify-between gap-4">
          {[texts.highlight1[language], texts.highlight2[language]].map(
            (label, idx) => (
              <div
                key={idx}
                className="flex-1 bg-white rounded-lg shadow p-4 text-center"
              >
                <p className="text-base font-semibold text-gray-700">{label}</p>
              </div>
            )
          )}
        </section>

        <section className="relative w-full overflow-hidden rounded-lg shadow">
          <img
            src="/assets/자이스수술.gif"
            alt="자이스 스마일 프로 수술 영상상"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {texts.recommendTitle[language]}
          </h2>
          <ul className="grid grid-cols-2 gap-3">
            {texts.recommendList[language].map((text, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 bg-white rounded-lg shadow p-3"
              >
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <TableBox />

        <section className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
            {texts.videoCompareTitle[language]}
          </h2>
          <div className="flex gap-3">
            {[
              {
                label: texts.beforeLabel[language],
                src: "/assets/before1.mp4",
                color: "text-gray-800",
              },
              {
                label: texts.afterLabel[language],
                src: "/assets/after1.mp4",
                color: "text-red-500",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex-1 border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">
                  <span className={`font-semibold ${item.color}`}>
                    {item.label}
                  </span>
                </div>
                <video
                  className="w-full h-36 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-lg p-4 relative">
          <div className="absolute top-2 right-2 bg-red-100 text-red-600 font-semibold px-2 py-1 rounded-full text-xs">
            HOT!
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {texts.featuresTitle[language]}
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {texts.featureList.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <img
                  src={item.icon}
                  alt={item.title[language]}
                  className="w-14 h-14 mt-1"
                />
                <div>
                  <div className="text-gray-800 text-sm font-semibold">
                    {item.title[language]}
                  </div>
                  <div className="text-gray-600 text-xs mt-1 leading-snug">
                    {item.subtitle[language]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <button className="w-full py-3 bg-blue-400 text-white font-bold rounded-lg shadow hover:bg-blue-500 transition text-base">
            {texts.ctaButton[language]}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-[180px]">
            {texts.benefitList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-3 text-center"
              >
                <img
                  src={item.icon}
                  alt={item.title[language]}
                  className="w-6 h-6 mx-auto mb-1"
                />
                <p className="font-semibold text-gray-800 text-sm">
                  {item.title[language]}
                </p>
                {item.subtitle?.[language] && (
                  <span className="text-pink-500 text-xs">
                    {item.subtitle[language]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomForm />
    </div>
  );
}

export default HomePage;
