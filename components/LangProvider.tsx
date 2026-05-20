"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { STRINGS, type Dict, type Lang } from "@/lib/i18n";

type LangContext = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const Ctx = createContext<LangContext>({
  lang: "en",
  setLang: () => {},
  t: STRINGS.en
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("djitugo_lang");
      if (stored === "id" || stored === "en") {
        setLangState(stored);
        document.documentElement.lang = stored;
      } else {
        const nav = window.navigator.language.toLowerCase();
        if (nav.startsWith("id")) {
          setLangState("id");
          document.documentElement.lang = "id";
        }
      }
    } catch {}
  }, []);

  const value = useMemo<LangContext>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        try {
          window.localStorage.setItem("djitugo_lang", l);
          document.documentElement.lang = l;
        } catch {}
      },
      t: STRINGS[lang]
    }),
    [lang]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}

export function useT() {
  return useContext(Ctx).t;
}
