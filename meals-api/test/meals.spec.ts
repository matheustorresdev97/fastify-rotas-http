import { execSync } from "child_process";
import request from "supertest";
import { app } from "../src/app";

describe("Meals routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(() => {
    execSync("npm run knex migrate:rollback --all");
    execSync("npm run knex migrate:latest");
  });

  it("should be able to create a new meal", async () => {
    const userResponse = await request(app.server)
      .post("/users")
      .send({ name: "John Doe", email: "johndoe@gmail.com" })
      .expect(201);

    const cookies = userResponse.get("Set-Cookie")!;

    await request(app.server)
      .post("/meals")
      .set("Cookie", cookies)
      .send({
        name: "Breakfast",
        description: "It's a breakfast",
        isOnDiet: true,
        date: new Date(),
      })
      .expect(201);
  });
});
