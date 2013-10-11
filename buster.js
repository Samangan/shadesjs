var config = module.exports;

config["My tests"] = {
    environment: "node",        // or "browser"
    rootPath: "shadejs/",
    sources: [
        "src/**/*.js"     
    ],
    tests: [
        "test/**/*_test.js"
    ]
};
