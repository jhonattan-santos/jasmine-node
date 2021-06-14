describe('Teste com spy', function () {
  let Calculadora = {
    somar: function (n1, n2) {
      return n1 + n2;
    },
  };

  beforeEach(function () {
    spyOn(Calculadora, 'somar');
  });

  it('Deve possuir o objeto com o método somar não definido', function () {
    expect(Calculadora.somar(1, 1)).toBeUndefined();
  });

  it('Deve validar o uso da calculadora o somar deve ser chamado ao menos uma vez', function () {
    Calculadora.somar(1, 1);
    expect(Calculadora.somar).toHaveBeenCalled();
  });

  it('Deve chamar o método to haveBeenCalled duas vezes', function () {
    Calculadora.somar(1, 2);
    Calculadora.somar(1, 2);
    expect(Calculadora.somar).toHaveBeenCalledTimes(2);
  });
});
