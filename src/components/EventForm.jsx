import { useRef } from "react";

export default function EventForm() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    const form = formRef.current;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const age = form.age.value;

    if (!name || !phone || !age) {
      e.preventDefault();
      alert("성함, 연락처, 연령대를 모두 입력해주세요.");
    } else {
      alert("상담 신청이 완료되었습니다!");
    }
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        method="POST"
        action="https://script.google.com/macros/s/AKfycbwOYMVJ2EoarcMprTyA2inICNF31tO2y8sqjpQDy4LDcCsuFjzloLqw-4Lexfy6x4X3QQ/exec"
        target="hidden_iframe"
        className="w-full mt-2 space-y-4"
      >
        {/* 성함 */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">
            성함
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            name="phone"
            placeholder="01012345678"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* 연령대 */}
        <div className="flex flex-col gap-1">
          <label htmlFor="age" className="text-sm font-semibold text-gray-700">
            연령대
          </label>
          <select
            id="age"
            name="age"
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
            name="interest"
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
            name="consultDate"
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

      {/* CORS 우회를 위한 iframe */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
    </>
  );
}
