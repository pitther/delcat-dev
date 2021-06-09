const Region = require("../models/Region");

module.exports = {
  create: async (request, reply) => {
    try {
      const region = request.body;
      const newRegion = await Region.create(region);
      reply.code(201).send(newRegion);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  fetch: async (request, reply) => {
    try {
      const regions = await Region.find({});
      reply.code(200).send(regions);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  get: async (request, reply) => {
    try {
      const regionId = request.params.id;
      const region = await Region.findById(regionId);
      reply.code(200).send(region);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  update: async (request, reply) => {
    try {
      const regionId = request.params.id;
      const updates = request.body;
      await Region.findByIdAndUpdate(regionId, updates);
      const regionToUpdate = await Region.findById(regionId);
      reply.code(200).send({ data: regionToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  delete: async (request, reply) => {
    try {
      const regionId = request.params.id;
      const regionToDelete = await Region.findById(regionId);
      await Region.findByIdAndDelete(regionId);
      reply.code(200).send({ data: regionToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};
