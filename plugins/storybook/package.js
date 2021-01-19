module.exports = {
    apply(pkg, answers) {
        if (answers.includes("css")) {
            pkg.devDependencies["css-loader"] = "^5.0.1";
        }

        if (answers.includes("sass")) {
            pkg.devDependencies["sass-loader"] = "^10.1.1";
        }

        return pkg;
    },
};
