import React from "react";
import EventSwitcherSegment from "../components/EventSwitcherSegment";

function EventPage3() {
  return (
    <div className="w-[400px] mx-auto min-h-screen bg-[#fdfcfa] px-4 py-8">
      {/* 상단 탭 */}
      <EventSwitcherSegment />

      <main className="px-4 py-10 space-y-10">
        {/* 타이틀 영역 */}
        <section className="text-center">
          <h1 className="text-2xl font-bold text-pink-600">
            여름철 피부 진정 EVENT
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            민감해진 피부에 휴식을, 할인 혜택으로 피부 고민 해결!
          </p>
        </section>

        {/* 피부 진정 키포인트 */}
        <section className="grid grid-cols-2 gap-4">
          {[
            "피부과전문의 1:1 맞춤 진료",
            "진정 관리 프로그램 할인",
            "기미·잡티 토닝 패키지",
            "여드름 흉터 개선",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-3 text-center text-sm font-medium text-gray-700"
            >
              {item}
            </div>
          ))}
        </section>

        {/* 이미지 배너 */}
        <section className="rounded-lg overflow-hidden shadow">
          <img
            src="/assets/피부과이벤트.jpg" // 예시 이미지
            alt="피부과 이벤트 배너"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* CTA */}
        <section>
          <button className="w-full py-3 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition">
            이벤트 신청하기
          </button>
        </section>
      </main>
    </div>
  );
}

export default EventPage3;
