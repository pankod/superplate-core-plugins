import React from "react";

export const TestingLibraryExample: React.FC<{ onClick: () => void }> = ({
    onClick,
}) => {
    return (
        <div
            style={{
                maxWidth: "32rem",
                margin: "2rem auto",
                borderRadius: "1rem",
                padding: "1rem",
                backgroundColor: "papayawhip",
                fontFamily: "sans-serif",
            }}
        >
            <header
                style={{ padding: "1rem", borderBottom: "1px solid peachpuff" }}
            >
                <h2 style={{ margin: 0 }}>Testing Library Test Component</h2>
            </header>
            <main style={{ padding: "0.5rem" }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum, quis nesciunt. Nisi sed non, quisquam cupiditate,
                    quod sint beatae tenetur ut architecto, culpa cum quibusdam
                    placeat quae voluptas eius nihil!
                </p>
                <p>
                    Obcaecati cupiditate officia autem facilis molestias dolore
                    provident quam fugit recusandae iure, non vero molestiae
                    exercitationem ex asperiores adipisci id, reprehenderit
                    maiores. Unde quos commodi eaque ea quaerat! Cupiditate,
                    ducimus!
                </p>
            </main>
            <footer
                style={{ padding: "1rem", borderTop: "1px solid peachpuff" }}
            >
                <button
                    style={{
                        width: "100%",
                        appearance: "none",
                        padding: "1rem 2rem",
                        border: "1px solid peachpuff",
                        color: "lightsalmon",
                        fontWeight: 600,
                        background: "none",
                        borderRadius: "12px",
                    }}
                    onClick={onClick}
                >
                    Click Me!
                </button>
            </footer>
        </div>
    );
};
