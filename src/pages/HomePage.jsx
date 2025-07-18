import BottomForm from "../components/BottomForm";
import TableBox from "../components/TableBox";
import { Link, useLocation } from "react-router-dom";
import EventSwitcherSegment from "../components/EventSwitcherSegment";

function HomePage() {
  const location = useLocation();

  return (
    <div className="w-[400px] mx-auto min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="w-[400px] px-4 py-8 text-center">
          <EventSwitcherSegment />

          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            스마일라식 이벤트 안내
          </h1>
          <p className="mt-2 text-gray-600">
            비용 걱정 없이 빠른 회복을 경험하세요
          </p>
        </div>
      </header>

      <main className="w-[400px] px-4 py-12 space-y-12">
        {/* Highlights */}
        <section className="flex flex-col sm:flex-row justify-between gap-4">
          {["무료 정밀검사", "최대 할인 이벤트"].map((label, idx) => (
            <div
              key={idx}
              className="flex-1 bg-white rounded-lg shadow p-4 text-center"
            >
              <p className="text-base font-semibold text-gray-700">{label}</p>
            </div>
          ))}
        </section>

        {/* Intro Animation */}
        <section className="relative w-full overflow-hidden rounded-lg shadow">
          <img
            src="/assets/자이스수술.gif"
            alt="자이스 스마일 프로 수술 영상상"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            이런 분들께 추천합니다
          </h2>
          <ul className="grid grid-cols-2 gap-3">
            {[
              "안경·렌즈 불편",
              "라식·라섹 부작용 걱정",
              "안구 건조증",
              "빠른 회복 희망",
            ].map((text, idx) => (
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

        {/* Data Table */}
        <TableBox />

        {/* Comparison Section */}
        <section className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
            Before vs After 영상 비교
          </h2>
          <div className="flex gap-3">
            {[
              {
                label: "스마일라식 전",
                src: "/assets/before1.mp4",
                color: "text-gray-800",
              },
              {
                label: "스마일라식 후",
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

        {/* Features Section */}
        <section className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-lg p-4 relative">
          <div className="absolute top-2 right-2 bg-red-100 text-red-600 font-semibold px-2 py-1 rounded-full text-xs">
            HOT!
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            우리 병원 특장점 3가지
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                title: '국내 최초 정품 "비쥬맥스" 8대 보유',
                subtitle:
                  "업계 최고 사양의 레이저 장비 보유로 정확·안전한 시술 가능",
                icon: "/assets/3d-smile.png",
              },
              {
                title: "특별한 DNA 검사 (자체 DNA 연구소 보유)",
                subtitle:
                  "개인 맞춤형 유전 정보 분석으로 최적의 시술 플랜 제공",
                icon: "/assets/3d-dna.png",
              },
              {
                title: "콜라겐 교차 결합 크로스링킹 (각막강화술) 보유",
                subtitle: "시술 후 각막 강도를 높여 안정성을 극대화",
                icon: "/assets/3d-cross.png",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-14 h-14 mt-1"
                />
                <div>
                  <div className="text-gray-800 text-sm font-semibold">
                    {item.title}
                  </div>
                  <div className="text-gray-600 text-xs mt-1 leading-snug">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA & Summary Cards */}
        <section className="space-y-6">
          <button className="w-full py-3 bg-blue-400 text-white font-bold rounded-lg shadow hover:bg-blue-500 transition text-base">
            지금 신청하고 혜택 받기
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-[180px]">
            {[
              {
                icon: "/assets/3d-icon-report.png",
                title: "70여 가지 정밀검진",
                subtitle: "무료 이벤트",
              },
              {
                icon: "/assets/3d-icon-event.png",
                title: "전 고객 이벤트 적용",
              },
              {
                icon: "/assets/3d-icon-check.png",
                title: "정품 시력 교정 수술",
                subtitle: "보증서 제공",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-3 text-center"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-6 h-6 mx-auto mb-1"
                />
                <p className="font-semibold text-gray-800 text-sm">
                  {item.title}
                </p>
                {item.subtitle && (
                  <span className="text-pink-500 text-xs">{item.subtitle}</span>
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
