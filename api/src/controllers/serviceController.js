const Service = require("../models/Service");

module.exports = {
  create: async (request, reply) => {
    try {
      const service = request.body;
      const newService = await Service.create(service);
      reply.code(201).send(newService);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  fetch: async (request, reply) => {
    try {
      const services = await Service.find({});
      reply.code(200).send(services);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  get: async (request, reply) => {
    try {
      const serviceId = request.params.id;
      const service = await Service.findById(serviceId);
      reply.code(200).send(service);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  update: async (request, reply) => {
    try {
      const serviceId = request.params.id;
      const updates = request.body;
      await Service.findByIdAndUpdate(serviceId, updates);
      const serviceToUpdate = await Service.findById(serviceId);
      reply.code(200).send({ data: serviceToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  delete: async (request, reply) => {
    try {
      const serviceId = request.params.id;
      const serviceToDelete = await Service.findById(serviceId);
      await Service.findByIdAndDelete(serviceId);
      reply.code(200).send({ data: serviceToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};
