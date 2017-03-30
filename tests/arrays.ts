import * as test from "tape";
import {Test} from "tape";
import {setAt, insertAt, removeAt, removeValue} from "../src/arrays";



test('arrays', ({test}: Test) => {
  test('setAt', assert => {
    const arr = [0, 1, 2];
    Object.freeze(arr);

    assert.deepEqual(setAt(arr, 0, 42), [42, 1, 2],
      "Should return new array with new item at index");

    assert.equal(setAt(arr, 0, 0), arr,
      "Should return same array if new value is equal to the old");

    assert.end();
  });

  test('insertAt', assert => {
    const arr = [0, 1, 2];
    Object.freeze(arr);

    assert.deepEqual(insertAt(arr, 1, 42), [0, 42, 1, 2],
      "Should return new array with new item at index");

    assert.deepEqual(insertAt(arr, -1, 42), [0, 1, 42, 2],
      "Should insert item from end for negative index");

    assert.end();
  });

  test('removeAt', assert => {
    const arr = [0, 1, 2];
    Object.freeze(arr);

    assert.deepEqual(removeAt(arr, 1), [0, 2],
      "Should return new array with item at index removed");

    assert.deepEqual(removeAt(arr, 3), [0, 1, 2],
      "Should return same array if index is out of bounds");

    assert.deepEqual(removeAt(arr, -1), [0, 1],
      "Should remove item from end for negative index");

    assert.end();
  });

  test('removeValue', assert => {
    const arr = [0, 1, 2];
    Object.freeze(arr);

    assert.deepEqual(removeValue(arr, 1), [0, 2],
      "Should return new array with value removed");

    assert.equal(removeValue(arr, 42), arr,
      "Should return same array if value is not present");

    assert.end();
  });
});
