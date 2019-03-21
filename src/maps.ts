export const mapValues = <K, T, R>(
  src: Map<K, T>,
  map: (value: T, key: K) => R
): Map<K, R> =>
  new Map(
    Array.from(src.entries()).map(
      ([key, value]) => [key, map(value, key)] as [K, R],
    ),
  );
