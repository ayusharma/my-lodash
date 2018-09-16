import kebabCase from '../kebabCase';

test('kebabCase', () => {
    expect(kebabCase('Foo Bar')).toEqual('foo-bar');
    expect(kebabCase('fooBar')).toEqual('foo-bar');
    expect(kebabCase('__FOO_BAR__')).toEqual('foo-bar');
});
