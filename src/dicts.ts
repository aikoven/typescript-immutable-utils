import {update} from "./objects";


export type Dict<V> = {[key: string]: V};


export function createDict<V>(): Dict<V> {
  return Object.create(null);
}

export function copyDict<V>(dict: Dict<V>): Dict<V> {
  return Object.assign(createDict<V>(), dict);
}

export function hasKey(dict: Dict<any>, key: any): boolean {
  return Object.prototype.hasOwnProperty.call(dict, key.toString());
}

export function mapValues<T, R>(dict: Dict<T>,
                                map: (value: T, key: string) => R): Dict<R> {
  const ret = createDict<R>();

  let changed = false;

  for (let key of Object.keys(dict)) {
    ret[key] = map(dict[key], key);
    if (ret[key] as any !== dict[key])
      changed = true;
  }

  return changed ? ret : dict as any;
}


export function union<V>(target: Dict<V>, source: Dict<V>): Dict<V> {
  return update(target, source);
}


export function setKey<V>(dict: Dict<V>, key: any, value: V): Dict<V> {
  if (dict[key] === value)
    return dict;

  const ret = copyDict(dict);

  ret[key] = value;

  return ret;
}

export function removeKey<V>(dict: Dict<V>, ...keys: any[]): Dict<V> {
  const ret = copyDict(dict);

  let changed = false;

  for (const key of keys) {
    if (hasKey(ret, key.toString())) {
      changed = true;
      delete ret[key];
    }
  }

  return changed ? ret : dict;
}

export function fromKeys<V>(keys: any[],
                            values: V | ((key: any) => V)): Dict<V> {
  const ret = createDict<V>();

  const isFunction = typeof values === 'function';

  for (const key of keys) {
    ret[key] = isFunction ? (values as any)(key) : values;
  }

  return ret;
}
