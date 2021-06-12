describe('Comparador toBeUndefined', function () {
  it('Deve garantir que o valor não foi definido', function () {
    var n1;
    var n2 = undefined;
    var n3 = null;

    expect(n1).toBeUndefined();
    expect(n2).toBeUndefined();
    expect(n3).not.toBeUndefined();
  });
});
