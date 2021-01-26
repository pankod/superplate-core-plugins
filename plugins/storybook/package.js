module.exports = {
    apply(pkg, answers) {
        if (!answers.includes("css")) {
            delete pkg.devDependencies["css-loader"];
        }

        if (!answers.includes("scss")) {
            delete pkg.devDependencies["sass-loader"];
        }

        if (!answers.includes("styled-components")) {
            delete pkg.devDependencies[
                "storybook-addon-styled-component-theme"
            ];
        }

        return pkg;
    },
};
