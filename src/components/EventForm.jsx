import { useRef } from "react";
import { useLanguageStore } from "../stores/useLanguageStore";
import { event2Texts } from "../i18n/texts2";

export default function EventForm() {
  const formRef = useRef(null);
  const language = useLanguageStore((state) => state.language);

  const t = event2Texts.event2Form;

  const handleSubmit = (e) => {
    const form = formRef.current;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const age = form.age.value;

    if (!name || !phone || !age) {
      e.preventDefault();
      alert(t.alerts.incomplete[language]);
    } else {
      alert(t.alerts.success[language]);
    }
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        method="POST"
        action="https://script.google.com/macros/s/AKfycbwDSSaekiTMMh8Pa2FmOWISte0oRz8sryjPeM-ce0En5-J6QQNIQvL6PEFBw_NIRJ1d/exec"
        target="hidden_iframe"
        className="w-full mt-2 space-y-4"
      >
        {/* 시트 이름 지정 */}
        <input type="hidden" name="sheetName" value="헤어라인교정" />

        {/* 성함 */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">
            {t.labels.name[language]}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t.placeholders.name[language]}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* 연락처 */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-gray-700"
          >
            {t.labels.phone[language]}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={t.placeholders.phone[language]}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* 연령대 */}
        <div className="flex flex-col gap-1">
          <label htmlFor="age" className="text-sm font-semibold text-gray-700">
            {t.labels.age[language]}
          </label>
          <select
            id="age"
            name="age"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">{t.placeholders.ageSelect[language]}</option>
            {Object.entries(t.ageOptions).map(([key, label]) => (
              <option key={key} value={key}>
                {label[language]}
              </option>
            ))}
          </select>
        </div>

        {/* 관심 진료 항목 */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="interest"
            className="text-sm font-semibold text-gray-700"
          >
            {t.labels.interest[language]}
          </label>
          <select
            id="interest"
            name="interest"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">{t.placeholders.interestSelect[language]}</option>
            {Object.entries(t.interestOptions).map(([key, label]) => (
              <option key={key} value={key}>
                {label[language]}
              </option>
            ))}
          </select>
        </div>

        {/* 상담 희망일 */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="consultDate"
            className="text-sm font-semibold text-gray-700"
          >
            {t.labels.consultDate[language]}
          </label>
          <input
            type="date"
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
          {t.submitButton[language]}
        </button>
      </form>

      {/* CORS 우회를 위한 iframe */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
    </>
  );
}
