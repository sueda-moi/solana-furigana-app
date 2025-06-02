"use client";

import { useState } from "react";
import EditorPane from "@/components/EditorPane";
import ControlBar from "@/components/ControlBar";
import { getDictionary } from "@/lib/i18n";

// src/app/[locale]/page.tsx
export default function Page({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale as "ja" | "en" | "zh");

  const [englishText, setEnglishText] = useState("");
  const [japaneseText, setJapaneseText] = useState("");

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8 gap-6">
      <h1 className="text-2xl font-bold">{dict.title}</h1>
      <EditorPane
        englishText={englishText}
        japaneseText={japaneseText}
        setEnglishText={setEnglishText}
        setJapaneseText={setJapaneseText}
      />
      <ControlBar
        englishText={englishText}
        japaneseText={japaneseText}
        setJapaneseText={setJapaneseText}
        labelAddFurigana={dict.addFurigana}
        labelSave={dict.saveDoc}
      />
    </main>
  );
}
