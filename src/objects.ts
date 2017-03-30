export function update<T>(target: T, values: Partial<T>): T {
  let hasChanged: boolean = false;

  for (let key in values) {
    if (!Object.prototype.hasOwnProperty.call(values, key))
      continue;

    if (values[key] !== (target as any)[key]) {
      hasChanged = true;
      break;
    }
  }

  return !hasChanged ? target : Object.assign({}, target, values);
}
