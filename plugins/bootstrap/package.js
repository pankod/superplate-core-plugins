module.exports = {
    apply(pkg, {ui, css_features}) {
        if (ui ==="bootstrap" && css_features === "less") {
            pkg.devDependencies["@zeit/next-css"] = "^1.0.1";
        }

        return pkg;
    },
};
