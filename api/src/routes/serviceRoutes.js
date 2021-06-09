const serviceController = require(`../controllers/serviceController`);

module.exports = (app) => {
  app.post("/api/services", serviceController.create);

  app.get("/api/services", serviceController.fetch);

  app.get("/api/services/:id", serviceController.get);

  app.put("/api/services/:id", serviceController.update);

  app.delete("/api/services/:id", serviceController.delete);
};
