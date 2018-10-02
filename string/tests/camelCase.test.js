import camelCase from '../camelCase';

test('camelCase', () => {
    expect(camelCase('Foo Bar')).toEqual('fooBar');
    expect(camelCase('--foo-bar--')).toEqual('fooBar');
    expect(camelCase('__FOO_BAR__')).toEqual('fooBar');
});
