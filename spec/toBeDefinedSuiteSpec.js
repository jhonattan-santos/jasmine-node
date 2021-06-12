describe('Comparador toBeDefined', function () {
  it('Deve validar se a variável tem valor definido', function () {
    var n1 = 3;
    var n2;
    var n3 = undefined;

    expect(n1).toBeDefined();
    expect(NaN).toBeDefined();
    expect(null).toBeDefined();

    expect(n2).not.toBeDefined();
    expect(n3).not.toBeDefined();
  });
});
