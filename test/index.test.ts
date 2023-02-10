import { $, parallel } from "../src";
import { test, expect } from "vitest";

test("__filename", () => {
  expect(__filename.endsWith("/test/index.test.ts")).toBe(true);
});

test("__dirname", () => {
  expect(__dirname.endsWith("/test")).toBe(true);
});

test("$", () => {
  expect($`echo 1`).toBe("1");
});

test("$ with pipe", () => {
  expect($`ls | grep src`).toBe("src");
});

test("parallel", async () => {
  expect(await parallel(["echo 1", "echo 2"])).toStrictEqual(["1", "2"]);
});

test("parallel with pipe", async () => {
  expect(await parallel(["ls | grep src", "ls | grep LICENSE"])).toStrictEqual(["src", "LICENSE"]);
});
