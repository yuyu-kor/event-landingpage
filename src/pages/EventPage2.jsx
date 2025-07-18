import { Link, useLocation } from "react-router-dom";
import EventForm from "../components/EventForm";
import EventSwitcherSegment from "../components/EventSwitcherSegment";

export default function EventPage2() {
  const location = useLocation();

  return (
    <div className="w-full max-w-[480px] mx-auto bg-gray-50 min-h-screen text-gray-800">
      {/* 네비게이션 */}
      <header className="bg-white shadow px-4 py-8">
        <EventSwitcherSegment />

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
            src="/assets/event2_doctor.png"
            alt="병원사진"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center gap-4 px-6">
            <p className="text-xl font-bold">
              "다들 이벤트만 보고 결정하는 거 아니에요?"
            </p>
            <p>
              이미 3,000명 이상이 수술을 경험했습니다
              <br />
              하지만, 중요한 건 이벤트만 보고
              <br />
              판단하시면 안 됩니다
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
              저희는 확실하게 이야기 합니다
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

        {/* 모우림의 리얼 후기
        <section className="mt-9 px-4 text-center space-y-2">
          <p className="font-semibold text-base text-green-600">리얼 후기</p>
          <p className="text-sm text-green-500">
            일상 속 특별한 변화, 지금 만나보세요
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
        </section> */}

        {/* 이벤트 신청란 */}
        <section className="flex flex-col gap-4 items-center justify-center mt-14 px-4">
          <div className="inline-block bg-green-600 rounded-full px-8 py-2 text-white text-lg font-bold shadow-sm">
            이벤트 신청란
          </div>
          <div className="text-center border-2 border-green-500 rounded-lg px-4 py-4 text-sm text-gray-700 leading-relaxed bg-white">
            수술, 그 이상을 책임집니다.
            <br />
            이벤트 상담 신청자에 한해,
            <br />
            1:1 맞춤 디자인 검사와 전문 상담을 제공합니다.
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
