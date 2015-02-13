// Generated by CoffeeScript 1.8.0
(function() {
  var API, app, argv, port;

  argv = require("minimist")(process.argv.slice(2));

  API = require("fortune");

  if (argv._.length === 0) {
    console.log("Usage: node geordi.js <port>");
  } else {
    port = argv['_'][0];
    app = API({
      db: "user-event-log"
    }).resource("user", {
      zooniverse_id: String,
      events: ["event"]
    }).resource("animal", {
      animal: String
    }).resource("wordUsage", {
      word: String,
      subject: {
        ref: "subject",
        inverse: "zooniverse_id"
      },
      user: "user",
      frequency: Number
    }).resource("subject", {
      zooniverse_id: String,
      state: String,
      animals: ["animal"],
      wordUsages: ["wordUsage"]
    }).resource("event", {
      time: Date,
      subject_id: String,
      user_id: String,
      type: String,
      related_id: String
    }).listen(port);
    exports.API = API;
  }

}).call(this);

//# sourceMappingURL=geordi.js.map
