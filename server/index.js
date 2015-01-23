// Generated by CoffeeScript 1.8.0
(function() {
  var handle, requestHandlers, router, server;

  server = require("./server");

  router = require("./router");

  requestHandlers = require("./requestHandlers");

  handle = {};

  handle["/test/logEvent"] = requestHandlers.testLogEvent;

  handle["/test/listEvents"] = requestHandlers.testListEvents;

  handle["/logEvent"] = requestHandlers.logEvent;

  handle["/listEvents"] = requestHandlers.listEvents;

  server.start(router.route, handle);

}).call(this);

//# sourceMappingURL=index.js.map
