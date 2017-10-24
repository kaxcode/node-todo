var config = {
    port: process.env.PORT || 2000,
    db: process.env.MONGOLAB_URI || "mongodb://localhost/nodetodo",
    test_port: 2001,
    test_db: "mongodb://localhost/nodetodo_test"
};

module.exports = config;
