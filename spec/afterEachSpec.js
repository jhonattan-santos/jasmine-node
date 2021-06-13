describe('Atuador afterEach', function () {
  let n = 0;

  beforeEach(function () {
    n++;
  });

  afterEach(function () {
    n = 0;
  });

  it('Deve garantir que o n é igual a 1', function () {
    expect(n).toEqual(1);
  });

  it('Deve garantir que o n é 1 também', function () {
    expect(n).toEqual(1);
  });
});
