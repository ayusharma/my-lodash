import defaults from '../defaults';

test('defaults', () => {
    expect(defaults({ a: 1 }, { b: 2 }, { a: 3 })).toEqual({ a: 1, b: 2 });
});
