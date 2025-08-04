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

        {/* 이벤트 가격표 */}
        <section className="mt-12 px-4 pb-10">
          {/* 혜택 리스트 */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { no: "1", title: "헤어라인&모발 디자인 상담비용 면제" },
              { no: "2", title: "메조 테라피 2회 제공" },
              { no: "3", title: "EGF 샴푸 제공" },
              { no: "4", title: "토닉 100ML 제공" },
            ].map((item) => (
              <div
                key={item.no}
                className="bg-white border border-green-200 rounded-xl shadow-sm p-4 flex flex-col items-center text-center"
              >
                {/* 뱃지 */}
                <span className="bg-green-600 text-white px-3 py-0.5 rounded-full text-[11px] font-semibold mb-2 shadow-sm">
                  혜택 {item.no}
                </span>
                <span className="text-xs font-medium text-gray-800 leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* 안내 문구 */}
          <div className="bg-green-50 border border-green-100 rounded-lg p-4 text-[12px] text-gray-700 leading-relaxed mb-6 shadow-sm">
            · 30년 경력을 자랑하는 압구정의원에서는{" "}
            <b>특별 혜택 프로모션 가격</b>으로 안내해드리고 있습니다.
            <br />
            · 상담 후, 개인에 맞는 스타일과 모발상태를 고려하여 안내하기에, 필요
            모수는 달라질 수 있습니다.
            <br />· 안내드리는 내용보다 더 많은 수술종류가 준비되어있습니다.
          </div>

          {/* 가격표 */}
          <div className="overflow-hidden rounded-xl shadow border border-gray-200">
            <table className="w-full text-center text-sm">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-3 font-semibold">수술명</th>
                  <th className="py-3 font-semibold">정상가</th>
                  <th className="py-3 font-semibold">특별 이벤트</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "1000모", normal: "270만원", special: "195만원" },
                  { name: "2000모", normal: "380만원", special: "258만원" },
                  { name: "3000모", normal: "510만원", special: "상담시 안내" },
                  { name: "커스텀", normal: "660만원", special: "상담시 안내" },
                  {
                    name: "비절개 모발이식 2000모",
                    normal: "480만원",
                    special: "상담시 안내",
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={`border-t border-gray-200 ${
                      idx % 2 === 0 ? "bg-white" : "bg-green-50"
                    }`}
                  >
                    <td className="py-3 px-2 font-medium">{row.name}</td>
                    <td className="py-3 px-2 text-gray-500">{row.normal}</td>
                    <td
                      className={`py-3 px-2 font-bold ${
                        row.special.includes("안내")
                          ? "text-gray-700"
                          : "text-green-700"
                      }`}
                    >
                      {row.special}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 상담 문의 */}
          <div className="mt-6 flex justify-center">
            <span className="bg-green-600 hover:bg-green-700 transition text-white font-semibold text-sm px-6 py-2 rounded-full shadow cursor-pointer">
              📞 상담문의 | 이벤트 신청을 통해 담당자가 안내 도와드립니다
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
