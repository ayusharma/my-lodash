import lowerCase from '../lowerCase';

test('lowerCase', () => {
  expect(lowerCase('--Foo-Bar--')).toEqual('foo bar');
  expect(lowerCase('fooBar')).toEqual('foo bar');
  expect(lowerCase('__FOO_BAR__')).toEqual('foo bar');
});
