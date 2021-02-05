import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import i18nConfig from "@i18n";

const { locales } = i18nConfig;

/**
 * This component is generated as en example usage of next-translate
 *
 * To learn more about next-translate and i18n
 * please visit https://github.com/vinissimus/next-translate
 */

export const NextTranslateExample: React.FC<{ defaultNamespace: string }> = ({
    defaultNamespace,
}) => {
    const { t, lang } = useTranslation(defaultNamespace);

    return (
        <div>
            <header>
                <h2>{t`title`}</h2>
                <div>
                    {locales.map((lng) => (
                        <Link href="/" passHref locale={lng} key={lng}>
                            <a>
                                {t(`common:language.${lng}`)}
                            </a>
                        </Link>
                    ))}
                </div>
            </header>
            <main>
                <p>{t("common:greet", { name: t`common:world` })}</p>
                <p>{t`someText`}</p>
            </main>
            <footer>
                <a
                    href="https://github.com/vinissimus/next-translate"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t`common:documentation`}
                </a>
            </footer>
        </div>
    );
};
