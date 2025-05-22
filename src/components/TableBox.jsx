import React from "react";

const TableBox = () => {
  return (
    <div className="mx-auto mt-10 text-sm shadow-xl">
      <div className="grid grid-cols-3 text-center">
        {/* 헤더 */}
        <div className=" font-bold py-2 border-r border-gray-400"></div>
        <div className="bg-gray-200 text-xl font-bold py-2 border-r border-gray-400">
          렌즈·안경
        </div>
        <div className=" font-bold text-xl py-2">스마일 라식</div>

        {/* 1행 */}
        <div className="py-3 border-t border-gray-400 border-r">
          20년 누적 비용
        </div>
        <div className="py-3 border-t border-gray-400 border-r bg-gray-200">
          약 840만원
        </div>
        <div className="py-3 border-t border-gray-400 text-red-600 font-semibold">
          단 1회, 평균 250만원
        </div>

        {/* 2행 */}
        <div className="py-3 border-t border-gray-400 border-r">편의성</div>
        <div className="py-3 border-t border-gray-400 border-r bg-gray-200">
          매일 관리 필요
          <br />
          김서림 등 불편함
        </div>
        <div className="py-3 border-t border-gray-400">
          렌즈·안경 없이
          <br />
          자유로운 일상
        </div>

        {/* 3행 */}
        <div className="py-3 border-t border-gray-400 border-r">눈 건강</div>
        <div className="py-3 border-t border-gray-400 border-r bg-gray-200">
          각막염·안구건조증 위험
        </div>
        <div className="py-3 border-t border-gray-400 text-red-600 font-semibold">
          각막 손상 최소화
        </div>

        {/* 4행 */}
        <div className="py-3 border-t border-gray-400 border-r">
          장기적 합리성
        </div>
        <div className="py-3 border-t border-gray-400 border-r bg-gray-200">
          계속 비용 발생
        </div>
        <div className="py-3 border-t border-gray-400">한 번의 투자로 끝</div>
      </div>
    </div>
  );
};

export default TableBox;
