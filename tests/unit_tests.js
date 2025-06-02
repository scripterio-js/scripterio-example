import { describe, test, expect } from "scripterio";
import { calculator } from "../src/calculator.js";

describe("Unit tests", () => {
  describe("Addition tests", () => {
    test("add() should correctly add two positive numbers", () => {
      expect(calculator.add(2, 2)).toBeEqual(4);
      expect(calculator.add(5, 3)).toBeEqual(8);
    });

    test("add() should handle negative numbers", () => {
      expect(calculator.add(-2, 2)).toBeEqual(0);
      expect(calculator.add(-5, -3)).toBeEqual(-8);
    });
  });

  describe("Subtraction tests", () => {
    test("subtract() should correctly subtract two positive numbers", () => {
      expect(calculator.subtract(5, 3)).toBeEqual(2);
      expect(calculator.subtract(10, 5)).toBeEqual(5);
    });

    test("subtract() should handle negative numbers", () => {
      expect(calculator.subtract(-2, 3)).toBeEqual(-5);
      expect(calculator.subtract(-5, -3)).toBeEqual(-2);
    });
  });

  describe(" Multiplication tests", () => {
    test("multiply() should correctly multiply two positive numbers", () => {
      expect(calculator.multiply(2, 3)).toBeEqual(6);
      expect(calculator.multiply(4, 5)).toBeEqual(20);
    });

    test("multiply() should handle negative numbers", () => {
      expect(calculator.multiply(-2, 3)).toBeEqual(-6);
      expect(calculator.multiply(-2, -3)).toBeEqual(6);
    });
    test("multiply() should handle zero", () => {
      expect(calculator.multiply(5, 0)).toBeEqual(0);
      expect(calculator.multiply(0, 5)).toBeEqual(0);
    });
  });

  describe(" Division tests", () => {
    test("divide() should correctly divide two positive numbers", () => {
      expect(calculator.divide(6, 2)).toBeEqual(3);
      expect(calculator.divide(15, 3)).toBeEqual(5);
    });

    test("divide() should handle negative numbers", () => {
      expect(calculator.divide(-6, 2)).toBeEqual(-3);
      expect(calculator.divide(-6, -2)).toBeEqual(3);
    });
  });
});
