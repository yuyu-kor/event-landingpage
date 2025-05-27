import React from "react";

const TableBox = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-3 text-center text-sm font-medium bg-blue-50">
        <div className="p-3"></div>
        <div className="p-3 border-l border-r border-blue-100 text-blue-700">
          렌즈·안경
        </div>
        <div className="p-3">스마일라식</div>
      </div>

      {[
        {
          label: "20년 누적 비용",
          before: "약 840만원",
          after: "단 1회, 평균 250만원",
        },
        {
          label: "편의성",
          before: "매일 관리 필요\n김서림 등 불편함",
          after: "렌즈·안경 없이\n자유로운 일상",
        },
        {
          label: "눈 건강",
          before: "각막염·안구건조증 위험",
          after: "각막 손상 최소화",
        },
        {
          label: "장기적 합리성",
          before: "계속 비용 발생",
          after: "한 번의 투자로 끝",
        },
      ].map((row, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-3 text-center text-sm border-t border-blue-100 ${
            idx % 2 === 0 ? "" : "bg-gray-50"
          }`}
        >
          <div className="p-3 text-gray-600">{row.label}</div>
          <div className="p-3 border-l border-r border-blue-100 whitespace-pre-wrap text-gray-700">
            {row.before}
          </div>
          <div className="p-3 text-red-500 font-semibold whitespace-pre-wrap">
            {row.after}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableBox;
