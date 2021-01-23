const { database, checkConnection } = require("./database");
const { start: startServer } = require("./server");

(async () => {
  await checkConnection();
  const db = database();
  await startServer();
})();
