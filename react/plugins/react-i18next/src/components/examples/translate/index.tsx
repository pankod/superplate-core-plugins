import React from "react";
import { useTranslation } from "react-i18next";

export const TranslateExample: React.FC = () => {
  // https://react.i18next.com/guides/quick-start#translate-your-content
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <div>
      <header>
        <h2>{t("hello")}</h2>
        <div>
          <button onClick={() => changeLanguage("tr")}>🇹🇷 Türkçe</button>
          <button onClick={() => changeLanguage("en")}>🇺🇸 English</button>
        </div>
      </header>
      <main>
        <p>{t("greet", { name: "World" })}</p>
      </main>
      <footer>
        <a
          href="https://react.i18next.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("documentation")}
        </a>
      </footer>
    </div>
  );
};
