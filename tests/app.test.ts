import request from "supertest";
import app from "../src/app";

describe("API Endpoints", () => {
  it("GET /api/hello should return a greeting message", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "Hello, world!");
  });

  it("POST /api/echo should echo the posted message", async () => {
    const testMessage = { message: "Hello, Jest!" };
    const res = await request(app).post("/api/echo").send(testMessage);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(testMessage);
  });
});
