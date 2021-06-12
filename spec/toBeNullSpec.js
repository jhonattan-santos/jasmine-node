describe('Comparador toBeNull', function () {
  it('Deve demonstrar a utilização do toBeNull', function () {
    const n1 = null;
    const n2 = undefined;
    const n3 = NaN;
    const n4 = true;

    expect(n1).toBeNull();
    expect(n2).not.toBeNull();
    expect(n3).not.toBeNull();
    expect(n4).not.toBeNull();
  });
});
