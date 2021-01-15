module.exports = {
    apply(pkg, answers) {
        const prettier = answers.includes("prettier");
        if (!prettier) {
            delete pkg.devDependencies["eslint-config-prettier"];
            delete pkg.devDependencies["eslint-plugin-prettier"];
        }
        return pkg;
    },
};
