import { Link, useLocation } from "react-router-dom";

export default function EventPage() {
  const location = useLocation();

  return (
    <div className="w-full max-w-[480px] mx-auto bg-gray-50 min-h-screen text-gray-800">
      {/* 네비게이션 */}
      <header className="bg-white shadow">
        <div className="flex justify-center gap-4 px-4 py-4">
          <Link
            to="/"
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-transform duration-200 ${
              location.pathname === "/"
                ? "text-blue-600 bg-blue-100"
                : "text-gray-400 bg-gray-100"
            } hover:scale-105`}
          >
            event1
          </Link>
          <Link
            to="/event2"
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-transform duration-200 ${
              location.pathname === "/event2"
                ? "text-blue-600 bg-blue-100"
                : "text-gray-400 bg-gray-100"
            } hover:scale-105`}
          >
            event2
          </Link>
        </div>
        <div className="text-center px-4 pb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            헤어라인 이벤트 안내
          </h1>
          <p className="mt-2 text-gray-600">
            자연스럽고 세련된 헤어라인, 무료 상담 받아보세요
          </p>
        </div>
      </header>

      {/* 배너 */}
      <main>
        <section className="relative h-[400px]">
          <img
            src="/assets/event2_clinic.png"
            alt="병원사진"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center gap-4 px-6">
            <p className="text-xl font-bold">
              모우림은 고객후기와 소개가 증명합니다
            </p>
            <p>
              이미 3000명 넘게 수술을 받으셨습니다.
              <br />
              하지만, 중요한 건 이벤트만 보고
              <br />
              판단하시면 안 됩니다..
            </p>
            <p>
              직접 눈으로 확인하고,
              <br />
              디자인 검사를 무료로 받아보고
              <br />
              결정하셔도 늦지 않습니다.
            </p>
          </div>
        </section>

        {/* Before & After */}
        <section className="flex flex-col items-center gap-4 mt-10 px-4">
          <div className="bg-green-500 text-white rounded-full px-8 py-2 font-medium text-sm">
            Before & After
          </div>
          <img
            src="/assets/event2_diff.png"
            alt="두피before&after"
            className="rounded-lg shadow-md"
          />
          <div className="text-center space-y-1 mt-7">
            <p className="text-xl font-bold text-green-800">
              모든 절차는 의료진이 집도합니다
            </p>
            <p className="text-green-600 text-lg font-bold">
              모우림은 확실하게 이야기 합니다
            </p>
            <p className="text-sm leading-relaxed">
              1. 손님이 헤어라인 교정받다가 직원이 된 스토리
              <br />
              2. 미술대회, 디자인경력 30년으로 개별 맞춤 디자인
              <br />
              3. 모든 절차를 의료진이 직접 집도합니다
            </p>
            <img
              src="/assets/event2_diff2.png"
              alt="두피before&after"
              className="mt-9 rounded-lg shadow-sm"
            />
          </div>
        </section>

        {/* 모우림의 리얼 후기 */}
        <section className="mt-9 px-4 text-center space-y-2">
          <p className="font-semibold text-base text-green-600">
            모우림의 리얼 후기
          </p>
          <p className="text-sm text-green-500">
            특별함을 만드는 모우림을 만나보세요
          </p>
          <div className="aspect-video w-full rounded-lg overflow-hidden mt-4">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/E2TFqJjLlEo?autoplay=1"
              title="모우림 리얼 후기"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* 이벤트 신청란 */}
        <section className="flex flex-col gap-4 items-center justify-center mt-14 px-4">
          <div className="inline-block bg-green-600 rounded-full px-8 py-2 text-white text-lg font-bold shadow-sm">
            모우림 이벤트 신청란
          </div>
          <div className="text-center border-2 border-green-500 rounded-lg px-4 py-4 text-sm text-gray-700 leading-relaxed bg-white">
            수술과 케어에 대한 자신감으로
            <br />
            이벤트 상담신청자에 한하여,
            <br />
            나에게 맞는 디자인 검사 및 상담을 제공합니다
          </div>
          <form className="w-full mt-2 space-y-4">
            {/* 성함 */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700"
              >
                성함
              </label>
              <input
                type="text"
                id="name"
                placeholder="홍길동"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* 연락처 */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-700"
              >
                연락처
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="010-1234-5678"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* 연령대 */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="age"
                className="text-sm font-semibold text-gray-700"
              >
                연령대
              </label>
              <select
                id="age"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">선택해주세요</option>
                <option value="10">10대</option>
                <option value="20">20대</option>
                <option value="30">30대</option>
                <option value="40">40대</option>
                <option value="50">50대 이상</option>
              </select>
            </div>

            {/* 관심 진료 항목 */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="interest"
                className="text-sm font-semibold text-gray-700"
              >
                관심 있는 진료 항목
              </label>
              <select
                id="interest"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">선택해주세요</option>
                <option value="앞머리">앞머리</option>
                <option value="정수리">정수리</option>
                <option value="이마">이마</option>
                <option value="기타">기타</option>
              </select>
            </div>

            {/* 상담 희망일 */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="consultDate"
                className="text-sm font-semibold text-gray-700"
              >
                상담 희망일
              </label>
              <input
                type="datetime-local"
                id="consultDate"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-md transition duration-200"
            >
              상담 신청하기
            </button>
          </form>
        </section>

        {/* 지도 */}
        <section className="mt-8 px-4 pb-12">
          <img
            src="/assets/event2_map.png"
            alt="지도"
            className="rounded-md shadow-sm"
          />
        </section>
      </main>
    </div>
  );
}
