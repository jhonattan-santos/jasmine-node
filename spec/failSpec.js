describe('Teste do fail', function () {
  it('Deve demonstrar a utilização do fail', function () {
    let operacao = function (executar, callback) {
      if (executar) {
        callback();
      }
    };

    operacao(false, function () {
      fail('Não deve executar função de callback');
    });
  });
});
