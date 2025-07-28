import React from "react";
import EventSwitcherSegment from "../components/EventSwitcherSegment";
import { Carousel } from "react-responsive-carousel";
import { useLanguageStore } from "../stores/useLanguageStore";
import { event3Texts } from "../i18n/texts3";

function EventPage3() {
  const language = useLanguageStore((state) => state.language);
  const t = event3Texts;

  return (
    <div className="w-full max-w-[480px] mx-auto min-h-screen bg-gray-50 text-gray-800">
      {/* 상단 탭 */}
      <header className="bg-white shadow-sm">
        <div className="w-full max-w-[440px] px-4 py-8 mx-auto text-center">
          <EventSwitcherSegment />
          <h1 className="mt-4 text-2xl font-bold text-pink-600 tracking-tight">
            {t.header.title[language]}
          </h1>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            {t.header.subtitle[language]}
          </p>
        </div>
      </header>

      <main className="w-full max-w-[440px] px-4 py-12 space-y-12 mx-auto">
        {/* 맞춤 솔루션 */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 tracking-tight text-center">
            {t.solution.title[language]}
          </h2>
          <ul className="grid grid-cols-2 gap-2">
            {t.solution.items[language].map((text, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 bg-white rounded-lg border border-gray-100 shadow-sm p-3 hover:shadow-md transition"
              >
                <svg
                  className="w-4 h-4 text-pink-500 mt-[2px]"
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
                <span className="text-gray-700 text-sm leading-snug">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* BEFORE & AFTER */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 tracking-tight text-center">
            {t.beforeAfter.title[language]}
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center">
            {t.beforeAfter.subtitle[language]}
          </p>

          {t.beforeAfter.examples.map(({ img, title, text }, i) => (
            <div key={i} className="grid grid-cols-2 gap-3 items-center mb-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm p-2">
                <img
                  src={img}
                  alt={title[language]}
                  className="rounded-md w-full h-auto"
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-pink-500 mb-1">
                  {title[language]}
                </p>
                <p className="text-sm text-gray-600 leading-snug">
                  {text[language]}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* 병원 안내 + 위치 */}
        <section className="space-y-4">
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 space-y-2">
            {t.info.benefits.map((line, idx) => (
              <p className="text-sm" key={idx}>
                {line[language]}
              </p>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl shadow">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={3500}
              swipeable
              emulateTouch
            >
              {[1, 2, 3, 4].map((num) => (
                <div key={num}>
                  <img
                    src={`/assets/event3_map-gallery-${num}.jpg`}
                    alt={`병원 내부 ${num}`}
                    className="object-cover w-full h-[240px]"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="mt-6 text-sm text-gray-600 space-y-2 flex flex-col items-center">
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-600 font-medium px-3 py-1 rounded-full text-xs">
                {t.info.lines.green[language]}
              </span>
              <span className="bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded-full text-xs">
                {t.info.lines.blue[language]}
              </span>
              <span className="bg-pink-100 text-pink-600 font-medium px-3 py-1 rounded-full text-xs">
                {t.info.lines.pink[language]}
              </span>
            </div>
            <p className="mt-2">
              <strong className="text-gray-800">
                {t.info.subwayAccess[language].split(" ")[0]}
              </strong>{" "}
              {t.info.subwayAccess[language].split(" ").slice(1).join(" ")}
            </p>
          </div>
        </section>

        {/* 신청 폼 */}
        <section className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 space-y-6 text-center">
            <h3 className="text-lg font-bold text-gray-800 tracking-tight">
              {t.form.title[language]}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-balance whitespace-pre-line">
              {t.form.description[language]}
            </p>
            <form className="space-y-4 text-left">
              {/* 이름 */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  {t.form.fields.name.label[language]}
                </label>
                <input
                  type="text"
                  placeholder={t.form.fields.name.placeholder[language]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* 연락처 */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  {t.form.fields.phone.label[language]}
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10,11}"
                  placeholder={t.form.fields.phone.placeholder[language]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* 관심 항목 */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  {t.form.fields.interest.label[language]}
                </label>
                <input
                  type="text"
                  placeholder={t.form.fields.interest.placeholder[language]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* 날짜 */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  {t.form.fields.date.label[language]}
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition text-base"
              >
                {t.form.submitButton[language]}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EventPage3;
