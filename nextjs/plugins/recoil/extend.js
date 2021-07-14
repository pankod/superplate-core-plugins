const base = {
    _app: {
        import: ["import { RecoilRoot } from 'recoil';"],
        wrapper: [["<RecoilRoot>", "</RecoilRoot>"]],
    },
    testSetup: {
        import: ["import { RecoilRoot } from 'recoil';"],
        wrapper: [["<RecoilRoot>", "</RecoilRoot>"]],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
