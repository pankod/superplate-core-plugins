module.exports = {
    apply(pkg, answers) {
        if (answers.includes("bootstrap") && answers.includes("less")) {
            pkg.devDependencies["@zeit/next-css"] = "^1.0.1";
        }

        return pkg;
    },
};
