const City = require("../models/City");

module.exports = {
  create: async (request, reply) => {
    try {
      const city = request.body;
      const newCity = await City.create(city);
      reply.code(201).send(newCity);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  fetch: async (request, reply) => {
    try {
      const cities = await City.find({});
      reply.code(200).send(cities);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  get: async (request, reply) => {
    try {
      const cityId = request.params.id;
      const city = await City.findById(cityId);
      reply.code(200).send(city);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  update: async (request, reply) => {
    try {
      const cityId = request.params.id;
      const updates = request.body;
      await City.findByIdAndUpdate(cityId, updates);
      const cityToUpdate = await City.findById(cityId);
      reply.code(200).send({ data: cityToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  delete: async (request, reply) => {
    try {
      const cityId = request.params.id;
      const cityToDelete = await City.findById(cityId);
      await City.findByIdAndDelete(cityId);
      reply.code(200).send({ data: cityToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};
