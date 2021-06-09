const dbURL =
  "mongodb+srv://admin:kekrolkek5@delcat.shf1m.mongodb.net/DelcatDB?retryWrites=true&w=majority";

const PORT = process.env.PORT || 4000;

const fastify = require("fastify")({ logger: true });

fastify.register(require("fastify-cors"));

fastify.register(require("fastify-mongodb"), {
  forceClose: true,
  url: dbURL,
});

fastify.get("/companies", async function (req, reply) {
  return await this.mongo.db.collection("companies").find({}).toArray();
});

fastify.get("/cities", async function (req, reply) {
  return await this.mongo.db.collection("cities").find({}).toArray();
});

fastify.get("/regions", async function (req, reply) {
  return await this.mongo.db.collection("regions").find({}).toArray();
});

fastify.get("/services", async function (req, reply) {
  return await this.mongo.db.collection("services").find({}).toArray();
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
