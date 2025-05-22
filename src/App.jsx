import "./App.css";
import TableBox from "./components/TableBox";

function App() {
  return (
    <div className="w-[400px] min-h-screen mx-auto text-center">
      {/* 뱃지 */}
      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-700 rounded-full mt-6">
        event
      </span>

      <div className="mt-10 space-y-2">
        <p className="text-2xl nanum-brush">
          <span className="text-blue-700">비용 부담 때문에 못하신 분 </span>
          찾습니다!
        </p>
        <p className="text-4xl">
          빠른회복{" "}
          <span className="font-extrabold text-blue-700">[스마일라식]</span>
        </p>
      </div>

      <div className="absolute top-50 left-1/2 -translate-x-1/2 flex items-center z-20">
        <div className="bg-blue-700 w-[150px] text-amber-200 px-5 py-3 rounded-2xl text-xl font-bold shadow-md">
          무료
          <br />
          정밀검사
        </div>
        <div className="bg-blue-700 w-[150px] text-amber-200 px-5 py-3 rounded-2xl text-xl font-bold shadow-md whitespace-nowrap">
          최대 할인
          <br />
          이벤트
        </div>
      </div>
      <span className="absolute top-49 left-62 z-30 text-white text-7xl font-bold">
        +
      </span>

      {/* 비디오 섹션 */}
      <div className="relative mt-35 h-[300px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/assets/KakaoTalk_20250522_161126349.mp4"
            type="video/mp4"
          />
        </video>

        {/* 위쪽 흰색 그라데이션 */}
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="w-[400px] mx-auto mt-12 text-center">
        {/* 제목 */}
        <p className="text-2xl font-normal">
          <span className="font-extrabold">스마일라식,</span> 이런 분들께
          추천합니다.
        </p>
        {/* 추천 항목 목록 */}
        <div className="mt-6 space-y-4">
          {[
            "안경·렌즈가 불편하신 분",
            "라식·라섹 부작용이 걱정되시는 분",
            "안구 건조증이 있으신 분",
            "빠른 회복을 희망하시는 분",
          ].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white rounded-lg shadow-sm px-4 py-3 border border-gray-200"
            >
              <div className="w-6 h-6 rounded-[4px] bg-gray-700 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              </div>
              <p className="text-md text-black">{text}</p>
            </div>
          ))}
        </div>

        <TableBox />
      </div>
    </div>
  );
}

export default App;
