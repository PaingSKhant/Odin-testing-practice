import { capitalize, reverse } from "./logic.js";

test("capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse the string", () => {
  expect(reverse("dog")).toBe("god");
});
