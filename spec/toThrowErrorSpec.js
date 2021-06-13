describe('Verificador de erro toThrowError', function () {
  it('deve demonstrar o funcionamento do toThrowError', function () {
    const somar = function (n1, n2) {
      if (n1 <= 0 || n2 <= 0) {
        throw new TypeError('Deve ser maior que 0');
      }
      return n1 + n2;
    };

    expect(function () {
      somar(0, 0);
    }).toThrowError();

    expect(function () {
      somar(0, 0);
    }).toThrowError('Deve ser maior que 0');

    expect(function () {
      somar(0, 0);
    }).toThrowError(/Deve ser maior que 0/);

    expect(function () {
      somar(0, 0);
    }).toThrowError(TypeError);

    expect(function () {
      somar(1, 1);
    }).not.toThrowError();
  });
});
