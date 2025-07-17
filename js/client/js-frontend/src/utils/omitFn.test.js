// src/utils/omitFn.test.js
import { omit } from './omitFn';

describe('omit', () => {
  test('removes a single key from an object', () => {
    const input = { name: 'Alice', age: 30 };
    const result = omit(input, ['age']);
    expect(result).toEqual({ name: 'Alice' });
  });

  test('removes multiple keys from an object', () => {
    const input = { id: 1, name: 'Bob', email: 'bob@example.com' };
    const result = omit(input, ['id', 'email']);
    expect(result).toEqual({ name: 'Bob' });
  });

  test('returns a new object and does not mutate the original', () => {
    const input = { a: 1, b: 2 };
    const original = { ...input };
    const result = omit(input, ['b']);
    expect(result).toEqual({ a: 1 });
    expect(input).toEqual(original); // original remains unchanged
  });

  test('returns full object when keys array is empty', () => {
    const input = { foo: 'bar' };
    const result = omit(input, []);
    expect(result).toEqual({ foo: 'bar' });
  });

  test('ignores keys that do not exist in the object', () => {
    const input = { x: 1, y: 2 };
    const result = omit(input, ['z']);
    expect(result).toEqual({ x: 1, y: 2 });
  });
});
