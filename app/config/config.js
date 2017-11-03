var config = {
    port: process.env.PORT || 2000,
    db: process.env.MONGOLAB_URI || "mongodb://localhost:27017/node-todo",
    test_port: 2001,
    test_db: "mongodb://localhost/node-todo-test"
};

module.exports = config;
