import React from "react";

const BottomForm = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 flex justify-center z-50">
      <form className="w-[400px] bg-white rounded-t-2xl shadow-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="이름"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="나이"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <input
          type="tel"
          placeholder="연락처"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-bold rounded-lg shadow hover:from-blue-700 hover:to-teal-500 transition"
        >
          이벤트 신청하기
        </button>
      </form>
    </div>
  );
};

export default BottomForm;
