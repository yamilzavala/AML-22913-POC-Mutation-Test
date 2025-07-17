export function omit(obj, keys) {
  const copy = { ...obj };
  keys.forEach(key => delete copy[key]);
  return copy;
}
