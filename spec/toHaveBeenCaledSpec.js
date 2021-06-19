describe('Verificador toHaveBeenCalled', function () {
  let calculadora = {
    somar: function (n1, n2) {
      return n1 + n2;
    },
  };

  beforeAll(function () {
    spyOn(calculadora, 'somar');
  });

  it('Deve demonstrar a utilização do toHaveBeenCalled', function () {
    calculadora.somar(1, 2);
    expect(calculadora.somar).toHaveBeenCalled();
  });
});
