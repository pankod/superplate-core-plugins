const base = {
    _app: {
        import: [
            "import { Provider } from 'react-redux'",
            "",
            "import store from '@redux/store'",
        ],
        inner: [],
        wrapper: ["<>", "<Provider store={store}>", "</Provider>", "</>"],
    },
};

module.exports = {
    extend(answers) {
        return base;
    },
};
