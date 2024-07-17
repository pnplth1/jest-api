import request from "supertest";

const url = "https://pokeapi.co/api/v2/";

describe("API Endpoints", () => {
  it("pokemon api", async () => {
    const response = await request(url).get("berry/3/");
    expect(response.status).toBe(200);
    const res = JSON.parse(JSON.stringify(response));
    console.log(res);
    // expect(res.body).toHaveProperty("message", "Hello, world!");
  });
});
