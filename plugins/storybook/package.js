module.exports = {
    apply(pkg, answers) {
        if (answers.includes("css")) {
            pkg.devDependencies["css-loader"] = "^5.0.1";
        }

        if (answers.includes("scss")) {
            pkg.devDependencies["sass-loader"] = "^10.1.1";
        }

        if (answers.includes("styled-components")) {
            pkg.devDependencies["storybook-addon-styled-component-theme"] = "^1.3.0";
        }
        
        return pkg;
    },
};
