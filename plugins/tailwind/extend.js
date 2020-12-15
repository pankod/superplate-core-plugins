const base = {
    _app: {
        import: ['import "tailwindcss/tailwind.css";'],
        inner: [
            `
React.useEffect(() => {
  console.log("bu tailwind bir harika dostum");
}, [])
        `,
        ],
        wrapper: [
            "<>",
            '<div className="bg-red-500 font-serif text-gray-700">',
            "</div>",
            "</>",
        ],
    },
    _document: {
        import: [],
        inner: [],
        wrapper: [],
    },
};

/**
 * wrapper arrayi cift sayi uzunlugunda olmali =)
 * yoksa bir error throw yapip bu durumun hangi pluginde olustugunu ekrana basalim.
 * Template gibi kullanmak yerine dizi kullanmak daha anlasilir olur gibi dusundum
 * daha sonrasinda da extend edebilmek adina.
 */

module.exports = {
    extend(answers) {
        /**
         * if there are any conditions depending on other answers
         * handle them in this function and return the derived version of the base object.
         */
        const hasPrettier = answers.includes("prettier");
        if (hasPrettier) {
            base._app.inner.push(`
        console.log("prettierla tailwindin ne alakasi var simdi?");
        `);
        }
        return base;
    },
};
