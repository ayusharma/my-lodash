import capitalize from '../capitalize';

test('capitalize', () => {
    expect(capitalize('FRED')).toEqual('Fred');
    expect(capitalize('fred')).toEqual('Fred');
    expect(capitalize('frEd')).toEqual('Fred');
});