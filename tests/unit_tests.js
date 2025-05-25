import { describe, test, expect } from "scripterio";

describe("Unit tests:", () => {
  test("Usage toBeDefined()", () => {
    const number = 1;
    expect(number).toBeDefined();
  });

  test("Usage toHaveLength()", () => {
    const arr = [1, 2, 3];
    expect(arr).toHaveLength(3);
  });

  test("Usage toBeFalsy()", () => {
    const flag = false;
    expect(flag).toBeFalsy();
  });

  test("Usage toBeTruthy()", () => {
    const flag = true;
    expect(flag).toBeTruthy();
  });

  test("Usage toEqual()", () => {
    expect(1).toBeEqual(1);
    expect("test").toBeEqual("test");
    expect(true).toBeEqual(true);
    expect(false).toBeEqual(false);
  });

  test("Usage notToEqual()", () => {
    expect(2).toBeNotEqual(1);
    expect("best").toBeNotEqual("test");
    expect(false).toBeNotEqual(true);
    expect({}).toBeNotEqual({});
    expect([]).toBeNotEqual([]);
  });

  test("Wait 1 sec and check (async)", { timeout: 2000 }, async () => {
    const number = await new Promise((resolve) =>
      setTimeout(() => resolve(1), 1_000)
    );
    expect(number).toBeDefined();
  });

  test("Usage toBeNull()", () => {
    expect(null).toBeNull();
  });

  test("Usage notToBeNull()", () => {
    expect(1).toBeNotNull();
  });

  test("Usage toBeUndefined()", () => {
    expect(undefined).toBeUndefined();
  });

  test("Usage toBeGreaterThan()", () => {
    expect(5).toBeGreaterThan(4);
  });

  test("Usage toBeLessThan()", () => {
    expect(3).toBeLessThan(4);
  });

  test("Usage toBeNaN()", () => {
    expect("10F").toBeNaN();
  });

  test("Usage toContain()", () => {
    const arr = ["real", "test"];
    expect(arr).toContain("test");
    expect(arr[0]).toContain("al");
  });

  test("Usage toMatch()", () => {
    expect("test").toMatch("test");
    expect("test").toMatch(/test/i);
  });
});
