// src/lib/i18n.ts

import ja from "@/messages/ja.json";
import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

export type DictionaryType = {
  title: string;
  addFurigana: string;
  saveDoc: string;
};

const dictionaries: Record<string, DictionaryType> = {
  ja: ja,
  en: en,
  zh: zh,
};

export const getDictionary = (locale: keyof typeof dictionaries): DictionaryType => {
  return dictionaries[locale];
};
