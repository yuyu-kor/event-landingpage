import React from "react";
import { texts } from "../i18n/texts"; // 텍스트 객체 import
import { useLanguageStore } from "../stores/useLanguageStore"; // 언어 상태 관리

const TableBox = () => {
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* 상단 헤더 */}
      <div className="grid grid-cols-3 text-center text-sm font-medium bg-blue-50">
        <div className="p-3"></div>
        <div className="p-3 border-l border-r border-blue-100 text-blue-700">
          {language === "ko"
            ? "렌즈·안경"
            : language === "zh"
            ? "镜片・眼镜"
            : "Очки и линзы"}
        </div>
        <div className="p-3">
          {language === "ko"
            ? "스마일라식"
            : language === "zh"
            ? "SmileLASIK"
            : "Смайл-ЛАСИК"}
        </div>
      </div>

      {/* 본문 테이블 행 */}
      {texts.tableBox.map((row, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-3 text-center text-sm border-t border-blue-100 ${
            idx % 2 === 0 ? "" : "bg-gray-50"
          }`}
        >
          <div className="p-3 text-gray-600">{row.label[language]}</div>
          <div className="p-3 border-l border-r border-blue-100 whitespace-pre-wrap text-gray-700">
            {row.before[language]}
          </div>
          <div className="p-3 text-red-500 font-semibold whitespace-pre-wrap">
            {row.after[language]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableBox;
