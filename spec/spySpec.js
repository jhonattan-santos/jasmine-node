describe('Teste com spy', function () {
  let Calculadora = {
    somar: function (n1, n2) {
      return n1 + n2;
    },
  };

  beforeAll(function () {
    spyOn(Calculadora, 'somar');
  });

  it('Deve possuir o objeto com o método somar não definido', function () {
    expect(Calculadora.somar(1, 1)).toBeUndefined();
  });
});
