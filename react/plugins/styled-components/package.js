module.exports = {
    apply(pkg, {pm}) {
        const isNpm = pm === "npm";
        if (isNpm) {
            delete pkg.resolutions;
        }
        return pkg;
    },
};
