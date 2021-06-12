describe('Comparador toBeFalsy', function () {
  it('Deve demonstrar a utilização do toBeFalsy', function () {
    const n1 = null;
    const n2 = false;
    const n3 = NaN;
    const n4 = undefined;
    const n5 = '';
    const n6 = true;

    expect(n1).toBeFalsy();
    expect(n2).toBeFalsy();
    expect(n3).toBeFalsy();
    expect(n4).toBeFalsy();
    expect(n5).toBeFalsy();

    expect(n6).not.toBeFalsy();
  });
});
