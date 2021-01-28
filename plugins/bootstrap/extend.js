const base = {
    _app: {
        import: ['import "@styles/app.scss";'],
    },
};

module.exports = {
    extend({css_features}) {
        if (css_features !== "scss") {
            base._app.import = [
                'import "bootstrap/dist/css/bootstrap.min.css";',
            ];
        }
        return base;
    },
};
