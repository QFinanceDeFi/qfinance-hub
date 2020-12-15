const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;

    if (page.path.match(/^\/pool/)) {
        createPage({
            path: "/pool",
            matchPath: "/pool/*",
            component: path.resolve(`src/pages/pool.js`)
        })
    }
}