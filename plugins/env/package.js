module.exports = {
    apply(pkg, answers) {
        const testing = ["jest", "testing-library", "enzyme"].some((value) =>
            answers.includes(value),
        );
        if (!testing) {
            delete pkg.devDependencies["dotenv"];
        }
        return pkg;
    },
};
