import * as test from "tape";
import {Test} from "tape";
import {
  createDict, copyDict, hasKey, mapValues, union, setKey, removeKey, fromKeys,
} from "../src/dicts";



test('dicts', ({test}: Test) => {
  test('createDict', assert => {
    const dict = createDict();

    assert.true(typeof dict === 'object');
    assert.equal(Object.getPrototypeOf(dict), null);

    assert.end();
  });

  test('copyDict', assert => {
    const dict = createDict<number>();
    dict['lol'] = 42;
    Object.freeze(dict);

    assert.deepEqual(copyDict(dict), {lol: 42});

    assert.notEqual(copyDict(dict), dict);

    assert.end();
  });

  test('hasKey', assert => {
    const dict = createDict<number>();
    dict['lol'] = 42;
    Object.freeze(dict);

    assert.true(hasKey(dict, 'lol'));
    assert.false(hasKey(dict, 'kek'));

    assert.end();
  });

  test('mapValues', assert => {
    const dict = createDict<number>();
    dict['lol'] = 42;
    Object.freeze(dict);

    assert.deepEqual(mapValues(dict, value => value * 2), {lol: 84});
    assert.equal(mapValues(dict, value => value), dict);

    assert.end();
  });

  test('union', assert => {
    const dict = createDict<number>();
    dict['lol'] = 42;
    Object.freeze(dict);

    const secondDict = createDict<number>();
    secondDict['kek'] = 1;
    Object.freeze(secondDict);

    assert.deepEqual(union(dict, secondDict), {lol: 42, kek: 1});

    assert.equal(union(dict, {lol: 42}), dict);

    assert.end();
  });

  test('setKey', assert => {
    const dict = createDict<number>();
    dict['lol'] = 42;
    Object.freeze(dict);

    assert.deepEqual(setKey(dict, 'lol', 1), {lol: 1});
    assert.deepEqual(setKey(dict, 'kek', 1), {lol: 42, kek: 1});
    assert.equal(setKey(dict, 'lol', 42), dict);

    assert.end();
  });

  test('removeKey', assert => {
    const dict = createDict<number>();
    dict['lol'] = 42;
    Object.freeze(dict);

    assert.deepEqual(removeKey(dict, 'lol'), {});
    assert.equal(removeKey(dict, 'kek'), dict);

    assert.end();
  });

  test('fromKeys', assert => {
    assert.deepEqual(fromKeys(['lol', 'kek'], 42), {lol: 42, kek: 42});

    assert.deepEqual(fromKeys(['lol', 'kek'], value => value),
      {lol: 'lol', kek: 'kek'});

    assert.end();
  });
});
