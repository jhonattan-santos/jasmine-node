describe('Verificador de erro toThrow', function () {
  it('Deve demonstrar a utilização do toThrow', function () {
    let semErro = function somar(n1, n2) {
      return n1 + n2;
    };

    let comErro = function mutiplicar() {
      return n1 * n2;
    };

    expect(semErro).not.toThrow();
    expect(comErro).toThrow();
  });
});
