export * from './arrays';
export * from './objects';
export * from './dicts';

import {mapValues as mapDictValues, Dict} from './dicts';
import {mapValues as mapMapValues} from './maps';

export function mapValues<T, R>(
  dict: Dict<T>,
  map: (value: T, key: string) => R,
): Dict<R>;
export function mapValues<K, T, R>(
  src: Map<K, T>,
  map: (value: T, key: K) => R,
): Map<K, R>;
export function mapValues<K, T, R>(
  dictOrMap: Dict<T> | Map<K, T>,
  map: (value: T, key: K | string) => R,
) {
  return dictOrMap instanceof Map
    ? mapMapValues(dictOrMap, map)
    : mapDictValues(dictOrMap, map);
}
