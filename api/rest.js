const PORT = process.env.PORT || 4000;
const dbURL =
  "mongodb+srv://admin:kekrolkek5@delcat.shf1m.mongodb.net/DelcatDB?retryWrites=true&w=majority";

const fastify = require("fastify");
const mongoose = require("mongoose");
const companyRoutes = require("./src/routes/companyRoutes");
const cityRoutes = require("./src/routes/cityRoutes");
const regionRoutes = require("./src/routes/regionRoutes");
const serviceRoutes = require("./src/routes/serviceRoutes");

const contentRangeHook = require("./src/hooks/contentRangeHook");

const app = fastify();

try {
  mongoose.connect(dbURL);
} catch (e) {
  console.error(e);
}

app.register(require("fastify-cors"));
app.addHook("preHandler", contentRangeHook);
cityRoutes(app);
companyRoutes(app);
regionRoutes(app);
serviceRoutes(app);

app.register(require("fastify-mongodb"), {
  forceClose: true,
  url: dbURL,
});

app.get("/companies", async function (req, reply) {
  return await this.mongo.db.collection("companies").find({}).toArray();
});

app.get("/cities", async function (req, reply) {
  return await this.mongo.db.collection("cities").find({}).toArray();
});

app.get("/regions", async function (req, reply) {
  return await this.mongo.db.collection("regions").find({}).toArray();
});

app.get("/services", async function (req, reply) {
  return await this.mongo.db.collection("services").find({}).toArray();
});

app.get("/", (request, reply) => {
  try {
    reply.send("Default");
  } catch (e) {
    console.error(e);
  }
});

app.listen(PORT, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
