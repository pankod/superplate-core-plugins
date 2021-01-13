const base = {
  _app: {
    import: [
      "import React from 'react'",
      "import { Provider } from 'react-redux'",
      "import store from '../src/redux/store'",
    ],
    inner: [``],
    wrapper: ["<>", "<Provider store={store}>", "</Provider>", "</>"],
  },
};

module.exports = {
  extend(answers) {
    return base;
  },
};
