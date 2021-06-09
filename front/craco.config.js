const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "rgba(245,34,45,0.66)",
                            "@success-color": "#b7eb8f",
                            "@info-color": "#87e8de"
                        },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
};