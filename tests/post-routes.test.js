const request = require("supertest");
const app = require("../app");

describe("Post Endpoints", () => {
  test("Should test GET", async () => {
    const response = await request(app).get("/api/posts/test");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("msg");
  });
});
