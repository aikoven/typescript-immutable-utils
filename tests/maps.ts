import * as test from "tape";
import { Test } from "tape";
import { mapValues } from "../src/maps";

test("maps", ({ test }: Test) => {
  test("mapValues, immutability", assert => {
    const src = new Map();
    src.set("lol", 42);

    const result = mapValues(src, (value, _) => value);
    assert.equal(src === result, false);
    assert.end();
  });

  test("mapValues, identity", assert => {
    const src = new Map();
    src.set("lol", 42);

    const result = mapValues(src, (value, _) => value);
    assert.deepEqual(Array.from(src.entries()), Array.from(result.entries()));
    assert.end();
  });

  test("mapValues, associativity", assert => {
    const src = new Map();
    src.set("lol", 42);
    const f = (x: number) => x * 2;
    const g = (x: number) => `${x} ${x}`;

    const result1 = mapValues(mapValues(src, f), g);
    const result2 = mapValues(src, x => g(f(x)));
    assert.deepEqual(
      Array.from(result1.entries()),
      Array.from(result2.entries()),
    );
    assert.end();
  });
});
