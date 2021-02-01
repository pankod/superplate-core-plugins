import React from "react";
import { TFunction } from "next-i18next";

import { withTranslation, i18n } from "@i18n";
import styles from "./index.module.css";

/**
 * This component is generated as en example usage of next-i18next
 *
 * To learn more about next-i18next and i18n
 * please visit https://github.com/isaachinman/next-i18next
 */

const I18NExampleComponent: React.FC<{ t: TFunction }> = ({ t }) => {
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
                    href="https://github.com/isaachinman/next-i18next"
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
