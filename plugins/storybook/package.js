module.exports = {
    apply(pkg, {css_features}) {
        if (css_features !== 'css') {
            delete pkg.devDependencies["css-loader"];
        }

        if (css_features !== "scss") {
            delete pkg.devDependencies["sass-loader"];
        }

        if (css_features !== "styled-components") {
            delete pkg.devDependencies[
                "storybook-addon-styled-component-theme"
            ];
        }

        return pkg;
    },
};
