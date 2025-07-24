import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  language: "ko",
  setLanguage: (lang) => set({ language: lang }),
}));
