"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const languages = [
  { code: "ja", label: "🇯🇵 日本語" },
  { code: "en", label: "🇺🇸 English" },
  { code: "zh", label: "🇨🇳 中文" },
];

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // 替换 locale
    const newPath = segments.join("/");
    startTransition(() => router.push(newPath));
  };

  return (
    <div className="absolute top-6 right-6 space-x-2">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLocale(code)}
          disabled={code === currentLocale || isPending}
          className={`px-2 py-1 border rounded text-sm ${
            code === currentLocale ? "bg-gray-300" : "bg-white hover:bg-gray-100"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
