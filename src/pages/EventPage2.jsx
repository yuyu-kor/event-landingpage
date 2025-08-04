import { Link, useLocation } from "react-router-dom";
import EventForm from "../components/EventForm";
import EventSwitcherSegment from "../components/EventSwitcherSegment";
import { event2Texts } from "../i18n/texts2";
import { useLanguageStore } from "../stores/useLanguageStore";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function EventPage2() {
  const location = useLocation();
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="w-full max-w-[480px] mx-auto bg-gray-50 min-h-screen text-gray-800">
      {/* 네비게이션 */}

      <header className="bg-white shadow-sm">
        {/* relative + width 제한 */}
        <div className="relative w-full max-w-[440px] px-4 py-8 mx-auto text-center">
          <EventSwitcherSegment />
          <LanguageSwitcher /> {/* 이제 440px 박스 기준 우측 상단에 고정 */}
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            {event2Texts.header.title[language]}
          </h1>
          <p className="mt-2 text-gray-600">
            {event2Texts.header.subtitle[language]}
          </p>
        </div>
      </header>

      {/* 배너 */}
      <main>
        <section className="relative h-[400px]">
          <img
            src="/assets/event2_doctor.png"
            alt="병원사진"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center gap-4 px-6">
            <p className="text-xl font-bold">
              {event2Texts.banner.quote[language]}
            </p>
            {event2Texts.banner.lines.map((block, idx) => (
              <p key={idx}>
                {block[language].split("\n").map((line, lineIdx) => (
                  <span key={lineIdx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            ))}
          </div>
        </section>

        {/* Before & After */}
        <section className="flex flex-col items-center gap-4 mt-10 px-4">
          <div className="bg-green-500 text-white rounded-full px-8 py-2 font-medium text-sm">
            {event2Texts.beforeAfter.badge[language]}
          </div>
          <img
            src="/assets/event2_diff.png"
            alt="두피before&after"
            className="rounded-lg shadow-md"
          />
          <div className="text-center space-y-1 mt-7">
            <p className="text-xl font-bold text-green-800">
              {event2Texts.beforeAfter.highlights.title[language]}
            </p>
            <p className="text-green-600 text-lg font-bold">
              {event2Texts.beforeAfter.highlights.subtitle[language]}
            </p>
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {event2Texts.beforeAfter.highlights.description[language]}
            </p>
            <img
              src="/assets/event2_diff2.png"
              alt="두피before&after"
              className="mt-9 rounded-lg shadow-sm"
            />
          </div>
        </section>

        {/* 신청 폼 */}
        <section className="flex flex-col gap-4 items-center justify-center mt-14 px-4">
          <div className="inline-block bg-green-600 rounded-full px-8 py-2 text-white text-lg font-bold shadow-sm">
            {event2Texts.formSection.title[language]}
          </div>
          <div className="text-center border-2 border-green-500 rounded-lg px-4 py-4 text-sm text-gray-700 leading-relaxed bg-white whitespace-pre-line">
            {event2Texts.formSection.description[language]}
          </div>
          <EventForm />
        </section>

        {/* 오시는 길 */}
        <section className="mt-14 px-4 pb-12 text-center space-y-4">
          <img
            src="/assets/event2_detail.png"
            alt="오시는 길"
            className="w-full max-w-md mx-auto rounded-md shadow-md"
          />
        </section>
      </main>
    </div>
  );
}
