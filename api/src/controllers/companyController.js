const Company = require("../models/Сompany");

module.exports = {
  create: async (request, reply) => {
    try {
      const company = request.body;
      const newCompany = await Company.create(company);
      reply.code(201).send(newCompany);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  fetch: async (request, reply) => {
    try {
      const companies = await Company.find({});
      reply.code(200).send(companies);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  get: async (request, reply) => {
    try {
      const companyId = request.params.id;
      const company = await Company.findById(companyId);
      reply.code(200).send(company);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  update: async (request, reply) => {
    try {
      const companyId = request.params.id;
      const updates = request.body;
      await Company.findByIdAndUpdate(companyId, updates);
      const companyToUpdate = await Company.findById(companyId);
      reply.code(200).send({ data: companyToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  delete: async (request, reply) => {
    try {
      const companyId = request.params.id;
      const companyToDelete = await Company.findById(companyId);
      await Company.findByIdAndDelete(companyId);
      reply.code(200).send({ data: companyToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};
