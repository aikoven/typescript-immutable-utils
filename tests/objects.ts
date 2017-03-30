import * as test from "tape";
import {Test} from "tape";
import {update} from "../src/objects";



test('objects', ({test}: Test) => {
  test('update', assert => {
    const obj = {a: 1, b: 2};
    Object.freeze(obj);

    assert.deepEqual(update(obj, {b: 42}), {a: 1, b: 42},
      "Should return object with updated values");

    assert.equal(update(obj, {a: 1}), obj,
      "Should return same object when values are the same");

    assert.end();
  });
});
