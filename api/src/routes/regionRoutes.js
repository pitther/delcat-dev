const regionController = require(`../controllers/regionController`);

module.exports = (app) => {
  app.post("/api/regions", regionController.create);

  app.get("/api/regions", regionController.fetch);

  app.get("/api/regions/:id", regionController.get);

  app.put("/api/regions/:id", regionController.update);

  app.delete("/api/regions/:id", regionController.delete);
};
