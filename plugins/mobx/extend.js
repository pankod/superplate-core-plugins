const base = {
    _app: {
      import: [
        "import { RootStoreProvider } from '@mobx';",
      ],
      inner: [],
      wrapper: ["<RootStoreProvider>","</RootStoreProvider>"],
    },
  };
  
  module.exports = {
    extend(answers) {
      return base;
    },
  };
  