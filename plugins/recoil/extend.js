const base = {
    _app: {
      import: [
        "import { RecoilRoot } from 'recoil';",
      ],
      inner: [],
      wrapper: ["<RecoilRoot>","</RecoilRoot>"],
    },
  };
  
  module.exports = {
    extend(answers) {
      return base;
    },
  };
  