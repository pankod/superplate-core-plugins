import React from "react";

import { withTranslation, i18n } from "@/i18n";

import styles from "./index.module.css";

const I18NExampleComponent: React.FC<{ t: any }> = ({ t }) => {
    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
    };
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <h2 className={styles.title}>{t`home:title`}</h2>
                <div className={styles.languageContainer}>
                    <button
                        onClick={changeLanguage}
                        className={`${styles.language} ${
                            i18n.language === "en"
                                ? styles.selectedLanguage
                                : ""
                        }`}
                    >
                        {t(`common:language.en`)}
                    </button>
                    <button
                        onClick={changeLanguage}
                        className={`${styles.language} ${
                            i18n.language === "tr"
                                ? styles.selectedLanguage
                                : ""
                        }`}
                    >
                        {t(`common:language.tr`)}
                    </button>
                </div>
            </header>
            <main className={styles.content}>
                <p>{t("common:greet", { name: t`common:world` })}</p>
                <p>{t`home:someText`}</p>
            </main>
            <footer className={styles.footer}>
                <a
                    className={styles.button}
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t`common:documentation`}
                </a>
            </footer>
        </div>
    );
};

export const I18NExample = withTranslation(["common", "home"])(
    I18NExampleComponent,
);
