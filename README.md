# TypeScript Immutable Utils [![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Type-safe immutability helpers for simple objects and arrays.

## Installation

```
npm install --save typescript-immutable-utils
```

## API

### Arrays

* `setAt<T>(items: T[], index: number, item: T): T[]`

    Returns new array with replaced item at given index.

    If item is equal to the old one, original array is returned.

* `insertAt<T>(items: T[], index: number, item: T): T[]`

    Returns new array with inserted item at given index.

    If index is negative, counts from the end of the array.

* `removeAt<T>(items: T[], index: number): T[]`

    Returns new array with removed item at given index.

    If index is out of bounds, original array is returned.

    If index is negative, counts from the end of the array.

* `removeValue<T>(items: T[], item: T): T[]`

    Returns new array with given value removed.

    If value is not present in the array, it is returned unchanged.

### Objects

* `update<T>(target: T, values: Partial<T>): T`

    Returns new object with updated values.

    If all values are the same, original object is returned.

### Maps (ES-2015)

* `mapValues<K, T, R>(src: Map<K, T>, map: (value: T, key: K) => R): Map<K, R>`

    Returns new Map with updated values

### Dicts

Dictionary type is a simple index signature:

```ts
type Dict<V> = {[key: string]: V};
```

* `createDict<V>(): Dict<V>`

    Creates empty dict.

* `copyDict<V>(dict: Dict<V>): Dict<V>`

    Copies given dict.

* `hasKey(dict: Dict<any>, key: any): boolean`

    Checks whether dict has given key.

* `mapValues<T, R>(dict: Dict<T>, map: (value: T) => R): Dict<R>`

    Creates new dict with same keys as given dict whose values are the result of
    applying mapping function on given dict values.

    If every returned value is the same as in original dict, original dict is
    returned.

* `union<V>(target: Dict<V>, source: Dict<V>): Dict<V>`

    Creates new dict with values from both given dicts.

* `setKey<V>(dict: Dict<V>, key: any, value: V): Dict<V>`

    Returns new dict with given key set to given value.

    If the value is the same as in original dict, original dict is returned.

* `removeKey<V>(dict: Dict<V>, ...keys: any[]): Dict<V>`

    Returns new dict with given keys removed.

    If none of the keys are present in original dict, original dict is returned.

* `fromKeys<V>(keys: any[], values: V | ((key: any) => V)): Dict<V>`

    If `values` is not a function, creates new dict with given keys whose values are
    all the same and equal to `values`.

    If `values` is function, creates new dict with given keys whose values are the
    result of applying this function to the key.

[npm-image]: https://badge.fury.io/js/typescript-immutable-utils.svg
[npm-url]: https://badge.fury.io/js/typescript-immutable-utils
[travis-image]: https://travis-ci.org/aikoven/typescript-immutable-utils.svg?branch=master
[travis-url]: https://travis-ci.org/aikoven/typescript-immutable-utils
