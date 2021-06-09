const companyController = require(`../controllers/companyController`);

module.exports = (app) => {
  app.post("/api/companies", companyController.create);

  app.get("/api/companies", companyController.fetch);

  app.get("/api/companies/:id", companyController.get);

  app.put("/api/companies/:id", companyController.update);

  app.delete("/api/companies/:id", companyController.delete);
};
