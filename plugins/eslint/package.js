module.exports = {
    apply(pkg, {linter}) {
        const prettier = linter.includes("prettier");
        if (!prettier) {
            delete pkg.devDependencies["eslint-config-prettier"];
            delete pkg.devDependencies["eslint-plugin-prettier"];
        }
        return pkg;
    },
};
