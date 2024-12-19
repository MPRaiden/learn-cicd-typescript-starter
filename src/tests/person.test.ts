import { describe, expect, test } from "vitest";

const person = {
  isActive: false, //Temp to test if test actually fails
  age: 32,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});
