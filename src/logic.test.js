import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./logic.js";

test("capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse the string", () => {
  expect(reverse("dog")).toBe("god");
});

test("calculate 2 numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("shift by 3 times", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("check array", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});
