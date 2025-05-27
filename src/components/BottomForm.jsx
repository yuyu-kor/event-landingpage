import React, { useState } from "react";

const BottomForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // 숫자만 남기기

    let formatted = input;
    if (input.length < 4) {
      // 그대로
      formatted = input;
    } else if (input.length < 8) {
      formatted = `${input.slice(0, 3)}-${input.slice(3)}`;
    } else {
      formatted = `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(
        7,
        11
      )}`;
    }

    setPhone(formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !age.trim() || !phone.trim()) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("phone", phone);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzJc2eZhVYJJO6JfWdmg26JGhT5xM4x-SAPrbmsQLtMmLe01XvuQoQEpBHh-sCX5yzkNg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const resultText = await res.text(); // ← 응답을 JSON 대신 text로 받아야 안전
      console.log("응답 결과:", resultText);

      if (res.ok && resultText.includes("success")) {
        alert("신청이 완료되었습니다!");
        setName("");
        setAge("");
        setPhone("");
      } else {
        alert("제출 실패. 다시 시도해주세요.");
      }
    } catch (err) {
      console.error("에러 발생:", err);
      alert("전송 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 flex justify-center z-50">
      <form
        className="w-[400px] bg-white rounded-t-2xl shadow-xl p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="나이"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <input
          type="tel"
          placeholder="연락처"
          value={phone}
          onChange={handlePhoneChange}
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
