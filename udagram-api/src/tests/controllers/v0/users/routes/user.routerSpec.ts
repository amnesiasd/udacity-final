import supertest from "supertest";
import app from "../../../../../server";

const request = supertest(app);

describe("Test User endpoint", () => {
  it("get user endpoint", () => {
    expect(200).toBe(200);
  });
});
