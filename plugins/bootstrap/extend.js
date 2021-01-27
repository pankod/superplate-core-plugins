const base = {
    _app: {
        import: ['import "@styles/app.scss";'],
    },
};

module.exports = {
    extend(answers) {
        if (!answers.includes("scss")) {
            base._app.import = [
                'import "bootstrap/dist/css/bootstrap.min.css";',
            ];
        }
        return base;
    },
};
