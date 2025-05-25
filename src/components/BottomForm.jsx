import React from "react";

const BottomForm = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-center z-50">
      <form className="w-[400px] bg-white shadow-lg p-4 flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="이름"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="나이"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>
        <input
          type="tel"
          placeholder="연락처"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white px-6 py-2 rounded font-medium hover:bg-blue-800"
        >
          이벤트 신청하기
        </button>
      </form>
    </div>
  );
};

export default BottomForm;
