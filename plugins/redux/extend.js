const base = {
  _app: {
    import: [
      "import React from 'react'",
      "import { Provider } from 'react-redux'",
      "import store from '../src/redux/store'",
    ],
    inner: [
      `

    `,
    ],
    wrapper: ["<>", "<Provider store={store}>", "</Provider>", "</>"],
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
