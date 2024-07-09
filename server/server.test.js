const request = require("supertest");
const express = require("express");

const app = express();
app.get("/ping", (req, res) => res.json({ msg: "Ping Successful" }));

describe("GET /ping", () => {
  it("should return Ping Successful", async () => {
    const res = await request(app).get("/ping");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("msg", "Ping Successful");
  });
});
