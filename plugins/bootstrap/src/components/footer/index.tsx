import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <div
            className="text-center py-4"
            style={{ backgroundColor: "#282c34" }}
        >
            <a
                href="http://pankod.com"
                target="_blank"
                className="d-block mb-3"
            >
                <Image src="/pankod.svg" alt="pankod" width="140" height="28" />
            </a>

            <ul className="d-flex justify-content-center list-unstyled p-0 m-0">
                <li className="mx-2">
                    <Image
                        src="/icons/github.svg"
                        alt="nextjs"
                        width="28"
                        height="29"
                    />
                </li>
                <li className="mx-2">
                    <Image
                        src="/icons/twitter.svg"
                        alt="nextjs"
                        width="28"
                        height="28"
                    />
                </li>
                <li className="mx-2">
                    <Image
                        src="/icons/youtube.svg"
                        alt="nextjs"
                        width="28"
                        height="29"
                    />
                </li>
                <li className="mx-2">
                    <Image
                        src="/icons/linkedin.svg"
                        alt="nextjs"
                        width="28"
                        height="32"
                    />
                </li>
            </ul>
        </div>
    );
};
