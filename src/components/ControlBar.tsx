interface Props {
  englishText: string;
  japaneseText: string;
  setJapaneseText: (text: string) => void;
  labelAddFurigana: string;
  labelSave: string;
}

export default function ControlBar({
  englishText,
  japaneseText,
  setJapaneseText,
  labelAddFurigana,
  labelSave,
}: Props) {
  const addFurigana = () => {
    const annotated = japaneseText.replace(/([\u4E00-\u9FAF]+)/g, "$1(ふりがな)");
    setJapaneseText(annotated);
  };

  const saveDocument = () => {
    const doc = {
      id: Date.now(),
      englishText,
      japaneseText,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(`doc-${doc.id}`, JSON.stringify(doc));
    alert("✅ 文档已保存！");
  };

  return (
    <div className="flex gap-4">
      <button onClick={addFurigana} className="px-4 py-2 bg-blue-600 text-white rounded-md">
        {labelAddFurigana}
      </button>
      <button onClick={saveDocument} className="px-4 py-2 bg-green-600 text-white rounded-md">
        {labelSave}
      </button>
    </div>
  );
}
