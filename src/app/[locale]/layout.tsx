// src/app/[locale]/layout.tsx
import '@/app/globals.css';
import { ReactNode } from "react";
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body>
        <LanguageSwitcher currentLocale={params.locale} />
        {children}
      </body>
    </html>
  );
}
