import React from "react";
import EventSwitcherSegment from "../components/EventSwitcherSegment";
import { Carousel } from "react-responsive-carousel";

function EventPage3() {
  return (
    <div className="w-full max-w-[480px] mx-auto min-h-screen bg-gray-50 text-gray-800">
      {/* 상단 탭 */}
      <header className="bg-white shadow-sm">
        <div className="w-full max-w-[440px] px-4 py-8 mx-auto text-center">
          <EventSwitcherSegment />
          <h1 className="mt-4 text-2xl font-bold text-pink-600 tracking-tight">
            피부과 여름 한정 할인 이벤트
          </h1>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            지금이 피부 자신감을 되찾을 기회✨
          </p>
        </div>
      </header>

      <main className="w-full max-w-[440px] px-4 py-12 space-y-12 mx-auto">
        {/* 맞춤 솔루션 */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 tracking-tight text-center">
            1:1 맞춤 솔루션으로 피부 고민 해결
          </h2>
          <ul className="grid grid-cols-2 gap-2">
            {[
              "리프팅 (온다, 울쎄라, 써마지 등)",
              "스킨부스터 (쥬베룩, 리쥬란 등)",
              "쁘띠 (윤곽주사, 필러, 보톡스 등)",
              "제모,바디 (바디핏주사, 온다리프팅 등)",
            ].map((text, idx) => (
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
            리얼 BEFORE & AFTER
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center">
            1:1 맞춤 솔루션으로 피부 고민 해결
          </p>

          {[
            {
              img: "/assets/event3_inmode-fx-3.png",
              title: "리프팅 전후 사진",
              text: "“얼굴선이 또렸해지고 탄력이 생겼어요. 주변에서 살 빠졌냐고 물어봐요!”",
            },
            {
              img: "/assets/event3_skin-botox.png",
              title: "스킨부스터 전후 사진",
              text: "“피부결이 눈에 띄게 달라졌어요. 종종 관리를 받아야겠어요”",
            },
            {
              img: "/assets/event3_lip-filter.png",
              title: "쁘띠 전후 사진",
              text: "“원하는 디자인으로 자연스럽게 예뻐졌다는 말 자주 들어요!”",
            },
            {
              img: "/assets/event3_body-onda-lifting.png",
              title: "제모,바디 전후 사진",
              text: "“다이어트로는 한계가 있어서 처음 받아봤는데 변화가 뚜렷해서 너무 좋아요”",
            },
          ].map(({ img, title, text }, i) => (
            <div key={i} className="grid grid-cols-2 gap-3 items-center mb-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm p-2">
                <img
                  src={img}
                  alt={title}
                  className="rounded-md w-full h-auto"
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-pink-500 mb-1">
                  {title}
                </p>
                <p className="text-sm text-gray-600 leading-snug">{text}</p>
              </div>
            </div>
          ))}
        </section>

        {/* 병원 안내 + 위치 */}
        <section className="space-y-4">
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 space-y-2">
            <p className="text-sm">✔ 원장님 1:1 맞춤 상담 가능</p>
            <p className="text-sm">✔ 전문 코디네이터 상담 후 시술 결정 가능</p>
            <p className="text-sm">✔ 최첨단 피부 분석 검사 진행 후 시술 가능</p>
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
                2호선
              </span>
              <span className="bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded-full text-xs">
                공항철도
              </span>
              <span className="bg-pink-100 text-pink-600 font-medium px-3 py-1 rounded-full text-xs">
                경의중앙선
              </span>
            </div>
            <p className="mt-2">
              <strong className="text-gray-800">홍대입구역 9번 출구</strong>{" "}
              도보 약 2분 거리
            </p>
          </div>
        </section>

        {/* 신청 폼 */}
        <section className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 space-y-6 text-center">
            <h3 className="text-lg font-bold text-gray-800 tracking-tight">
              이벤트 신청하기
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-balance">
              내 얼굴에 꼭 맞는 솔루션,
              <br />
              윤곽 / 피부결 / 전체적인 인상을 종합적으로 분석하여
              <br />
              맞춤형 진료 솔루션을 제안드립니다.
            </p>
            <form className="space-y-4 text-left">
              {[
                { label: "이름", type: "text", placeholder: "이름 입력" },
                {
                  label: "연락처 (숫자만 입력)",
                  type: "tel",
                  placeholder: "01012345678",
                  pattern: "[0-9]{10,11}",
                },
                {
                  label: "관심있는 진료 항목",
                  type: "text",
                  placeholder: "예: 스킨부스터",
                },
                { label: "희망 시술 일자", type: "date", placeholder: "" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    pattern={field.pattern}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition text-base"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EventPage3;
