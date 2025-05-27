import React, { useState } from "react";

const BottomForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      age,
      phone,
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzh_0Fxn7zNvrll1xMtR8sfr4vcE-IxJCJqzdO3uq0gq7CIkEvoivC18bTGnPZyusMZ1Q/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();
      if (result.result === "success") {
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
          onChange={(e) => setPhone(e.target.value)}
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
