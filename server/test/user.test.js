import request from "supertest";
import express from "express";
import userRoutes from "../routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

describe("User API", () => {
  it("should return 200 for GET /api/users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
  });
});
