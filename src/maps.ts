export function mapValues<K, T, R>(
  src: Map<K, T>,
  map: (value: T, key: K) => R,
): Map<K, R> {
  return new Map(
    Array.from(
      src.entries(),
      ([key, value]) => [key, map(value, key)] as [K, R],
    ),
  );
}
