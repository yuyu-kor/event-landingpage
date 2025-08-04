import React, { useState } from "react";
import { texts } from "../i18n/texts";
import { useLanguageStore } from "../stores/useLanguageStore";

const BottomForm = () => {
  const language = useLanguageStore((state) => state.language);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [consultDate, setConsultDate] = useState(""); // ✅ 상담 희망일 추가

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // 숫자만
    setPhone(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !age.trim() || !phone.trim()) {
      alert(texts.bottomForm.alertIncomplete[language]);
      return;
    }

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("phone", phone);
    formData.append("consultDate", consultDate); // ✅ 추가됨

    // 시트 이름 지정
    formData.append("sheetName", "스마일라식");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycby_70SUUYu5zsPcK5FKNXptDKiGO-Ji4Npzo5d_Cxtez6Z9kCabhVbpB1w3zuunpCXa/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString(),
        }
      );

      const text = await res.text();
      console.log("응답:", text);

      let result;
      try {
        result = JSON.parse(text);
      } catch {
        result = {};
      }

      if (res.ok && result.result === "success") {
        alert(texts.bottomForm.alertSuccess[language]);
        setName("");
        setAge("");
        setPhone("");
        setConsultDate(""); // ✅ 초기화
      } else {
        alert(texts.bottomForm.alertFailure[language]);
      }
    } catch (err) {
      console.error("에러 발생:", err);
      alert(texts.bottomForm.alertError[language]);
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 flex justify-center z-50">
      <form
        className="w-full max-w-[480px] bg-white rounded-t-2xl shadow-xl p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder={texts.bottomForm.namePlaceholder[language]}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder={texts.bottomForm.agePlaceholder[language]}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
        </div>

        <input
          type="tel"
          placeholder={texts.bottomForm.phonePlaceholder[language]}
          value={phone}
          onChange={handlePhoneChange}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />

        {/* ✅ 상담 희망일 추가 */}
        <input
          type="date"
          value={consultDate}
          onChange={(e) => setConsultDate(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-bold rounded-lg shadow hover:from-blue-700 hover:to-teal-500 transition"
        >
          {texts.bottomForm.submitButton[language]}
        </button>
      </form>
    </div>
  );
};

export default BottomForm;
