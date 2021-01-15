import React from "react";

/**
 * This component is generated as an example to usage of TailwindCSS.
 *
 * To learn more about TailwindCSS
 * please visit https://tailwindcss.com/
 *
 */

export const TailwindExample: React.FC = () => {
    return (
        <div className="bg-green-100 app mx-auto m-4 rounded-lg max-w-sm">
            <header className="border-b border-green-500 p-3">
                <h2 className="font-semibold">Tailwind Example</h2>
            </header>
            <main className="p-4">
                <p className="mb-3 text-gray-800">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ab, officiis dolor eaque optio quam deserunt nesciunt
                    tempore iste unde cum eius explicabo debitis non nostrum
                    incidunt natus. Molestiae, veritatis quo.
                </p>
                <p className="mb-3 text-gray-500">
                    A cupiditate quae quidem accusamus, sint dolores distinctio
                    doloribus earum culpa quas facilis repellendus soluta illo
                    provident eaque inventore sapiente molestias atque dolor
                    ipsam autem eveniet dolorem. Quibusdam, nostrum cupiditate.
                </p>
            </main>
            <footer className="border-t border-green-500 p-3 text-center">
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium rounded-lg px-3 py-2 bg-green-500 text-white"
                >
                    Go To Documentation
                </a>
            </footer>
        </div>
    );
};
