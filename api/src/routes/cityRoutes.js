const cityController = require(`../controllers/cityController`);

module.exports = (app) => {
  app.post("/api/cities", cityController.create);

  app.get("/api/cities", cityController.fetch);

  app.get("/api/cities/:id", cityController.get);

  app.put("/api/cities/:id", cityController.update);

  app.delete("/api/cities/:id", cityController.delete);
};
