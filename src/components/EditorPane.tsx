interface Props {
  englishText: string;
  japaneseText: string;
  setEnglishText: (text: string) => void;
  setJapaneseText: (text: string) => void;
}

export default function EditorPane({
  englishText,
  japaneseText,
  setEnglishText,
  setJapaneseText,
}: Props) {
  return (
    <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-4">
      <textarea
        className="w-full lg:w-1/2 h-[300px] p-4 border rounded-md resize-none bg-white"
        placeholder="Enter English text here..."
        value={englishText}
        onChange={(e) => setEnglishText(e.target.value)}
      />
      <textarea
        className="w-full lg:w-1/2 h-[300px] p-4 border rounded-md resize-none bg-white"
        placeholder="日本語訳を入力、または自動翻訳を使用..."
        value={japaneseText}
        onChange={(e) => setJapaneseText(e.target.value)}
      />
    </div>
  );
}
